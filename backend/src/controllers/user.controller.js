import { updateUser } from "../dao/user.dao.js"
import { v4 as uuidv4} from 'uuid'
import { uploadUserImage } from "../services/storage.services.js"
import { searchUsers} from '../dao/user.dao.js'

export function getLoginUserController (req , res ) { 
    const user  = req.user
    return res.status(200).json({
        message : 'fetch login user details successfully',
        user
    })
}

export async function updateUserController ( req , res) {
    
    const file = req?.file

    if(file){
        const image = await uploadUserImage(file , uuidv4())
        const updateDetails = {
            image : image.url ,
            ...req.body
        }
        const user = await updateUser({_id : req.user._id , updateDetails})
        return res.status(201).json({
            message : 'user details updated successfully',
            user
        })
    }

    const user = await updateUser({_id : req.user._id , updateDetails : req.body})
    res.status(201).json({
        message : 'user details updated successfully',
        user
    })
}

export async function  getSearchUserController ( req , res ){
    
    const user  = req.query.username 
    console.log(req);
    
    const users = await searchUsers(user)

    res.status(200).json({
        message : 'search completed' ,
        users
    })
}