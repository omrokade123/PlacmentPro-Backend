import express from "express";
import {
  getPendingCompanies,
  approveCompany,
  rejectCompany
} from "../../controller/admin/admin.company.controller.js";

import auth from "../../middleware/auth.middleware.js";
import { adminOnly } from "../../middleware/admin.middleware.js";

const router = express.Router();

/* Pending companies */
router.get("/pending", auth, adminOnly, getPendingCompanies);

/* Approve company */
router.put("/:id/approve", auth, adminOnly, approveCompany);

/* Reject company */
router.put("/:id/reject", auth, adminOnly, rejectCompany);

export default router;
