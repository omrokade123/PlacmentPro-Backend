import express from "express";

import adminCompanyRoutes from "./admin.company.routes.js";
import adminExperienceRoutes from "./admin.experience.routes.js";
import adminQuestionRoutes from "./admin.question.routes.js";
import { getAdminStats } from "../../controller/admin.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import { adminOnly } from "../../middleware/admin.middleware.js";


const router = express.Router();

router.use("/companies", adminCompanyRoutes);
router.use("/experiences", adminExperienceRoutes);
router.use("/questions", adminQuestionRoutes);
router.get("/stats",authMiddleware,adminOnly,getAdminStats);

export default router;