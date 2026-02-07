import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question"
  },

  selectedAnswer: String,

  isCorrect: Boolean
});

const practiceAttemptSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PracticeTest"
  },

  answers: [answerSchema],

  score: Number,
  totalQuestions: Number,
  accuracy: Number,

  weakTopics: [String],
  strongTopics: [String],

  timeTaken: Number // seconds
},
{ timestamps: true }
);

practiceAttemptSchema.index({ userId: 1,createdAt: -1 });

export default mongoose.model("PracticeAttempt", practiceAttemptSchema);
