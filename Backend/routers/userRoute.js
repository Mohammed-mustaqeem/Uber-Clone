import express from 'express'

const userRouter = express.Router();
import { body } from 'express-validator';
import { createUserCtrl, getUserProfile, loginUserCtrl, logoutUser } from '../controllers/userControler.js';
import { authUser } from '../middlewares/Auth.js';


userRouter.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  createUserCtrl
);

userRouter.post("/login",[
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long")
],loginUserCtrl)

userRouter.get("/profile", authUser, getUserProfile);
userRouter.get("/logout",authUser, logoutUser);

export default userRouter;