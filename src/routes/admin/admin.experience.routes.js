import express from "express";
import auth from "../../middleware/auth.middleware.js";
import { adminOnly } from "../../middleware/admin.middleware.js";

import {
  approveExperience,
  rejectExperience,
  deleteExperience,
  getAdminExperiences,
  getExperienceCount,
  updateExperience,
  createAdminExperience
} from "../../controller/admin/admin.experience.controller.js";

const router = express.Router();


router.get("/count", auth, adminOnly, getExperienceCount);

router.post(
  "/",
  auth,
  adminOnly,
  createAdminExperience
);


/* Get all experinces */
router.get("/", auth, adminOnly, getAdminExperiences);



/* Approve */
router.put("/:id/approve", auth, adminOnly, approveExperience);

/* Reject */
router.put("/:id/reject", auth, adminOnly, rejectExperience);

router.put(
  "/:id",
  auth,
  adminOnly,
  updateExperience
);

router.delete("/:id", auth, adminOnly, deleteExperience)

export default router;
