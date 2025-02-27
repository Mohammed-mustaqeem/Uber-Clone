import express from 'express'

const userRouter = express.Router();
import { body } from 'express-validator';
import { createUserCtrl } from '../controllers/userControler.js';


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

export default userRouter;