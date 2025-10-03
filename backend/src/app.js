import express from "express"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"
import postRouter from "./routes/post.routes.js"
import chatRouter from './routes/chat.route.js'
import messageRouter from './routes/message.route.js'
import userRouter from './routes/user.route.js'
import cors from 'cors'
const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())

app.use('/auth' , authRouter)
app.use('/posts' , postRouter)
app.use('/chats' , chatRouter )
app.use('/chats' , messageRouter)
app.use('/user' , userRouter )

export default app