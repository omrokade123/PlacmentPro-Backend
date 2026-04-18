import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import experienceRoutes from "./routes/experience.routes.js";
import companyRoutes  from "./routes/company.routes.js";
import adminRoutes from "./routes/admin/admin.route.js";
import practiceRoutes from "./routes/practice.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import interviewRouter from "./routes/interview.routes.js";
import profileRoutes from "./routes/profile.routes.js";




connectDB();

const app = express();

/* Middleware*/
app.use(
  cors({
    origin:process.env.FRONTEND_URL,
    credentials: true
  })
);
app.use(express.json());
app.use(cookieParser());

/* Routes */
app.use("/api/auth",authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/experiences",experienceRoutes);
app.use("/api/companies",companyRoutes);
app.use("/api/practice",practiceRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use("/api/interview",interviewRouter);

//admin
app.use("/api/admin",adminRoutes);

/* Health check */
app.get("/",(req,res)=>{
    res.send("Placement pro AI Backend Running");
})

const PORT = process.env.PORT || 5000 ;
app.listen(PORT,()=>{
    console.log(`🚀 Server running on port ${PORT}`)
})
