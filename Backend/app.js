import express from "express";
const app = express();
import dotenv from "dotenv";
import dbConnect from "./db/db.js";
dotenv.config();

dbConnect(process.env.DB_STRING, process.env.DB_NAME);

app.get("/", (req, res) => {
  res.send("hello world");
});

export default app;
