import Company from "../../models/Company.js";

import InterviewExperience from "../../models/InterviewExperience.js";
// import mongoose from "mongoose";

// /* ===============================
//    GET PENDING COMPANIES
// ================================ */
// export const getPendingCompanies = async (req, res) => {
//   const companies = await Company.find({
//     status: "pending",
//     isUserAdded: true
//   }).populate("createdBy", "name email");

//   res.json(companies);
// };

// /* ===============================
//    APPROVE COMPANY
// ================================ */
// export const approveCompany = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ message: "Invalid company ID" });
//   }

//   const company = await Company.findByIdAndUpdate(
//     id,
//     {
//       status: "approved",
//       isUserAdded: false
//     },
//     { new: true }
//   );

//   if (!company) {
//     return res.status(404).json({ message: "Company not found" });
//   }

//   res.json({
//     message: "Company approved successfully",
//     company
//   });
// };

// /* ===============================
//    REJECT COMPANY
// ================================ */
// export const rejectCompany = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ message: "Invalid company ID" });
//   }

//   const company = await Company.findByIdAndUpdate(
//     id,
//     { status: "rejected" },
//     { new: true }
//   );

//   if (!company) {
//     return res.status(404).json({ message: "Company not found" });
//   }

//   res.json({
//     message: "Company rejected",
//     company
//   });
// };


export const getAdminCompanies = async (req, res) => {

 try {

   const page = Number(req.query.page) || 1;
   const limit = Number(req.query.limit) || 10;

   const { status, search } = req.query;

   const filter = {};

   if(status){
     filter.status = status;
   }

   if(search){
     filter.name = {
       $regex: search,
       $options: "i"
     };
   }

   //--------------------------------

   const companies =
     await Company
       .find(filter)
       .sort({ createdAt:-1 })
       .skip((page-1)*limit)
       .limit(limit)
       .lean();

   const total =
     await Company.countDocuments(filter);

   //--------------------------------

   res.json({
     data: companies,
     total,
     page,
     pages: Math.ceil(total/limit)
   });

 } catch(err){

   res.status(500).json({
     message:"Failed to fetch companies"
   });
 }
};

export const getCompanyCount = async (req,res)=>{

 try{

   const { status } = req.query;

   const filter = status
     ? { status }
     : {};

   const count =
     await Company.countDocuments(filter);

   res.json({count});

 }catch{
   res.status(500).json({
     message:"Failed to fetch count"
   });
 }
};

export const createCompany = async (req,res)=>{

 try{

   const {
     name,
     difficultyLevel,
     tags,
     examPattern
   } = req.body;

   if(!name){
     return res.status(400).json({
       message:"Company name required"
     });
   }

   //--------------------------------

   const exists =
     await Company.findOne({
       name: new RegExp(`^${name}$`,"i")
     });

   if(exists){
     return res.status(400).json({
       message:"Company already exists"
     });
   }

   //--------------------------------

   const company =
     await Company.create({
       name,
       difficultyLevel,
       tags,
       examPattern,
       status:"approved", // admin created
       isUserAdded:false
     });

   res.status(201).json(company);

 }catch{
   res.status(500).json({
     message:"Failed to create company"
   });
 }
};

export const updateCompany = async (req,res)=>{

 try{

   const company =
     await Company.findByIdAndUpdate(
       req.params.id,
       req.body,
       { new:true }
     );

   res.json(company);

 }catch{
   res.status(500).json({
     message:"Update failed"
   });
 }
};

export const approveCompany = async (req,res)=>{

 try{

   const company =
     await Company.findById(req.params.id);

   if(!company){
     return res.status(404).json({
       message:"Company not found"
     });
   }

   company.status = "approved";

   await company.save();

   res.json({
     message:"Company approved"
   });

 }catch{
   res.status(500).json({
     message:"Approval failed"
   });
 }
};


export const rejectCompany = async (req,res)=>{

 try{

   const company =
     await Company.findById(req.params.id);

   company.status = "rejected";

   await company.save();

   res.json({
     message:"Company rejected"
   });

 }catch{
   res.status(500).json({
     message:"Reject failed"
   });
 }
};



export const deleteCompany = async (req,res)=>{

 try{

   const linked =
     await InterviewExperience.findOne({
       companyId:req.params.id
     });

   if(linked){
     return res.status(400).json({
       message:
       "Cannot delete company with experiences"
     });
   }

   await Company.findByIdAndDelete(
     req.params.id
   );

   res.json({
     message:"Company deleted"
   });

 }catch{
   res.status(500).json({
     message:"Delete failed"
   });
 }
};
