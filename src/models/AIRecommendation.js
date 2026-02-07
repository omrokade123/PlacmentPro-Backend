import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["practice", "mock", "experience"]
    },
    referenceId: mongoose.Schema.Types.ObjectId,
    reason: String
});

const aiRecommendationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        recommendations: [recommendationSchema],

        generatedAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

export default mongoose.model(
    "AIRecommendation",
    aiRecommendationSchema
);
