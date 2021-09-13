import express from "express";
import expressAsyncHandler from "express-async-handler";
import Message from "../Models/messageModel.js";

const messageRouter = express.Router();

//Send message from sender to receiver
//Creates Chatbox for sender and receiver
messageRouter.post(
  "/sendMsg/:to",
  expressAsyncHandler(async (req, res) => {
    const senderId = req.body.from;
    const receiverId = req.params.to;
    const message = req.body.message;
    const senderChatBox = senderId + receiverId;
    const receiverChatBox = receiverId + senderId;

    const sentSuccess = await messageDirecter(
      message,
      senderId,
      receiverId,
      senderChatBox
    );

    const receiveSuccess = await messageDirecter(
      message,
      senderId,
      receiverId,
      receiverChatBox
    );

    if (sentSuccess && receiveSuccess)
      res.send({ Message: `Successfully sent on both ends. sentSuccess: ${sentSuccess}  receiveSuccess: ${receiveSuccess}` });
    else
      res.send({
        Message: `Mission Failed! couldn't sent the parcel. sentSuccess: ${sentSuccess}  receiveSuccess: ${receiveSuccess}`,
      });
  })
);

var messageDirecter = async (message, sender, receiver, chatBoxId) => {
  const messageInfo = {
    from: sender,
    to: receiver,
    message: message,
    time: new Date(),
  };

  const chatBoxExist = await Message.findOne({ chatId: chatBoxId }).exec();
  if (chatBoxExist) {
    chatBoxExist.messageInfo.push(messageInfo);
    return await chatBoxExist.save();
  } else {
    var chatBox = new Message({
      chatId: chatBoxId,
      messageInfo: [],
    });
  }

  chatBox.messageInfo.push(messageInfo);
  return await chatBox.save();
};

//Get all messages of the user of :chatId of ChatBox
//All the message sent and received: from currentID to receiverID of the ChatId(currentID + receiverID) 
//Query: findallMsg(chatId)
messageRouter.get(
  "/allMsg/:chatId",
  expressAsyncHandler(async (req, res) => {
    const messageMap = await Message.find({ from: req.params.chatId });
    if (messageMap) {
      res.send({ messageMap });
    } else {
      res.status(404).send({ message: "Messages not found!" });
    }
  })
);

//var messageDirecter = (message, messageInfo, chatBox) => {};

export default messageRouter;
