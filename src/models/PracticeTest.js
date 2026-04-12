import mongoose from "mongoose";

const practiceTestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    questions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question"
    }],

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company"
    },

    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"]
    },

    testType: {
      type: String,
      enum: ["aptitude", "reasoning", "verbal", "coding"],
      required: true,
      index: true
    },

    // ⭐ optional filter used while generating test
    subTopics: [
      {
        type: String,
        index: true
      }
    ],

    totalQuestions: Number,

    status: {
      type: String,
      enum: ["generated", "submitted"],
      default: "generated"
    },

    startTime: {
      type: Date,
      default: Date.now
    },

    duration: {
      type: Number // seconds
    },

    submittedAt: Date,

    score: Number,
    accuracy: Number,

    results: [
      {
        questionId: mongoose.Schema.Types.ObjectId,
        selectedAnswer: String,
        isCorrect: Boolean
      }
    ],

    weakTopics: [String],
    strongTopics: [String],
    topicStats: {
      type: Map,
      of: {
        total: Number,
        correct: Number
      }
    }


  },
  { timestamps: true }
);

practiceTestSchema.index({ userId: 1, createdAt: -1 });
practiceTestSchema.index({testType:1 , difficulty:1});

export default mongoose.model("PracticeTest", practiceTestSchema);
