import { createUser } from "../services/userServices.js";
import userModel from "../models/userModel.js";
import { validationResult } from "express-validator";

export const createUserCtrl = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !fullname.firstname || !fullname.lastname) {
      return res.status(400).json({ error: "Invalid fullname format" });
    }
    const hashedPassword = await userModel.hashpassword(password);

    const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error.message);
  }
};
