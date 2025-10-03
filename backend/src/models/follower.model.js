import mongoose from 'mongoose'

const followerSchema = new mongoose.Schema(
    {
    userId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref  : 'user',
        required : true
    },

    follows : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },

    follower : {   // does the following_user follow the user
        type : Boolean ,
        default : false
    }
    },

    {
        timestamps : true
    }
)

const followerModel = mongoose.model('follower' , followerSchema)

export default followerModel