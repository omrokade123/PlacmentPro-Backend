import express from "express";
import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany
} from "../controller/company.controller.js";

import auth from "../middleware/auth.middleware.js";

const router = express.Router();

/* Create company (admin only – optional later) */
router.post("/", auth, createCompany);

/* Get all companies */
router.get("/", getAllCompanies);

/* Get single company */
router.get("/:id", getCompanyById);

/* Update company */
router.put("/:id", auth, updateCompany);

/* Delete company */
router.delete("/:id", auth, deleteCompany);

export default router;
