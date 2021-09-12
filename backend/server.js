import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/ChatApp", {});
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/users", userRouter);

app.listen(port, () => console.log(`ChatApp listening on port ${port}!`));
