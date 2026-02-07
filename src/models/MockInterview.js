import mongoose from "mongoose";

const interviewQuestionSchema = new mongoose.Schema({
  questionText: String,
  userAnswerText: String,
  audioUrl: String,

  evaluation: {
    relevanceScore: Number,
    clarityScore: Number,
    confidenceScore: Number,
    grammarScore: Number,
    fillerWordCount: Number
  },

  aiFeedback: String
});

const mockInterviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company"
    },

    role: String,

    interviewType: {
      type: String,
      enum: ["HR", "Technical"]
    },

    questions: [interviewQuestionSchema],

    overallScore: Number,
    transcript: String
  },
  { timestamps: true }
);

export default mongoose.model("MockInterview", mockInterviewSchema);
