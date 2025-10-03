import { createChat, findChat, getChat } from "../dao/chat.dao.js"
import {  validUser } from "../dao/user.dao.js"

 export async function getChatController (req , res ){
    const user = req.user 
    const chat = await getChat(user._id)
    
    return res.status(200).json({
        message : "Chat fetch successfully",
        chats : chat
    })
 }

 export async function createOrGetChatController ( req , res ) {
    const  {userId} = req.params
    
    if (!userId){
        return res.status(401).json({message : 'Invalid participants'})
    }

    const isUserExist = await validUser(userId)

    if(!isUserExist){
        return res.status(401).json({message : "Unable to contact with this user"})
    }

    const oldChat = await findChat(req.user._id , isUserExist._id)

    if(!oldChat) {
        const NewChat = await createChat(req.user._id , isUserExist._id)
        return res.status(201).json({message : "New chat created " , NewChat})
    }
    

    return res.status(200).json({message : "Chat Exists" , oldChat})
 }