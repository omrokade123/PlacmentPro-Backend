import mongoose from "mongoose";

const roundSchema = new mongoose.Schema({
  roundType: {
    type: String,
    enum: ["Aptitude", "Technical", "HR"],
    required: true,
  },
  questionsAsked: [String],
  difficultyRating: {
    type: Number,
    min: 1,
    max: 5
  }
});

const interviewExperienceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    rounds: [roundSchema],

    finalResult: {
      type: String,
      enum: ["selected", "rejected", "pending"],
      required: true
    },

    keyLearnings: [String],
    adviceForJuniors: String,

    tags: [String],
    upvotes: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    },

    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    adminRemarks: {
      type: String
    }
  },
  { timestamps: true }
);
 
interviewExperienceSchema.index({
  companyId: 1,
  role: 1
});

export default mongoose.model(
  "InterviewExperience",
  interviewExperienceSchema
);
