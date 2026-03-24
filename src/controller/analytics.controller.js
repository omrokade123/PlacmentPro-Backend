import PracticeAttempt from "../models/PracticeAttempt.js";
import PracticeTest from "../models/PracticeTest.js";
import mongoose from "mongoose";

export const getUserAnalytics = async (req, res) => {

  try {

    const userId = new mongoose.Types.ObjectId(req.user.userId);
    //console.log(userId);

    const tests = await PracticeTest.find({
      userId,
      status: "submitted",
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


  } catch (err) {

    res.status(500).json({
      message: "Failed to fetch analytics"
    });
  }
};


// export const getUserAnalytics = async (req, res) => {

//   try {

//     const userId = new mongoose.Types.ObjectId(req.user.userId);

//     const attempts = await PracticeAttempt.aggregate([

//       { $match: { userId } },

//       {
//         $group: {
//           _id: null,
//           totalTests: { $sum: 1 },
//           avgScore: { $avg: "$score" },
//           avgAccuracy: { $avg: "$accuracy" },
//           weakTopics: { $push: "$weakTopics" },
//           strongTopics: { $push: "$strongTopics" }
//         }
//       }

//     ]);
//     const trendData = await PracticeAttempt
//       .find({ userId })
//       .sort({ createdAt: 1 })
//       .select("score accuracy createdAt");
//     res.json(attempts[0] || {
//       totalTests: 0,
//       avgScore: 0,
//       avgAccuracy: 0,
//       weakTopics: [],
//       strongTopics: [],
//       trendData
//     });

//   } catch (err) {

//     res.status(500).json({
//       message: "Analytics failed"
//     });

//   }
// };
