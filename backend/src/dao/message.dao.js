import messageModel from "../models/message.model.js";

export async function createMessage (messageData){
 const message = await messageModel.create(messageData)
 return message 
}

export async function getMessages (chatId , limit = 20 , skip = 0) {
    const messages = await messageModel
    .find({ chatId})
    .sort({createdAt : -1})
    .limit(limit)
    .skip(skip)
    .lean()

    return messages
}