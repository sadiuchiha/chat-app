import mongoose from "mongoose";

// time to each message
const messageSchema = new mongoose.Schema(
  {
    chatId: { type: String, required: true },

    messageInfo: [
      {
        from: { type: String, required: true },
        to: { type: String, required: true },
        message: { type: String, required: true },
        time: { type: Date, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

var Message = mongoose.model("Messages", messageSchema);
export { Message as default };
