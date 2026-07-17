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

        // Profile Information
        firstName: { type: String, default: "" },
        lastName: { type: String, default: "" },
        phone: { type: String, default: "" },
        location: { type: String, default: "" },
        bio: { type: String, default: "" },
        title: { type: String, default: "Software Engineer" },
        skills: { type: [String], default: [] },
        avatar: { type: String, default: null },

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
            focusAreas: [String],
            emailNotifications: { type: Boolean, default: true },
            weeklyDigest: { type: Boolean, default: true },
            marketingEmails: { type: Boolean, default: false }
        },

        stats: {
            totalTestsAttempted: { type: Number, default: 0 },
            avgScore: { type: Number, default: 0 },
            mockInterviewsTaken: { type: Number, default: 0 },
            streakDays: { type: Number, default: 0 },
            bestScore: { type: Number, default: 0 },
            lastTestDate: { type: Date, default: null }
        },

        achievements: {
            quickLearner: { type: Boolean, default: false },
            streakMaster: { type: Boolean, default: false },
            perfectScore: { type: Boolean, default: false }
        },

        subscription: {

            plan: {
                type: String,
                enum: ["free", "pro"],
                default: "free"
            },

            billingCycle: {
                type: String,
                enum: ["monthly", "yearly", null],
                default: null
            },

            status: {
                type: String,
                enum: [
                    "active",
                    "expired",
                    "cancelled"
                ],
                default: "active"
            },

            startDate: Date,

            expiryDate: Date,

            paymentProvider: {
                type: String,
                default: null
            },

            customerId: String,

            subscriptionId: String

        },

        usage: {

            resumeAnalysis: {

                used: {
                    type: Number,
                    default: 0
                },

                limit: {
                    type: Number,
                    default: 1
                }

            },

            mockInterview: {

                used: {
                    type: Number,
                    default: 0
                },

                limit: {
                    type: Number,
                    default: 1
                }

            },

            interviewFeedback: {

                used: {
                    type: Number,
                    default: 0
                },

                limit: {
                    type: Number,
                    default: 1
                }

            }

        },
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
