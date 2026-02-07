import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },

        examPattern: {
            aptitude: Boolean,
            verbal: Boolean,
            technical: Boolean,
            coding: Boolean
        },

        difficultyLevel: {
            type: String,
            enum: ["easy", "medium", "hard"]
        },

        tags: [String],
        /* 🔐 MODERATION FIELDS */
        isUserAdded: {
            type: Boolean,
            default: false
        },

        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "approved"
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true }
);

export default mongoose.model("Company", companySchema);
