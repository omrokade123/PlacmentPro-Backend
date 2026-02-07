import InterviewExperience from "../models/InterviewExperience.js";
import mongoose from "mongoose";
import Company from "../models/Company.js";



export const createExperience = async (req, res) => {
  try {
    const {
      companyId,
      companyName,
      role,
      rounds,
      finalResult,
      keyLearnings,
      adviceForJuniors,
      tags
    } = req.body;

    if (!role || !rounds || !finalResult) {
      return res.status(400).json({
        message: "Required fields missing"
      });
    }

    let finalCompanyId;

    /* CASE 1: companyId provided (dropdown) */
    if (companyId) {
      if (!mongoose.Types.ObjectId.isValid(companyId)) {
        return res.status(400).json({
          message: "Invalid companyId"
        });
      }

      finalCompanyId = companyId;
    }

    /* CASE 2: companyName provided (Other) */
    else if (companyName) {
      const trimmedName = companyName.trim();

      if (!trimmedName) {
        return res.status(400).json({
          message: "Company name cannot be empty"
        });
      }

      // Check if company already exists
      let company = await Company.findOne({
        name: new RegExp(`^${trimmedName}$`, "i")
      });

      // Create if not exists
      if (!company) {
        company = await Company.create({
          name: trimmedName,
          tags: ["user-added"],
          isUserAdded: true,
          status: "pending",
          createdBy: req.user.userId
        });
      }

      finalCompanyId = company._id;
    }

    /* Neither provided */
    else {
      return res.status(400).json({
        message: "companyId or companyName is required"
      });
    }

    const experience = await InterviewExperience.create({
      userId: req.user.userId,
      companyId: finalCompanyId,
      role,
      rounds,
      finalResult,
      keyLearnings,
      adviceForJuniors,
      tags,
      status: "pending"
    });

    res.status(201).json({
      message: "Interview experience shared successfully",
      experience
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create experience",
      error: error.message
    });
  }
};


// get all experinces
export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await InterviewExperience.find({status: "approved"})
      .populate("companyId", "name")
      .populate("userId", "name")
      .sort({ createdAt: -1 });

    res.json(experiences);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch experiences"
    });
  }
};

// Get Experience By ID
export const getExperienceById = async (req, res) => {
  try {
    const experience = await InterviewExperience.findById(req.params.id)
      .populate("companyId", "name")
      .populate("userId", "name");

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found"
      });
    }

    res.json(experience);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching experience"
    });
  }
};

//upvote experince
export const upvoteExperience = async (req, res) => {
  try {
    const experience = await InterviewExperience.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found"
      });
    }

    experience.upvotes += 1;
    await experience.save();

    res.json({
      message: "Upvoted successfully",
      upvotes: experience.upvotes
    });
  } catch (error) {
    res.status(500).json({
      message: "Upvote failed"
    });
  }
};
