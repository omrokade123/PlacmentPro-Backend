import express from "express";
import auth from "../middleware/auth.middleware.js";

// import {
//   generatePracticeTest,
//   getPracticeTest
// } from "../Controller/practice.controller.js";
import { generatePracticeTest, getAttemptHistory, getPracticeTest, getTestResult, submitPracticeTest } from "../Controller/practice.controller.js";
const router = express.Router();

/* Generate test */
router.post("/generate", auth, generatePracticeTest);

/* Get test */
router.get("/test/:id", auth, getPracticeTest);

//Attempt test
router.post("/submit/:testId", auth, submitPracticeTest);

//Result route
router.get(
    "/result/:testId",
    auth,
    getTestResult
);

router.get(
  "/attempts",
  auth,
  getAttemptHistory
);



export default router;
