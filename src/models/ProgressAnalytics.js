import mongoose from "mongoose";

const progressAnalyticsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            unique: true
        },

        aptitudeProgress: [
            {
                topic: String,
                accuracy: Number,
                trend: {
                    type: String,
                    enum: ["up", "down", "stable"]
                }
            }
        ],

        mockInterviewTrend: Number,
        readinessScore: Number
    },
    { timestamps: true }
);

export default mongoose.model(
    "ProgressAnalytics",
    progressAnalyticsSchema
);
