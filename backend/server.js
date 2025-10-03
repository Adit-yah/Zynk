import app from './src/app.js'
import { connectDB } from './src/db/db.js'
import { createServer } from 'http'
import { setUpSocket } from './src/sockets/socket.js'

const httpServer = createServer(app)

setUpSocket(httpServer)
connectDB()

httpServer.listen( 3000 , ()=>{
    console.log("server is running on port 3000")
})
