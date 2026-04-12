import express from "express";
import { register,login,logout,getMeController } from "../controller/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/logout", authMiddleware, logout);
router.get("/get-me",authMiddleware,getMeController);

export default router;