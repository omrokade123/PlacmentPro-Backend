import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({

  questionText: {
    type: String,
    required: true
  },

  options: [{
    text: String,
    isCorrect: Boolean
  }],

  explanation: String,

  topic: {
    type: String,
    enum: ["aptitude", "reasoning", "verbal", "coding"],
    required: true,
    index: true
  },
  subTopic: {
    type:String,
    index:true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
    index: true
  },

  difficultyScore: {
    type: Number,
    default: 2
  },

  companyTags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    index: true
  }],

  questionType: {
    type: String,
    enum: ["mcq", "numeric", "subjective"],
    default: "mcq"
  },

  metadata: {
    avgTimeTaken: {
      type: Number,
      default: 0
    },
    successRate: {
      type: Number,
      default: 0
    },
    attemptCount: {
      type: Number,
      default: 0
    }
  },

  cognitiveLevel: {
    type: String,
    enum: [
      "remember",
      "understand",
      "apply",
      "analyze"
    ]
  },

  isActive: {
    type: Boolean,
    default: true
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

export default mongoose.model(
  "Question",
  questionSchema
);
