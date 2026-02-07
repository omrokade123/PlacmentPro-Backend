import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        sourceType: {
            type: String,
            enum: ["test", "mock", "experience"]
        },

        sourceId: mongoose.Schema.Types.ObjectId,

        message: String,

        severity: {
            type: String,
            enum: ["low", "medium", "high"]
        }
    },
    { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
