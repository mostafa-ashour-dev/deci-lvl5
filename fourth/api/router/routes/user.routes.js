import { Router } from "express";
import { createUser, getUsers } from "../../controllers/user.controller.js";
const router = Router();

// /users/
router.post("/", createUser);

// /users/
router.get("/", getUsers);
export default router;