import express from "express";
import { getProfile, postController } from "../controllers/auth/userController";
import multer from "multer";

const uploadMiddleware = multer({ dest: "uploads/" });
const userRouter = express.Router();

userRouter.get("/profile", getProfile);
userRouter.post("/post", uploadMiddleware.single("cover"), postController);

export default userRouter;
