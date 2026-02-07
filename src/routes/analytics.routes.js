import express from "express";
import auth from "../middleware/auth.middleware.js";
import { getUserAnalytics } from "../controller/analytics.controller.js";

const router = express.Router();

router.get("/", auth, getUserAnalytics);

export default router;
