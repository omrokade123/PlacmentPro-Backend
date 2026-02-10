import User from "../models/User.js";
import InterviewExperience from "../models/InterviewExperience.js";
import Company from "../models/Company.js";
import PracticeAttempt from "../models/PracticeAttempt.js";

export const getAdminStats = async (req, res) => {

 try {

   const [
     totalUsers,
     pendingExperiences,
     pendingCompanies,
     totalAttempts
   ] = await Promise.all([

     User.countDocuments(),

     InterviewExperience.countDocuments({
       status: "pending"
     }),

     Company.countDocuments({
       status: "pending"
     }),

     PracticeAttempt.countDocuments()

   ]);

   res.json({
     totalUsers,
     pendingExperiences,
     pendingCompanies,
     totalAttempts
   });

 } catch (err) {

   res.status(500).json({
     message: "Failed to fetch admin stats"
   });

 }
};
