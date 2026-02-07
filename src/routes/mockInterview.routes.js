import express from "express";
import {
  startMockInterview,
  submitAnswer,
  getMockHistory
} from "../controllers/mockInterview.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/start", auth, startMockInterview);
router.post("/answer/:id", auth, submitAnswer);
router.get("/history", auth, getMockHistory);

export default router;
