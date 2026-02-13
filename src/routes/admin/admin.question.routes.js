import express from "express";
import auth from "../../middleware/auth.middleware.js";
import { adminOnly } from "../../middleware/admin.middleware.js";

import {
  createQuestion,
  bulkCreateQuestions,
  getAdminQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion
} from "../../controller/admin/admin.question.controller.js";

const router = express.Router();

router.post("/", auth, adminOnly, createQuestion);

router.post("/bulk", auth, adminOnly, bulkCreateQuestions);

router.get("/", auth, adminOnly, getAdminQuestions);

router.get("/:id", auth, adminOnly, getQuestionById);

router.put("/:id", auth, adminOnly, updateQuestion);

router.delete("/:id", auth, adminOnly, deleteQuestion);


export default router;
