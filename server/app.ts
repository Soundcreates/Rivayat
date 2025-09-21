import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import dotenv from "dotenv";
import connectDB from "./config/connectDB";

//importing routes
import authRouter from "./routes/authRoutes";
import userRouter from "./routes/userRoutes";

//dotenv setup
dotenv.config();

const app = express();

//setting cors up
const corsOptions = {
  //this is for custom routes (based on project mode)
  origin:
    process.env.PROJECT_MODE === "development"
      ? process.env.DEVELOPMENT_URI
      : process.env.PRODUCTION_URI,
  optionsSuccessStatus: 200,
};
// const allowedOrigins = [process.env.DEVELOPMENT_URI, process.env.PRODUCTION_URI];

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;

app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

//setting up routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
