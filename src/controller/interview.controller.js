import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");
import interviewAi from "../services/ai.services.js";
import interviewReportModel from "../models/MockInterview/interviewReport.model.js";
import InterviewSession from "../models/InterviewSession.js";

/**
 * @description controller to genrate interview report based on user self description, resume and job description.
 */
async function genrateInterviewReportController(req, res) {
    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText();
    const { selfDescription, jobDescription } = req.body;

    const interviewReportByAi = await interviewAi.genrateInterviewReport({
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


/**
 * @description Controller to schedule an interview for a candidate based on interviewId.
 */
async function scheduleInterview(req, res) {
    try {
        const { reportId } = req.params;
        const { scheduledAt } = req.body;

        const report = await interviewReportModel.findOne({ _id: reportId, userId: req.user.userId });
        if (!report) {
            return res.status(404).json({
                message: "Report not found"
            });
        }

        const behavioralQuestions = report.behavioralQuestions.map(q => ({
            question: q.question,
            type: "behavioral"
        }));

        const technicalQuestions = report.technicalQuestions.map(q => ({
            question: q.question,
            type: "technical"
        }));
        const questions = [
            ...behavioralQuestions,
            ...technicalQuestions
        ];

        const interview = await InterviewSession.create({
            reportId: report._id,
            userId: report.userId,
            title: report.title,
            questions,
            scheduledAt
        });

        res.status(200).json({
            message: "Interview scheduled successfully",
            interview
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server error while scheduling interview"
        })
    }
}

/**
 * @description Controller to start a scheduled interview for a candidate based on interviewId.
 */
async function startInterview(req, res) {
    try {
        const { interviewId } = req.params;

        const interview = await InterviewSession.findOne({ _id: interviewId, userId: req.user.userId });
        if (!interview) {
            return res.status(404).json({
                message: "Interview not found"
            });
        }
        if (interview.status === "completed") {
            return res.status(400).json({
                message: "Interview already completed"
            })
        }

        interview.status = "in-progress";
        interview.currentQuestionIndex = 0;
        await interview.save();
        const firstQuestion = interview.questions[0];

        res.status(200).json({
            message: "Interview started",
            interviewId: interview._id,
            questionNumber: 1,
            totalQuestions: interview.questions.length,
            question: firstQuestion
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server error while starting interview"
        })
    }
}

/**
 * @description Controller to submit answer for a question in an ongoing interview based on interviewId.
 */
async function submitAnswer(req, res) {
    try {

        const { interviewId } = req.params;
        const { answer } = req.body;

        const interview = await InterviewSession.findOne({
            _id: interviewId,
            userId: req.user.userId
        });

        if (!interview) {
            return res.status(404).json({
                message: "Interview not found"
            });
        }

        if (interview.status !== "in-progress") {
            return res.status(400).json({
                message: "Interview is not active"
            });
        }

        const currentIndex = interview.currentQuestionIndex;
        const currentQuestion = interview.questions[currentIndex];

        if (!currentQuestion) {
            return res.status(400).json({
                message: "Invalid question index"
            });
        }

        // ensure answers array exists
        if (!interview.answers) {
            interview.answers = [];
        }

        interview.answers.push({
            question: currentQuestion.question,
            answer: answer,
            type: currentQuestion.type
        });

        interview.currentQuestionIndex += 1;

        const nextQuestion = interview.questions[interview.currentQuestionIndex];

        // last question reached
        if (!nextQuestion) {

            interview.status = "completed";

            await interview.save();

            let feedback = null;

            try {
                feedback = await interviewAi.getInterviewFeedback(interview.answers);
            } catch (aiError) {
                console.error("AI feedback error:", aiError);
            }

            interview.feedback = feedback;

            await interview.save();

            return res.status(200).json({
                message: "Interview completed",
                interviewCompleted: true,
                feedback
            });
        }

        await interview.save();

        return res.status(200).json({
            interviewCompleted: false,
            questionNumber: interview.currentQuestionIndex + 1,
            totalQuestions: interview.questions.length,
            question: nextQuestion
        });

    } catch (error) {

        console.error("Submit answer error:", error);

        res.status(500).json({
            message: "Server error while submitting answer"
        });

    }
}


/**
 * @description get Interview Session from interviewId
 */
async function getInterviewSession(req, res) {
  try {

    const { reportId } = req.params;
    

    const interview = await InterviewSession.findOne({
      reportId,
      userId: req.user.userId
    });

    
    res.json({ interview });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}


/**
 * @description Controller to get interview feedback for a completed interview based on interviewId.
 */
// async function getInterviewFeedback(req, res) {
//     try {
//         const { interviewId } = req.params;

//         const interview = await InterviewSession.findById(interviewId);

//         if (!interview) {
//             return res.status(404).json({
//                 message: "Interview not found"
//             });
//         }

//         if (interview.status !== "completed") {
//             return res.status(400).json({
//                 message: "Interview not completed yet"
//             });
//         }

//         if (interview.feedback) {
//             return res.json({
//                 feedback: interview.feedback
//             });
//         }

//         // generate AI feedback
//         const feedback = await generateInterviewFeedbackAI(interview.answers);

//         interview.feedback = feedback;

//         await interview.save();

//         res.status(200).json({
//             message: "Interview feedback generated successfully",
//             feedback
//         })
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             message: "Server error while fetching interview feedback"
//         })
//     }
// }


export default { genrateInterviewReportController, getInterviewReportById, getAllInterviewReports, scheduleInterview, startInterview, submitAnswer, getInterviewSession };