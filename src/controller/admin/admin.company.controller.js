import Company from "../../models/Company.js";
import mongoose from "mongoose";

/* ===============================
   GET PENDING COMPANIES
================================ */
export const getPendingCompanies = async (req, res) => {
  const companies = await Company.find({
    status: "pending",
    isUserAdded: true
  }).populate("createdBy", "name email");

  res.json(companies);
};

/* ===============================
   APPROVE COMPANY
================================ */
export const approveCompany = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid company ID" });
  }

  const company = await Company.findByIdAndUpdate(
    id,
    {
      status: "approved",
      isUserAdded: false
    },
    { new: true }
  );

  if (!company) {
    return res.status(404).json({ message: "Company not found" });
  }

  res.json({
    message: "Company approved successfully",
    company
  });
};

/* ===============================
   REJECT COMPANY
================================ */
export const rejectCompany = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid company ID" });
  }

  const company = await Company.findByIdAndUpdate(
    id,
    { status: "rejected" },
    { new: true }
  );

  if (!company) {
    return res.status(404).json({ message: "Company not found" });
  }

  res.json({
    message: "Company rejected",
    company
  });
};
