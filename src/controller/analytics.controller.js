import PracticeTest from "../models/PracticeTest.js";

export const getUserAnalytics = async (req, res) => {

  try {

    const userId = req.user.userId;

    const tests = await PracticeTest.find({
      userId,
      isSubmitted: true,
      score: { $exists: true }
    });

    if (!tests.length) {

      return res.json({
        totalTests: 0,
        avgScore: 0,
        accuracy: 0,
        weakTopics: [],
        strongTopics: []
      });
    }

    // 🔥 Core Metrics
    const totalTests = tests.length;

    const totalScore = tests.reduce(
      (sum, t) => sum + (t.score || 0),
      0
    );


    const totalQuestions = tests.reduce(
      (sum, t) => sum + (t.totalQuestions || 0),
      0
    );

    const avgScore = totalTests
      ? Number((totalScore / totalTests).toFixed(1))
      : 0;



    const accuracy = totalQuestions
      ? ((totalScore / totalQuestions) * 100).toFixed(1)
      : 0;


    // 🔥 Topic Aggregation
    const weakSet = new Set();
    const strongSet = new Set();

    tests.forEach(test => {

      test.weakTopics?.forEach(t =>
        weakSet.add(t)
      );

      test.strongTopics?.forEach(t =>
        strongSet.add(t)
      );
    });

    const trendData = tests.map(test => ({
      date: test.submittedAt.toISOString().split("T")[0],
      score: test.score,
      accuracy: test.accuracy
    }));



    res.json({
      totalTests,
      avgScore,
      accuracy,
      weakTopics: [...weakSet],
      strongTopics: [...strongSet],
      trendData
    });


  } catch {

    res.status(500).json({
      message: "Failed to fetch analytics"
    });
  }
};
