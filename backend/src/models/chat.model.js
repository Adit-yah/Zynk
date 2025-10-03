import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    participants: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
      },
    ],

    lastMessage : {
         message : {
          type : String , 
          default : "" ,
         },
         sender : {
           type : mongoose.Schema.Types.ObjectId,
           ref : "user"
         },
         createdAt : { type : Date}
    }
  },
  { timestamps: true }
);

const ChatModel = mongoose.model("chat", chatSchema);
export default ChatModel;
