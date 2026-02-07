import express from "express";
import auth from "../../middleware/auth.middleware.js";
import { adminOnly } from "../../middleware/admin.middleware.js";

import {
  createQuestion,
  getAllQuestions,
  bulkCreateQuestions
} from "../../controller/admin/admin.question.controller.js";

const router = express.Router();

router.post("/", auth, adminOnly, createQuestion);
router.get("/", auth, adminOnly, getAllQuestions);
router.post("/bulk", auth, adminOnly, bulkCreateQuestions);


export default router;
