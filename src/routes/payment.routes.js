import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import {

    createPaymentOrder,

    verifyPayment

} from "../controller/payment.controller.js";

const router = express.Router();

router.post(

    "/create-order",

    authMiddleware,

    createPaymentOrder

);

router.post(

    "/verify",

    authMiddleware,

    verifyPayment

);

export default router;