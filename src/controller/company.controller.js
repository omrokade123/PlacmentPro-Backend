import Company from "../models/Company.js";
import mongoose from "mongoose";

/* ===============================
   CREATE COMPANY
================================ */
export const createCompany = async (req, res) => {
  try {
    const { name, examPattern, difficultyLevel, tags } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Company name is required"
      });
    }

    const existingCompany = await Company.findOne({ name });
    if (existingCompany) {
      return res.status(400).json({
        message: "Company already exists"
      });
    }

    const company = await Company.create({
      name,
      examPattern,
      difficultyLevel,
      tags
    });

    res.status(201).json({
      message: "Company created successfully",
      company
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create company",
      error: error.message
    });
  }
};

/* ===============================
   GET ALL COMPANIES
================================ */
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find({status: "approved"}).sort({ name: 1 });

    res.json(companies);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch companies"
    });
  }
};

/* ===============================
   GET COMPANY BY ID
================================ */
export const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid company ID"
      });
    }

    const company = await Company.findById(id);

    if (!company) {
      return res.status(404).json({
        message: "Company not found"
      });
    }

    res.json(company);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch company"
    });
  }
};

/* ===============================
   UPDATE COMPANY
================================ */
export const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid company ID"
      });
    }

    const updatedCompany = await Company.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedCompany) {
      return res.status(404).json({
        message: "Company not found"
      });
    }

    res.json({
      message: "Company updated successfully",
      company: updatedCompany
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update company"
    });
  }
};

/* ===============================
   DELETE COMPANY
================================ */
export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid company ID"
      });
    }

    const deletedCompany = await Company.findByIdAndDelete(id);

    if (!deletedCompany) {
      return res.status(404).json({
        message: "Company not found"
      });
    }

    res.json({
      message: "Company deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete company"
    });
  }
};
