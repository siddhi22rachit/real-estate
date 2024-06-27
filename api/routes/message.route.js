import express, { Router } from "express";
import{addMessage} from "../controllers/message.controller.js"
import { verifyToken } from "../middelware/verifyToken.js";

const router = express.Router()

router.post("/:chatId", verifyToken, addMessage);

export default router; 