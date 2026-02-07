import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        passwordHash: { type: String, required: true },

        role: {
            type: String,
            enum: ["student", "admin"],
            default: "student"
        },

        profile: {
            college: String,
            graduationYear: Number,
            branch: String,
            targetCompanies: [
                { type: mongoose.Schema.Types.ObjectId, ref: "Company" }
            ]
        },

        preferences: {
            dailyStudyTime: Number, // minutes
            difficultyLevel: {
                type: String,
                enum: ["easy", "medium", "hard"]
            },
            focusAreas: [String]
        },

        stats: {
            totalTestsAttempted: { type: Number, default: 0 },
            avgScore: { type: Number, default: 0 },
            mockInterviewsTaken: { type: Number, default: 0 },
            streakDays: { type: Number, default: 0 }
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
