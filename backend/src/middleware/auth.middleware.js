import jwt from 'jsonwebtoken'
import config  from '../config/config.js'
import { findOneUser } from '../dao/user.dao.js'

// this middleware check the post is created by authorized user (login user)
export async function authMiddleware ( req , res , next){
   
    const token = req.cookies.token
    // if token not present 
    if(!token){
        return res.status(401).json({
            message : 'Unauthorized user please login'
        })
    }

    // now verify the token
    // if token is not match jwt.verify throw error for controlling that we use try catch
    try {
        const decode = jwt.verify( token , config.JWT_SECRET) 
         // in decode we have the real value of token  
        // decode have the id of user because when we create token during login or register 
        // we give user._id to jwt.sign 

        const user = await  findOneUser({ _id: decode._id})  // findOneUser func is use implement in user.dao.js

        req.user = user // this line make new property in req as user and assign the value of user we find above 

        next() // call the next middleware / route handler

    }catch(err){
       return res.status(401).json({
        message : 'Unauthorized user please login'
       })
    }
  
}