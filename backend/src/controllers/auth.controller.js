import { createUser, findOneUser } from "../dao/user.dao.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import config from "../config/config.js"


export async  function  registerController (req , res ){
    const { username , email , password } = req.body 

    const isUserExist = await  findOneUser({
        $or:[
            {email},
            {username}
        ]
    })

    if(isUserExist){
        return res.status(400).json({
            message : "User already exists"
        })
    }

    const hashPass = await bcrypt.hash( password , 10)
    
    const user = await createUser({username , email , "password" : hashPass})

    const token  = jwt.sign({ _id : user._id} , config.JWT_SECRET)

    res.cookie("token" , token)

    return res.status(201).json({
        message : " user cerated successfully",
        user
    })
}

export async function  loginController (req , res){

    const { userIdentity , password} = req.body
    console.log(userIdentity);
    

    const user = await findOneUser({ 
        $or:[
            {email: userIdentity } ,
            {username : userIdentity}
        ]
    })

    if(!user){
        return res.status(400).json({message: "Invalid username or password"})
    }

    const isPassMatch = await bcrypt.compare( password , user.password)

    if(!isPassMatch){
        return res.status(400).json({message: "Invalid username or password"})
    }

    const token = jwt.sign({_id : user._id} , config.JWT_SECRET)
    res.cookie('token' , token)

    return res.status(200).json(
        {
           message : 'user log in successfully',
           user
        }
    )
}

export async function logoutController ( req , res ){
    res.clearCookie('token')
    return res.status(200).json({
        message : 'user logout successfully'
    })
}