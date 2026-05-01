import { Router } from "express";
const router = Router();

// Routes Imports
import healthRoutes from "./routes/health.routes.js";
import userRoutes from "./routes/user.routes.js";

// Routes
router.use("/health", healthRoutes);
router.use("/users", userRoutes);

export default router;