import userModel from "../../model/userModel";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registerController = async (
  req: express.Request,
  res: express.Response
) => {
  const { firstName, lastName, username, email, password, phoneNumber } =
    req.body; //taking the body sent from frontend

  try {
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !phoneNumber
    ) {
      //checking if any of the field is missing
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await userModel.findOne({ email }); //checking if user already exists
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //bcrypt logic
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); // this is the hashed password

    //creating the new user once all the checks have been passed
    const newUser = userModel.create({
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    //signing the jwt token (ronaldo is better)

    const token = jwt.sign(
      { id: (await newUser)._id, email: (await newUser).email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          console.log("Error at jwt sign", err);
          return res.status(500).json({ message: "Internal server error" });
        }
      }
    );
    process.env.PROJECT_MODE === "development" &&
      console.log(
        "User registered successfully with token: ",
        token,
        "user: ",
        newUser
      );
    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: (await newUser)._id,
        firstName: (await newUser).firstName,
        lastName: (await newUser).lastName,
        email: (await newUser).email,
        username: (await newUser).username,
        phoneNumber: (await newUser).phoneNumber,
      },
    });
  } catch (err) {
    console.log("Error at register controller", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const loginController = async (
  req: express.Request,
  res: express.Response
) => {
  const { email, phoneNumber, password } = req.body;
  try {
    //checking if email or phone number atleast one is provided
    if (!email && !phoneNumber) {
      return res
        .status(400)
        .json({ message: "Email or Phone number is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    //TODO : complete the login controller logic
  } catch (err) {
    console.log("Error at login controller", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
