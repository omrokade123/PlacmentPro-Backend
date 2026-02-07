import Question from "../../models/practice model/Question.js";

export const createQuestion = async (req, res) => {
  try {

    const question = await Question.create({
      ...req.body,
      createdBy: req.user.userId
    });

    res.status(201).json({
      message: "Question created",
      question
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to create question",
      error: error.message
    });
  }
};

export const getAllQuestions = async (req, res) => {

  const questions = await Question.find()
    .populate("companyTags", "name")
    .sort({ createdAt: -1 });

  res.json(questions);
};

export const bulkCreateQuestions = async (req, res) => {
  try {

    const questions = req.body;

    if (!Array.isArray(questions)) {
      return res.status(400).json({
        message: "Expected an array of questions"
      });
    }

    const createdQuestions = await Question.insertMany(questions);

    res.status(201).json({
      message: `${createdQuestions.length} questions inserted successfully`
    });

  } catch (error) {

    res.status(500).json({
      message: "Bulk insert failed",
      error: error.message
    });
  }
};
