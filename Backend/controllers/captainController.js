import captainModel from "../models/captainModel.js";
import { validationResult } from "express-validator";
import { CaptainService } from "../services/captianService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const registerCaptain = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { fullname, email, password, vehicle } = req.body;
        const isalreadyCaptain = await captainModel.findOne({ email });
        if (isalreadyCaptain) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const captain = await CaptainService({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        });
        const token = jwt.sign({ email: captain.email }, process.env.SECRET_KEY);

        res.status(201).json({ captain , token });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
        
    }
}