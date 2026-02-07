import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
{
  questionText: {
    type: String,
    required: true
  },

  options: [{
    type: String
  }],

  correctAnswer: {
    type: String,
    required: true
  },

  explanation: String,

  topic: {
    type: String,
    required: true
  },

  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true
  },

  companyTags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company"
  }],

  questionType: {
    type: String,
    enum: ["mcq", "numeric", "subjective"],
    default: "mcq"
  },

  metadata: {
    avgTimeTaken: Number,
    successRate: Number
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

},
{ timestamps: true }
);

export default mongoose.model("Question", questionSchema);
