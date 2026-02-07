import express from "express";

import adminCompanyRoutes from "./admin.company.routes.js";
import adminExperienceRoutes from "./admin.experience.routes.js";
import adminQuestionRoutes from "./admin.question.routes.js"; 


const router = express.Router();

router.use("/companies", adminCompanyRoutes);
router.use("/experiences", adminExperienceRoutes);
router.use("/questions", adminQuestionRoutes); // ✅ HERE

export default router;