import chatModel from "../models/chat.model.js";

// for fetching all the chats
export async function getChat(userId) {
  const chats = await chatModel.find({ participants: userId }).lean();
  return chats;
}

// for creating chat 
export async function createChat(user1, user2) {
  const chat = await chatModel.create({
    participants: [user1, user2],
  }).lean();
  return chat;
}

// use for finding chat which already exists
export async function findChat(user1, user2) {
  const chat = await chatModel.findOne({
    participants: { $all: [user1, user2] },
  }).lean();
  return chat;
}

export async function updateLastMessage ( chatId , msg ) {
  const chat = await chatModel.findOneAndUpdate({ _id : chatId } , { lastMessage : {
    message : msg.message ,
    sender : msg.sender,
    createdAt : msg.createdAt
  }} , { new : true}).lean()

  return chat
}