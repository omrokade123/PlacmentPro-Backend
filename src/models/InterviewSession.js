import mongoose from "mongoose";
import { type } from "os";

const interviewSessionSchema = new mongoose.Schema({
    reportId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InterviewReport",
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: String,
    questions: [
        {
            question: String,
            type: {
                type: String,
                enum: ["behavioral", "technical"]
            },// technical or behavioral
            answer: String
        }
    ],
    status: {
        type: String,
        enum: ["scheduled", "in-progress", "completed"],
        default: "scheduled"
    },
    scheduledAt: Date,
    currentQuestionIndex: {
        type: Number,
        default: 0
    },
    answers: {
        type: [
            {
                question: String,
                answer: String,
                type: {
                    type: String,
                    enum: ["behavioral", "technical"]
                }
            }
        ],
        default: []
    },
    feedback: {

        summary: {
            overallScore: Number,
            technicalScore: Number,
            communicationScore: Number,

            strengths: [String],
            weaknesses: [String],
            suggestions: [String]
        },

        questions: [
            {
                question: String,

                userAnswer: String,

                analysis: {
                    score: Number,

                    modelAnswer: String,

                    mistakes: [String],

                    missingConcepts: [String],

                    interviewerTips: [String],

                    keywordsMissed: [String],

                    improvementSuggestions: [String]
                }
            }
        ]
    }
}, {
    timestamps: true
});

const InterviewSession = mongoose.model("InterviewSession", interviewSessionSchema);
export default InterviewSession;