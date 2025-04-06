import blackListTokenModel from "../models/balckListToken.model.js";
import captainModel from "../models/captainModel.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "Not authorized" });
  }

  const blackListToken = await blackListTokenModel.findOne({ token: token });

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

export const authCaptain =async (req,res,next) => {
  const token= req.cookies.token || req.headers.authorization?.split(" ")[1];
  console.log( "token" , token)
  
  if (!token) {
    return res.status(401).json({ msg: "unauthorized" });
  }
  const isBlackList = await blackListTokenModel.findOne({ token: token });
  console.log(isBlackList)
  if (isBlackList) {
    return res.status(401).json({ msg: "Not authorized, token blacklisted" });
  }
  try {
       const decoded = jwt.verify(token, process.env.SECRET_KEY);
       const captain = await captainModel.findOne(decoded._id);
        req.captain = captain;
    return next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized token failed" });
  }
}