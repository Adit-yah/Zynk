import {Server} from 'socket.io';
import cookie from 'cookie'
import jwt from 'jsonwebtoken'
import { createMessage } from '../dao/message.dao.js';
import { updateLastMessage } from '../dao/chat.dao.js';

const user = {}

export function setUpSocket (httpServer) {

    const io = new Server(httpServer)

    io.use(( socket , next ) => {
        const cookies = socket.request.headers.cookie
        const {token} = cookie.parse(cookies ?? '')

        if(!token){
            return next(new Error('Authentication Error'))
        }

        try{
            const decode = jwt.verify(token , process.env.JWT_SECRET)
            socket.user = decode
            next()
        }catch(err){
            return next(new Error('Authentication Error'))
        }
        
     })

    io.on('connection' ,  (socket) => {
        user[socket.user._id] = socket.id
        console.log(user);

        socket.on('message' , async (msg) => {
            const { receiver , message} = msg 
            if(!receiver || !message){
                return  socket.emit('sendError' , "Receiver or Message  are missing ")
            }
            
            socket.to(user[receiver]).emit('message' , message )
            const chatId = socket.request.headers.chatid
            const NewMsg =  await createMessage({
                chatId ,
                sender : socket.user._id,
                message : message
            })
            await updateLastMessage( chatId , NewMsg )
        })
        
    })
}