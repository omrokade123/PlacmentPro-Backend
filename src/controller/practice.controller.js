import Question from "../models/practice model/Question.js";
import PracticeTest from "../models/PracticeTest.js";
import PracticeAttempt from "../models/PracticeAttempt.js";
import mongoose from "mongoose";

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

  const test = await PracticeTest.findById(req.params.id)
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

    // Prevent double submission
    if (test.isSubmitted) {
      return res.status(409).json({
        message: "Test already submitted",
        redirect: `/practice/result/${test._id}`
      });
    }

    let score = 0;

    const topicStats = {};

    const results = test.questions.map(q => {

      const userAnswer = answers[q._id.toString()];
      const correct = userAnswer === q.correctAnswer;

      if (correct) score++;

      // Track topics
      if (!topicStats[q.topic]) {
        topicStats[q.topic] = {
          total: 0,
          correct: 0
        };
      }

      topicStats[q.topic].total++;

      if (correct) {
        topicStats[q.topic].correct++;
      }

      return {
        questionId: q._id,
        selectedAnswer: userAnswer,
        isCorrect: correct
      };
    });

    const weakTopics = [];
    const strongTopics = [];

    Object.entries(topicStats).forEach(
      ([topic, stats]) => {

        const accuracy =
          stats.correct / stats.total;

        if (accuracy < 0.5) {
          weakTopics.push(topic);
        }

        if (accuracy >= 0.8) {
          strongTopics.push(topic);
        }
      }
    );

    test.weakTopics = weakTopics;
    test.strongTopics = strongTopics;

    test.score = score;

    test.accuracy =
      (score / test.questions.length) * 100;

    test.results = results;


    test.isSubmitted = true;
    test.submittedAt = new Date();
    await test.save();

    res.json({
      message: "Test submitted",
      testId: test._id
    });

  } catch (err) {

    res.status(500).json({
      message: "Submission failed"
    });
  }
};

export const getTestResult = async (req, res) => {

  try {

    const { testId } = req.params;

    const test = await PracticeTest
      .findById(testId)
      .populate("questions");

    if (!test || !test.isSubmitted) {

      return res.status(404).json({
        message: "Result not found"
      });
    }
    const review = test.questions.map(q => {

      const result = test.results.find(
        r => r.questionId.toString() === q._id.toString()
      );

      return {
        question: q.questionText,
        options: q.options,
        correctAnswer: q.correctAnswer,
        selectedAnswer: result?.selectedAnswer,
        isCorrect: result?.isCorrect,
      };
    });

    res.json({
      score: test.score,
      total: test.questions.length,
      accuracy: test.accuracy,
      results: test.results,
      submittedAt: test.submittedAt,
      review,
      weakTopics: test.weakTopics,
      strongTopics: test.strongTopics,
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

    const attempts = await PracticeTest
      .find({
        userId,
        isSubmitted: true
      })
      .sort({ submittedAt: -1 }) // newest first
      .select(`
        score
        accuracy
        difficulty
        totalQuestions
        weakTopics
        createdAt
        submittedAt
      `);

    res.json(attempts);

  } catch {

    res.status(500).json({
      message: "Failed to fetch attempts"
    });
  }
};




