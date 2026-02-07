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
      enum: ["aptitude", "technical", "verbal"],
      required: true
    },

    totalQuestions: Number,

    status: {
      type: String,
      enum: ["generated", "completed"],
      default: "generated"
    },
    startTime: {
      type: Date,
      default: Date.now
    },

    duration: {
      type: Number
    },
    isSubmitted: {
      type: Boolean,
      default: false
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



  },
  { timestamps: true }
);

export default mongoose.model("PracticeTest", practiceTestSchema);
