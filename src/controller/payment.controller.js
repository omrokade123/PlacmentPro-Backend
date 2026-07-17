import crypto from "crypto";
import Payment from "../models/Payment.js";
import User from "../models/User.js";
import { createOrder } from "../services/payment.service.js";
import { PRICING } from "../utils/pricing.config.js";


// Monthly = ₹199
// const MONTHLY_PRICE = 199;

// // Yearly = ₹1499
// const YEARLY_PRICE = 1499;

export const createPaymentOrder = async (req, res) => {

    const user = await User.findById(req.user.userId);

    if (
        user.subscription.plan === "pro" &&
        user.subscription.status === "active"
    ) {
        return res.status(400).json({
            message: "You already have an active Pro subscription."
        });
    }

    try {

        const { plan } = req.body;

        let amount = 0;

        if (plan === "monthly") amount = PRICING[plan];

        if (plan === "yearly") amount = PRICING[plan];

        if (!amount) {

            return res.status(400).json({
                message: "Invalid Plan"
            });

        }

        const order = await createOrder(amount);

        await Payment.create({

            userId: req.user.userId,

            orderId: order.id,

            amount,

            plan,

            status: "created"

        });

        res.json({

            key: process.env.RAZORPAY_KEY_ID,

            amount: order.amount,

            currency: order.currency,

            orderId: order.id

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to create payment."
        });

    }

};

export const verifyPayment = async (req, res) => {

    try {

        const {

            razorpay_order_id,

            razorpay_payment_id,

            razorpay_signature

        } = req.body;

        const generatedSignature = crypto
            .createHmac(
                "sha256",
                process.env.RAZORPAY_KEY_SECRET
            )
            .update(
                razorpay_order_id + "|" + razorpay_payment_id
            )
            .digest("hex");

        if (generatedSignature !== razorpay_signature) {

            return res.status(400).json({

                message: "Payment Verification Failed"

            });

        }

        const payment = await Payment.findOne({

            orderId: razorpay_order_id

        });

        if (!payment) {

            return res.status(404).json({

                message: "Payment not found"

            });

        }

        payment.status = "paid";

        payment.paymentId = razorpay_payment_id;

        payment.signature = razorpay_signature;

        await payment.save();

        const user = await User.findById(req.user.userId);

        user.subscription.plan = "pro";

        user.subscription.status = "active";

        user.subscription.paymentProvider = "razorpay";

        user.subscription.billingCycle = payment.plan;

        user.subscription.startDate = new Date();

        const expiry = new Date();

        if (payment.plan === "monthly") {

            expiry.setMonth(expiry.getMonth() + 1);

        } else {

            expiry.setFullYear(expiry.getFullYear() + 1);

        }

        user.subscription.expiryDate = expiry;

        await user.save();

        res.json({

            message: "Payment Successful"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Payment Verification Failed"

        });

    }

};