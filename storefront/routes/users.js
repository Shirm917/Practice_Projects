import express from "express";

const router = express.Router();

router.post("/register", registerUser);

export default router;