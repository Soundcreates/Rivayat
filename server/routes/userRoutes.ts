import express from "express";
import { getProfile } from "../controllers/auth/userController";
const userRouter = express.Router();

userRouter.get("/profile", getProfile);

export default userRouter;
