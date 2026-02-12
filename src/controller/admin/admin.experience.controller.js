import InterviewExperience from "../../models/InterviewExperience.js";
import mongoose from "mongoose";
import Company from "../../models/Company.js";



export const getExperienceCount = async (req, res) => {

 try {

   const { status } = req.query;

   const filter = {};

   if (status) {
     filter.status = status;
   }

   const count =
     await InterviewExperience.countDocuments(filter);

   res.json({ count });

 } catch (error) {

   res.status(500).json({
     message: "Failed to fetch count"
   });
 }
};



export const getAdminExperiences = async (req, res) => {

 try {

   const page = Number(req.query.page) || 1;
   const limit = Number(req.query.limit) || 10;

   const status = req.query.status;

   const filter = status ? { status } : {};

   //------------------------------------------------

   const experiences =
     await InterviewExperience
       .find(filter)
       .populate("companyId","name")
       .populate("userId","name email")
       .sort({ createdAt:-1 })
       .skip((page-1)*limit)
       .limit(limit)
       .lean();

   //------------------------------------------------

   const total =
     await InterviewExperience
       .countDocuments(filter);

   res.json({
     data: experiences,
     total,
     page,
     pages: Math.ceil(total/limit)
   });

 } catch (err) {

   res.status(500).json({
     message:"Failed to fetch experiences"
   });

 }
};





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
  // const { remark } = req.body;

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
      adminRemarks: "Rejected by admin"
    },
    { new: true }
  );

  res.json({
    message: "Experience rejected",
    experience
  });
};

export const deleteExperience = async (req, res) => {

  await InterviewExperience.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Experience deleted"
  });
};

// UPDATE EXPERIENCE
export const updateExperience = async (req, res) => {

 try {

   const experience =
     await InterviewExperience.findById(
       req.params.id
     );

   if (!experience) {
     return res.status(404).json({
       message: "Experience not found",
     });
   }

   //--------------------------------

   // Prevent changing ownership
   delete req.body.userId;

   //--------------------------------

   const updated =
     await InterviewExperience.findByIdAndUpdate(
       req.params.id,
       req.body,
       { new: true }
     )
       .populate("companyId", "name")
       .populate("userId", "name");

   res.json(updated);

 } catch (err) {

   res.status(500).json({
     message: "Failed to update experience",
   });

 }
};

// ADMIN CREATE EXPERIENCE
export const createAdminExperience =
 async (req, res) => {

 try {

   const {
     companyId,
     role,
     rounds,
     finalResult,
     keyLearnings,
     adviceForJuniors,
     tags,
   } = req.body;

   //--------------------------------

   if (!companyId || !role) {
     return res.status(400).json({
       message: "companyId and role required",
     });
   }

   //--------------------------------

   if (!mongoose.Types.ObjectId.isValid(companyId)) {
     return res.status(400).json({
       message: "Invalid companyId",
     });
   }

   //--------------------------------

   const company =
     await Company.findById(companyId);

   if (!company) {
     return res.status(404).json({
       message: "Company not found",
     });
   }

   //--------------------------------

   const experience =
     await InterviewExperience.create({

       userId: req.user.userId, // admin becomes author

       companyId,
       role,
       rounds,
       finalResult,
       keyLearnings,
       adviceForJuniors,
       tags,

       status: "approved", // ⭐ KEY DIFFERENCE
       reviewedBy: req.user.userId,

     });

   res.status(201).json(experience);

 } catch(error) {
   console.log(error);
   res.status(500).json({
     message: "Failed to create experience",
   });

 }
};


