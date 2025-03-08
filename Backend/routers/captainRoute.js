import express from "express";
const captainRouter = express.Router();
import body from "express-validator";

captainRouter.post("/register", [
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("fullname.firstname")
    .isLenght({ min: 3 })
    .withMessage("First name must be at least 3 characters required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("vehcile.color")
    .isLenght({ min: 3 })
    .withMessage("Color must be at least 3 characters required"),
  body("vehcile.plate")
    .isLenght({ min: 3 })
    .withMessage("Plate must be at least 3 characters required"),
  body("vehcile.capacity")
    .isLenght({ min: 3 })
    .withMessage("capacity must be at least 3 characters required"),
  body("vehcile.vehcileType")
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Vehicle type must be at least 3 characters required"),
]);

export default captainRouter;
