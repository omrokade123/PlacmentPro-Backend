// seed/aptitudeQuestions.js
// Run with: node seed/aptitudeQuestions.js
// Make sure your DB_URI is set in .env

import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "../src/models/practice model/Question.js";

dotenv.config({ path: "../.env" });

const aptitudeQuestions = [
  {
    "questionText": "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    "options": [
      { "text": "120 metres", "isCorrect": false },
      { "text": "180 metres", "isCorrect": false },
      { "text": "150 metres", "isCorrect": true },
      { "text": "320 metres", "isCorrect": false }
    ],
    "explanation": "Speed = 60 * (5/18) m/sec = 50/3 m/sec. Length of train = (Speed * Time) = (50/3 * 9) m = 150 m.",
    "topic": "aptitude",
    "subTopic": "Problems on Trains",
    "difficulty": "easy",
    "difficultyScore": 1,
    "questionType": "mcq",
    "cognitiveLevel": "apply",
    "isActive": true
  },
  {
    "questionText": "A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is:",
    "options": [
      { "text": "1/4", "isCorrect": false },
      { "text": "1/10", "isCorrect": false },
      { "text": "7/15", "isCorrect": false },
      { "text": "8/15", "isCorrect": true }
    ],
    "explanation": "A's 1 day's work = 1/15. B's 1 day's work = 1/20. (A + B)'s 1 day's work = (1/15 + 1/20) = 7/60. Work done in 4 days = (7/60 * 4) = 7/15. Remaining work = (1 - 7/15) = 8/15.",
    "topic": "aptitude",
    "subTopic": "Time and Work",
    "difficulty": "medium",
    "difficultyScore": 3,
    "questionType": "mcq",
    "cognitiveLevel": "analyze",
    "isActive": true
  },
  {
    "questionText": "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
    "options": [
      { "text": "15", "isCorrect": false },
      { "text": "16", "isCorrect": true },
      { "text": "18", "isCorrect": false },
      { "text": "25", "isCorrect": false }
    ],
    "explanation": "Let C.P. of each article be Re. 1. Then C.P. of x articles = Rs. x. S.P. of x articles = Rs. 20. Profit = Rs. (20 - x). Profit % = ((20 - x)/x * 100) = 25. Therefore, x = 16.",
    "topic": "aptitude",
    "subTopic": "Profit and Loss",
    "difficulty": "hard",
    "difficultyScore": 5,
    "questionType": "mcq",
    "cognitiveLevel": "analyze",
    "isActive": true
  },
  {
    "questionText": "A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:",
    "options": [
      { "text": "Rs. 650", "isCorrect": false },
      { "text": "Rs. 690", "isCorrect": false },
      { "text": "Rs. 698", "isCorrect": true },
      { "text": "Rs. 700", "isCorrect": false }
    ],
    "explanation": "S.I. for 1 year = Rs. (854 - 815) = Rs. 39. S.I. for 3 years = Rs. (39 * 3) = Rs. 117. Principal = Rs. (815 - 117) = Rs. 698.",
    "topic": "aptitude",
    "subTopic": "Simple Interest",
    "difficulty": "medium",
    "difficultyScore": 3,
    "questionType": "mcq",
    "cognitiveLevel": "apply",
    "isActive": true
  },
  {
    "questionText": "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
    "options": [
      { "text": "4", "isCorrect": true },
      { "text": "7", "isCorrect": false },
      { "text": "9", "isCorrect": false },
      { "text": "13", "isCorrect": false }
    ],
    "explanation": "Required number = H.C.F. of (91 - 43), (183 - 91) and (183 - 43) = H.C.F. of 48, 92 and 140 = 4.",
    "topic": "aptitude",
    "subTopic": "HCF and LCM",
    "difficulty": "medium",
    "difficultyScore": 3,
    "questionType": "mcq",
    "cognitiveLevel": "understand",
    "isActive": true
  }
];

// ── Seed function ─────────────────────────────────────────────────────────────
const seed = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const inserted = await Question.insertMany(aptitudeQuestions)
    console.log(inserted);
    // Optional: clear existing aptitude questions before seeding
    // await Question.deleteMany({ topic: "aptitude" });

    // const inserted = await Question.insertMany(aptitudeQuestions);
    // console.log(`✅ Inserted ${inserted.length} aptitude questions`);

    // const counts = {
    //   easy:   aptitudeQuestions.filter(q => q.difficulty === "easy").length,
    //   medium: aptitudeQuestions.filter(q => q.difficulty === "medium").length,
    //   hard:   aptitudeQuestions.filter(q => q.difficulty === "hard").length,
    // };
    // console.log(`   Easy: ${counts.easy} | Medium: ${counts.medium} | Hard: ${counts.hard}`);

    await mongoose.disconnect();
    console.log("✅ Disconnected");
  } catch (err) {
    console.error("❌ Seed failed:", err.message);
    process.exit(1);
  }
};

seed();