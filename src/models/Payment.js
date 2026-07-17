import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    orderId: {
        type: String,
        required: true
    },

    paymentId: String,

    signature: String,

    amount: {
        type: Number,
        required: true
    },

    currency: {
        type: String,
        default: "INR"
    },

    plan: {
        type: String,
        enum: ["monthly", "yearly"],
        required: true
    },

    status: {
        type: String,
        enum: [
            "created",
            "paid",
            "failed",
            "cancelled"
        ],
        default: "created"
    }

}, {
    timestamps: true
});

export default mongoose.model(
    "Payment",
    paymentSchema
);