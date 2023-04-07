import express from "express";
import {register,login} from "../controllers/users.js";
import { checkData } from "../middlewares/checkData.js";

const router = express.Router();

router.post("/register", checkData, register);
router.post("/login", login);

export default router;