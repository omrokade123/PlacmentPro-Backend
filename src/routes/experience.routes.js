import express from "express";
import {
  createExperience,
  getAllExperiences,
  getExperienceById,
  upvoteExperience
} from "../controller/experience.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", auth, createExperience);
router.get("/", getAllExperiences);
router.get("/:id",getExperienceById)
router.post("/:id/upvote", auth, upvoteExperience);

export default router;
