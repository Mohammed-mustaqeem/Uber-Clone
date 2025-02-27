import { createUser } from "../services/userServices.js";
import userModel from "../models/userModel.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUserCtrl = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);
  try {
    const { fullname, email, password } = req.body;
   
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = await jwt.sign(
      { email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUserCtrl = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
      const {email , password} = req.body;
      const user = await userModel.findOne({email}).select("+password");
      if (!user) {
        return res.status(401).json({message:"Invalid email or password"});
      }
      const isMatched = await bcrypt.compare(password, user.password);
      if (!isMatched) {
        return res.status(401).json({message:"Invalid email or password"});
      }
       const token = await jwt.sign(
         { email: user.email },
         process.env.SECRET_KEY,
         { expiresIn: "1h" }
       );

       res.cookie("token", token);

       return res.status(200).json({ user, token });
    
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message:"Internal server error"});
  }
}

export const getUserProfile = async (req, res)=>{

  res.status(200).json({user: req.user});
}