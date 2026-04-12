import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");
import genrateInterviewReport from "../services/ai.services.js";
import interviewReportModel from "../models/MockInterview/interviewReport.model.js";

/**
 * @description controller to genrate interview report based on user self description, resume and job description.
 */
async function genrateInterviewReportController(req,res){
    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText();
    const { selfDescription, jobDescription } = req.body;
    
    const interviewReportByAi = await genrateInterviewReport({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    });
    const interviewReport = await interviewReportModel.create({
        userId: req.user.userId,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    });
    res.status(201).json({
        message: "Interview report genrated successfully",
        interviewReport
    })
}

/**
 * @description Controller to get interview report by interviewId.
 */
async function getInterviewReportById(req, res) {
    const { interviewId } = req.params;
    const interviewReport = await interviewReportModel.findOne({ _id: interviewId, userId: req.user.userId });
    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found",
            interviewReport: null
        })
    }
    res.status(200).json({
        message: "Interview report fetched successfully",
        interviewReport
    })
}

/**
 * @description Controller to get all interview reports of logged in user.
 */
async function getAllInterviewReports(req, res) {
    const interviewReports = await interviewReportModel.find({ userId: req.user.userId }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -_v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan");
    res.status(200).json({
        message: "Interview reports fetched successfully",
        interviewReports
    })
}

export default {genrateInterviewReportController,getInterviewReportById,getAllInterviewReports};