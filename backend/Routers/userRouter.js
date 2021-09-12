import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../Models/userModel.js";
import messageRouter from "./messageRouter.js";

const userRouter = express.Router();

userRouter.get(
  "/all",
  expressAsyncHandler(async (req, res) => {
    const userMap = await User.find({});
    if (userMap) {
      res.send({ userMap });
    } else {
      res.status(404).send({ message: "User not found!" });
    }
  })
);

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    if (user) {
      res.send({ user });
    } else {
      res.status(404).send({ message: "User not found!" });
    }
  })
);

userRouter.get(
  "/:id/friends",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    if (user) {
      res.send({ friends: user.friends });
    } else {
      res.status(404).send({ message: "User not found!" });
    }
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      friends: [],
    });

    const createdUser = await user.save();
    res.send({ createdUser });
  })
);

userRouter.use("/", messageRouter);

export default userRouter;
