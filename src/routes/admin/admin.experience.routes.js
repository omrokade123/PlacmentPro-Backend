import express from "express";
import auth from "../../middleware/auth.middleware.js";
import { adminOnly } from "../../middleware/admin.middleware.js";

import {
  getPendingExperiences,
  approveExperience,
  rejectExperience
} from "../../controller/admin/admin.experience.controller.js";

const router = express.Router();

/* View pending */
router.get("/experiences/pending", auth, adminOnly, getPendingExperiences);

/* Approve */
router.put("/experiences/:id/approve", auth, adminOnly, approveExperience);

/* Reject */
router.put("/experiences/:id/reject", auth, adminOnly, rejectExperience);

export default router;
