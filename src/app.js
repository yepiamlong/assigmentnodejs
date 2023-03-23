import express from "express";
import productRouter from "./routes/product";
import mongoose from "mongoose";
const app = express();

app.use(express.json());

app.use("/api", productRouter);

try {
  mongoose.connect('mongodb://127.0.0.1:27017/asm');
} catch (error) {
  console.log(error);
}

export const viteNodeApp = app;
