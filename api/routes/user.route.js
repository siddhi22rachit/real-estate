import express, { Router } from "express";
import { getUser,getUsers,updateUser,deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middelware/verifyToken.js";

const router = express.Router()

router.get("/", getUsers );
router.get("/:id", verifyToken, getUser);
router.put("/:id",verifyToken, updateUser );
router.delete("/:id", verifyToken, deleteUser );
export default router; 