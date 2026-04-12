import Question from "../models/practice model/Question.js";
import PracticeTest from "../models/PracticeTest.js";
import PracticeAttempt from "../models/PracticeAttempt.js";
import mongoose from "mongoose";
import User from "../models/User.js";


const TOPIC_MAP = {
  aptitude: "aptitude",
  reasoning: "reasoning",
  verbal: "verbal",
  coding: "coding",
};

const ALLOWED_TOPICS = Object.keys(TOPIC_MAP);

const DURATION_PER_QUESTION = {
  aptitude: 90,
  reasoning: 90,
  verbal: 60,
  coding: 180,   // coding questions deserve more time
  default: 90,
};

export const generatePracticeTest = async (req, res) => {
  try {
    const {
      difficulty,
      companyId,
      testTopic,
      totalQuestions,
    } = req.body;

    // ── 1. Validate required fields 
    if (!difficulty) {
      return res.status(400).json({ message: "difficulty is required." });
    }

    if (!testTopic) {
      return res.status(400).json({ message: "testTopic is required." });
    }

    // ── 2. Validate testTopic value ─────────────────────────────────────────
    const normalizedTopic = testTopic.toLowerCase().trim();

    if (!ALLOWED_TOPICS.includes(normalizedTopic)) {
      return res.status(400).json({
        message: `Invalid testTopic. Allowed values: ${ALLOWED_TOPICS.join(", ")}.`,
      });
    }

    // ── 3. Validate totalQuestions ──────────────────────────────────────────
    const numQuestions = parseInt(totalQuestions, 10);
    if (isNaN(numQuestions) || numQuestions < 1 || numQuestions > 50) {
      return res.status(400).json({
        message: "totalQuestions must be a number between 1 and 50.",
      });
    }

    const normalizedDifficulty = difficulty.toLowerCase().trim();
    // ── 4. Build MongoDB filter ─────────────────────────────────────────────
    const filter = {
      questionType: "mcq",
      difficulty: normalizedDifficulty,
      topic: normalizedTopic,   // ← THIS was missing before
    };

    // Optionally scope to a specific company's question bank
    if (companyId && mongoose.Types.ObjectId.isValid(companyId)) {
      filter.companyTags = new mongoose.Types.ObjectId(companyId);
    }

    // ── 5. Calculate test duration ──────────────────────────────────────────
    const secsPerQ =
      DURATION_PER_QUESTION[normalizedTopic] ?? DURATION_PER_QUESTION.default;
    const duration = numQuestions * secsPerQ; // total seconds

    // ── 6. Fetch random questions from DB ───────────────────────────────────
    const questions = await Question.aggregate([
      { $match: filter },
      { $sample: { size: numQuestions } },
    ]);

    
    if (questions.length === 0) {
      return res.status(404).json({
        message: `No ${normalizedTopic} questions found for difficulty "${difficulty}".`,
      });
    }

    // Warn if DB didn't have enough (but still proceed with what we got)
    const actualCount = questions.length;

    // ── 7. Persist the PracticeTest document ────────────────────────────────
    const test = await PracticeTest.create({
      userId: req.user.userId,
      questions: questions.map((q) => q._id),
      difficulty,
      companyId: companyId || null,
      testType: normalizedTopic, 
      totalQuestions: actualCount,
      status: "generated",
      startTime: new Date(),
      duration,
    });

    // ── 8. Strip correct answers before sending to client ───────────────────
    const safeQuestions = questions.map((q) => ({
      _id: q._id,
      questionText: q.questionText,
      options: q.options.map(opt => ({
        text: opt.text
      })),          // array of { text, _id } — no `isCorrect`
      topic: q.topic,
      subTopic: q.subTopic,
      difficulty: q.difficulty,
    }));

    // ── 9. Respond ───────────────────────────────────────────────────────────
    return res.status(201).json({
      message: "Practice test generated successfully.",
      testId: test._id,
      testTopic: normalizedTopic,
      difficulty,
      totalQuestions: actualCount,
      duration,                         // seconds — frontend converts to mm:ss
      questions: safeQuestions,
    });

  } catch (error) {
    console.error("[generatePracticeTest]", error);
    return res.status(500).json({
      message: "Failed to generate practice test.",
      error: error.message,
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
      select: "questionText options topic subTopic difficulty"
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

    const results = test.questions.map((q, idx) => {

      const userAnswer = answers[q._id.toString()] ?? null;

      // ⭐ find correct option
      const correctOption = q.options.find(o => o.isCorrect)?.text;

      const isCorrect = userAnswer && userAnswer.trim() === correctOption?.trim();

      if (isCorrect) score++;

      // ⭐ Use subTopic instead of topic
      const evaluationTopic = q.subTopic || q.topic;

      // topic tracking
      if (!topicStats[evaluationTopic]) {
        topicStats[evaluationTopic] = { total: 0, correct: 0 };
      }

      topicStats[evaluationTopic].total++;

      if (isCorrect) topicStats[evaluationTopic].correct++;

      const result = {
        questionId: q._id,
        selectedAnswer: userAnswer,
        isCorrect
      };
      
      return result;
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

    await PracticeTest.findByIdAndUpdate(testId, {
      status: "submitted",
      submittedAt: new Date(),
      score,
      accuracy,
      results,
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
        select: "questions",
        populate: {
          path: "questions",
          select: "questionText options topic subTopic difficulty"
        }
      });

    if (!attempt) {
      return res.status(404).json({
        message: "Result not found"
      });
    }

    const questions = attempt.testId?.questions || [];

    const answerMap = new Map();
    attempt.answers.forEach((a, idx) => {
      answerMap.set(String(a.questionId), a);
    });

    const review = questions.map((q, idx) => {

      const correctOption = q.options.find(o => o.isCorrect)?.text;

      const result = answerMap.get(String(q._id));

      return {
        question: q.questionText,
        options: q.options.map(o => o.text),  // ⭐ return clean array
        correctAnswer: correctOption,
        selectedAnswer: result?.selectedAnswer || null,
        isCorrect: result?.isCorrect || false,
      };
    });

    res.json({
      score: attempt.score,
      accuracy: attempt.accuracy,
      totalQuestions: questions.length,
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
        strongTopics
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





