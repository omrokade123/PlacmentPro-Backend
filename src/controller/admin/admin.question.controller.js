import Question from "../../models/practice model/Question.js";

export const createQuestion = async (req, res) => {

  try {

    const question =
      await Question.create({
        ...req.body,
        createdBy: req.user.userId
      });

    res.status(201).json(question);

  } catch (err) {

    res.status(500).json({
      message: "Failed to create question"
    });
  }
};

export const bulkCreateQuestions = async (req, res) => {

  try {

    const questions = req.body;

    if (!Array.isArray(questions)) {
      return res.status(400).json({
        message: "Expected JSON array"
      });
    }

    const enriched = questions.map(q => ({
      ...q,
      createdBy: req.user.userId
    }));

    await Question.insertMany(enriched);

    res.json({
      message: `${questions.length} questions uploaded`
    });

  } catch {

    res.status(500).json({
      message: "Bulk upload failed"
    });
  }
};

export const getAdminQuestions = async (req, res) => {
  try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    //--------------------------------

    const questions = await Question
      .find()
      .populate("companyTags", "name")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    //--------------------------------

    const total =
      await Question.countDocuments();

    res.json({
      questions,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    });

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch questions"
    });

  }
};


export const getQuestionById = async (req, res) => {

  try {

    const question =
      await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({
        message: "Question not found"
      });
    }

    res.json(question);

  } catch {

    res.status(500).json({
      message: "Failed to fetch question"
    });
  }
};

export const updateQuestion = async (req, res) => {

  try {

    const updated =
      await Question.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updated);

  } catch {

    res.status(500).json({
      message: "Update failed"
    });
  }
};

export const deleteQuestion = async (req, res) => {

  try {

    await Question.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Question deleted"
    });

  } catch {

    res.status(500).json({
      message: "Delete failed"
    });
  }
};
