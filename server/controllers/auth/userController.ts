import express from "express";
import userModel from "../../model/userModel";
import { Request, Response } from "express";
import fs from "fs";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import Post from "../../model/postModel";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

interface TokenPayload extends JwtPayload {
  id: string;
}

export const getProfile = async (
  req: express.Request,
  res: express.Response
) => {};

export const postController = async (
  req: MulterRequest, 
  res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }

    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      async (err: VerifyErrors | null, decoded: JwtPayload | string | undefined) => {
        if (err || !decoded) {
          return res.status(403).json({ error: "Invalid token" });
        }

        const info = decoded as TokenPayload;
        const { productname, description } = req.body;

        const postDoc = await Post.create({
          productname,
          description,
          cover: newPath,
          author: info.id,
        });

        res.json(postDoc);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
