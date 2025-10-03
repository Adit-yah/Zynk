import mongoose from 'mongoose'
import config from '../config/config.js'

export  function connectDB (){
    mongoose.connect(config.MONGODB_URL)
    .then(()=>console.log('connected to mongodb atlas'))
    .catch((err)=>console.log("Error : " , err))
}

