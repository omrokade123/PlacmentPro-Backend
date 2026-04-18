import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/file.middleware.js";
import interviewController from "../controller/interview.controller.js";
const interviewRouter = express.Router();
import { audioupload } from "../middleware/upload.middleware.js";


/**
 * @route POST /api/interview/
 * @description Generate an interview report for a candidate based on their resume, self description and job description
 * @access private
 */
interviewRouter.post("/",authMiddleware,upload.single("resume"),interviewController.genrateInterviewReportController)

/**
 * @route GET /api/interview/report/:interviewId
 * @description get interview report by interviewId
 * @access private
 */
interviewRouter.get("/report/:interviewId",authMiddleware,interviewController.getInterviewReportById);

/**
 * @route GET /api/interview/
 * @description get all interview reports of logges in user
 * @access private
 */
interviewRouter.get("/",authMiddleware,interviewController.getAllInterviewReports);

/**
 * @route POST /api/interview/schedule/:interviewId
 * @description schedule an interview for a candidate based on interviewId
 * @access private
 */
interviewRouter.post("/schedule/:reportId",authMiddleware,interviewController.scheduleInterview);

/**
 * @route POST /api/interview/start/:interviewId
 * @description start a scheduled interview for a candidate based on interviewId
 * @access private
 */
interviewRouter.post("/start/:interviewId",authMiddleware,interviewController.startInterview);

/**
 * @route POST /api/interview/answer/:interviewId
 * @description submit answer for a question in an ongoing interview based on interviewId
 * @access private
 */
interviewRouter.post("/answer/:interviewId",authMiddleware,interviewController.submitAnswer);


/**
 * @route GET /api/interview/session/:reportId
 * @description get session seubmitted of interview
 * @access private 
 */
interviewRouter.get("/session/:reportId",authMiddleware,interviewController.getInterviewSession);

/**
 * @route post /api/interview/speech-to-text
 * @description to transcript the audio
 * @access private
 */
interviewRouter.post("/speech-to-text",authMiddleware,audioupload.single("audio"),interviewController.speechToText);

/**
 * @route GET /api/interview/feedback/:interviewId
 * @description get interview feedback for a completed interview based on interviewId
 * @access private
 */
//interviewRouter.get("/feedback/:interviewId",authMiddleware,interviewController.getInterviewFeedback);

export default interviewRouter;
