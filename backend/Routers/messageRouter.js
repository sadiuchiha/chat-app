import express from "express";
import expressAsyncHandler from "express-async-handler";
import Message from "../Models/messageModel.js";

const messageRouter = express.Router();

messageRouter.post(
  "/sendMsg/to:",
  expressAsyncHandler(async (req, res) => {
    const message = new Message({
      from: req.body.from,
      to: req.params.to,
      message: req.body.message,
    });

    const createdMessage = await message.save();
    res.send({ createdUser });
  })
);


//Get all last messages of the user of :id sent/receive
//All the message sent: from currentID to receiverID
//And the message received: to currentID from otherID's
//Query: allMsg(currentID, toSelectedID) or allMsg(toSelectedID, currentID) 
messageRouter.get(
    "/allMsg/:id",
    expressAsyncHandler(async (req, res) => {
      const messageMap = await Message.find({from: req.params.id})
      if(messageMap) {
        res.send({messageMap})
      } else {
        res.status(404).send({message: "Messages not found!"})
      }
  
    })
  );

export default messageRouter;
