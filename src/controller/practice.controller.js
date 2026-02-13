import Question from "../models/practice model/Question.js";
import PracticeTest from "../models/PracticeTest.js";
import PracticeAttempt from "../models/PracticeAttempt.js";
import mongoose from "mongoose";
import User from "../models/User.js";


export const generatePracticeTest = async (req, res) => {

  try {

    const {
      difficulty,
      companyId,
      testType,
      totalQuestions = 10
    } = req.body;

    /* Build filter */
    const filter = {
      difficulty,
      questionType: "mcq"
    };
    const durationPerQuestion = 90; // seconds

    const duration = totalQuestions * durationPerQuestion;


    if (companyId && mongoose.Types.ObjectId.isValid(companyId)) {
      filter.companyTags = companyId;
    }

    /* RANDOM SAMPLING — MongoDB Magic */
    const questions = await Question.aggregate([
      { $match: filter },
      { $sample: { size: totalQuestions } }
    ]);

    if (questions.length === 0) {
      return res.status(404).json({
        message: "Not enough questions found"
      });
    }

    /* Create test */
    const test = await PracticeTest.create({
      userId: req.user.userId,
      questions: questions.map(q => q._id),
      difficulty,
      companyId,
      testType,
      totalQuestions,
      startTime: new Date(),
      duration
    });


    /* Remove answers before sending */
    const safeQuestions = questions.map(q => ({
      _id: q._id,
      questionText: q.questionText,
      options: q.options,
      topic: q.topic,
      difficulty: q.difficulty
    }));

    res.status(201).json({
      message: "Practice test generated",
      testId: test._id,
      questions: safeQuestions,
      duration: test.duration
    });

  } catch (error) {

    res.status(500).json({
      message: "Failed to generate test",
      error: error.message
    });
  }
};

export const getPracticeTest = async (req, res) => {

  const test = await PracticeTest.findById({
    _id: req.params.id,
    userId: req.user.userId
  })
    .populate({
      path: "questions",
      select: "questionText options topic difficulty"
    });

  if (!test) {
    return res.status(404).json({
      message: "Test not found"
    });
  }

  res.json(test);
};



export const submitPracticeTest = async (req, res) => {

  try {

    const { testId } = req.params;
    const { answers } = req.body;

    const test = await PracticeTest
      .findById(testId)
      .populate("questions");

    if (!test) {
      return res.status(404).json({
        message: "Test not found"
      });
    }

    // Prevent duplicate attempt
    const existing = await PracticeAttempt.findOne({
      userId: req.user.userId,
      testId
    });

    if (existing) {
      return res.status(409).json({
        message: "Already attempted",
        attemptId: existing._id
      });
    }

    let score = 0;
    const topicStats = {};

    const results = test.questions.map(q => {

      const userAnswer = answers[q._id.toString()];

      // ⭐ find correct option
      const correctOption = q.options.find(o => o.isCorrect)?.text;

      const isCorrect = userAnswer === correctOption;

      if (isCorrect) score++;

      // topic tracking
      if (!topicStats[q.topic]) {
        topicStats[q.topic] = { total: 0, correct: 0 };
      }

      topicStats[q.topic].total++;

      if (isCorrect) topicStats[q.topic].correct++;

      return {
        questionId: q._id,
        selectedAnswer: userAnswer,
        isCorrect
      };
    });

    const weakTopics = [];
    const strongTopics = [];

    Object.entries(topicStats).forEach(([topic, stats]) => {
      const acc = stats.correct / stats.total;

      if (acc < 0.5) weakTopics.push(topic);
      if (acc >= 0.8) strongTopics.push(topic);
    });

    const accuracy = (score / test.questions.length) * 100;

    const attempt = await PracticeAttempt.create({
      userId: req.user.userId,
      testId: test._id,
      answers: results,
      score,
      accuracy,
      weakTopics,
      strongTopics
    });

    res.json({
      message: "Test submitted",
      attemptId: attempt._id
    });

  } catch {
    res.status(500).json({
      message: "Submission failed"
    });
  }
};




export const getTestResult = async (req, res) => {

  try {

    const { attemptId } = req.params;

    const attempt = await PracticeAttempt
      .findById(attemptId)
      .populate({
        path: "testId",
        populate: {
          path: "questions"
        }
      });

    if (!attempt) {
      return res.status(404).json({
        message: "Result not found"
      });
    }

    const questions = attempt.testId.questions;

    const review = questions.map(q => {

      const correctOption = q.options.find(o => o.isCorrect)?.text;

      const result = attempt.answers.find(
        r => r.questionId.toString() === q._id.toString()
      );

      return {
        question: q.questionText,
        options: q.options.map(o => o.text),  // ⭐ return clean array
        correctAnswer: correctOption,
        selectedAnswer: result?.selectedAnswer,
        isCorrect: result?.isCorrect
      };
    });

    res.json({
      score: attempt.score,
      accuracy: attempt.accuracy,
      weakTopics: attempt.weakTopics,
      strongTopics: attempt.strongTopics,
      review
    });

  } catch {
    res.status(500).json({
      message: "Failed to fetch result"
    });
  }
};



export const getAttemptHistory = async (req, res) => {
  try {

    const userId = req.user.userId;

    const attempts = await PracticeAttempt
      .find({ userId })

      // populate test data
      .populate({
        path: "testId",
        select: "difficulty totalQuestions testType"
      })

      .sort({ createdAt: -1 }) // newest first

      .select(`
        score
        accuracy
        weakTopics
        createdAt
        testId
      `);

    res.json(attempts);

  } catch (err) {

    res.status(500).json({
      message: "Failed to fetch attempts"
    });
  }
};





