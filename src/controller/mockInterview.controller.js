import MockInterview from "../models/MockInterview.js";
import { evaluateAnswer } from "../services/ai.service.js";

export const startMockInterview = async (req, res) => {
    const { companyId, role, interviewType } = req.body;

    const mock = await MockInterview.create({
        userId: req.user.userId,
        companyId,
        role,
        interviewType,
        questions: []
    });

    res.json(mock);
};

export const submitAnswer = async (req, res) => {
    const { answerText } = req.body;

    const evaluation = await evaluateAnswer(answerText);

    const interview = await MockInterview.findById(req.params.id);

    interview.questions.push({
        questionText: evaluation.question,
        userAnswerText: answerText,
        evaluation: evaluation.scores,
        aiFeedback: evaluation.feedback
    });

    await interview.save();

    res.json(interview);
};

export const getMockHistory = async (req, res) => {
    const history = await MockInterview.find({
        userId: req.user.userId
    });

    res.json(history);
};
