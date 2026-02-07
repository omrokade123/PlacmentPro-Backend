import InterviewExperience from "../../models/InterviewExperience.js";
import mongoose from "mongoose";

export const getPendingExperiences = async (req, res) => {
  const experiences = await InterviewExperience.find({
    status: "pending"
  })
  .populate("companyId", "name")
  .populate("userId", "name email")
  .sort({ createdAt: -1 });

  res.json(experiences);
};

export const approveExperience = async (req, res) => {

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid experience ID"
    });
  }

  const experience = await InterviewExperience.findByIdAndUpdate(
    id,
    {
      status: "approved",
      reviewedBy: req.user.userId,
      adminRemarks: "Approved by admin"
    },
    { new: true }
  );

  if (!experience) {
    return res.status(404).json({
      message: "Experience not found"
    });
  }

  res.json({
    message: "Experience approved",
    experience
  });
};


export const rejectExperience = async (req, res) => {

  const { id } = req.params;
  const { remark } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid experience ID"
    });
  }

  const experience = await InterviewExperience.findByIdAndUpdate(
    id,
    {
      status: "rejected",
      reviewedBy: req.user.userId,
      adminRemarks: remark || "Rejected by admin"
    },
    { new: true }
  );

  res.json({
    message: "Experience rejected",
    experience
  });
};
