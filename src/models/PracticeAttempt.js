import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question"
  },

  isCorrect:{
    type: Boolean,
    dafault: false
  }
});

const practiceAttemptSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index:true
  },

  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PracticeTest",
    index:true
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

practiceAttemptSchema.index({ userId: 1,testId: 1 });

export default mongoose.model("PracticeAttempt", practiceAttemptSchema);
