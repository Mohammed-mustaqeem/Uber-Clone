import express from "express";
const captainRouter = express.Router();
import {body} from "express-validator";
import { captainLogin, captainLogout, getCaptainProfile, registerCaptain } from "../controllers/captainController.js";
import { authCaptain } from "../middlewares/Auth.js";

captainRouter.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters required"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters required"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("capacity must be at least 1 characters required"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Vehicle type must be at least 3 characters required"),
  ],
  registerCaptain
);

captainRouter.post('/login',[
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
], captainLogin)

captainRouter.get("/profile", authCaptain, getCaptainProfile);

captainRouter.get("/logout", authCaptain, captainLogout);

export default captainRouter;
