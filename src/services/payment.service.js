import razorpay from "../config/razorpay.config.js";

export const createOrder = async (amount) => {

    return await razorpay.orders.create({
        amount: amount * 100, // paisa
        currency: "INR",
        receipt: `receipt_${Date.now()}`
    });

};