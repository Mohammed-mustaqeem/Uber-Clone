import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello world");
});


export default app;
