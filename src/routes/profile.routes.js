import express from "express";
import {
  getProfile,
  updateProfile,
  changePassword,
  updatePreferences,
  deleteAccount
} from "../controller/profile.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

// Profile routes
router.get("/", getProfile);
router.put("/", updateProfile);
router.post("/change-password", changePassword);
router.put("/preferences", updatePreferences);
router.delete("/", deleteAccount);

export default router;
