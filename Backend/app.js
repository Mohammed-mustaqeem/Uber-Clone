import express from "express";
const app = express();
import dotenv from "dotenv";
import dbConnect from "./db/db.js";
import userRouter from "./routers/userRoute.js";
dotenv.config();

dbConnect(process.env.DB_STRING, process.env.DB_NAME);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users',userRouter)



export default app;
