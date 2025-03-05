import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "Not authorized" });
  }

  const blackListToken = await userModel.findOne({ token: token });

  if (blackListToken) {
    return res.status(401).json({ msg: "Not authorized, token blacklisted" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.findOne({ email: decoded.email });
    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ msg: "Not authorized, token failed" });
  }
};
