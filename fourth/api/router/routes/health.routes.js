import { Router } from "express";
import { checkHealth } from "../../controllers/health.controller.js";
const router = Router();

// /health/
router.get("/", checkHealth);


export default router;