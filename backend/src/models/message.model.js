import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  chatId : {
    type : mongoose.Schema.Types.ObjectId,
    required : true ,
    ref : 'chat'
  },

  sender: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },

  message : {
    type : String ,
    required : true
  },
},
{
    timestamps : true
});

const messageModel = mongoose.model('message' , messageSchema)

export default messageModel