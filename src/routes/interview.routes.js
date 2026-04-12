import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/file.middleware.js";
import interviewController from "../controller/interview.controller.js";
const interviewRouter = express.Router();

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


export default interviewRouter;
