import express from "express";
const app = express();
import cors from "cors"
import dotenv from "dotenv";
import dbConnect from "./db/db.js";
import userRouter from "./routers/userRoute.js";
import cookieParser from "cookie-parser";
import captainRouter from "./routers/captainRoute.js";
dotenv.config();

dbConnect(process.env.DB_STRING, process.env.DB_NAME);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users',userRouter)
app.use("/captain", captainRouter);



export default app;
