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
    const newUser = await userModel.create({
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    //signing the jwt token (ronaldo is better)

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" },
      (err: Error | null, token?: string) => {
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
        id:  newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        username: newUser.username,
        phoneNumber: newUser.phoneNumber,
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

    const User = await userModel.findOne({ email });

    if(!User){
      return res.status(401).json("User does not exist");
    }

    const validPassword = await bcrypt.compare(password, User.password);
    
    if(phoneNumber != User.phoneNumber){
      return res.status(401).json("Incorrect Phone Number");
    }
    
    if(!validPassword){
      return res.status(401).json("Incorrect Password");
    }

    const token = jwt.sign(
      { id: User._id, email: User.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" },
      (err: Error | null, token?: string) => {
        if (err) {
          console.log("Error at jwt sign", err);
          return res.status(500).json({ message: "Internal server error" });
        }
      }
    );
    process.env.PROJECT_MODE === "development" &&
      console.log(
        "User is Logged In successfully with token: ",
        token,
        "user: ",
        User
      );
    return res.status(201).json({
      message: "User Loggged in successfully",
      token,
      user: {
        id: User._id,
        firstName: User.firstName,
        lastName:  User.lastName,
        email:  User.email,
        username: User.username,
        phoneNumber: User.phoneNumber,
      },
    });

    //TODO : complete the login controller logic
  } catch (err) {
    console.log("Error at login controller", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
