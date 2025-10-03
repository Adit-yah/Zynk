import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
{
    user : {
        type : mongoose.Schema.Types.ObjectId ,  // show type is an mongoose id form
        ref : 'user' ,  //name of ref model
        required : true
    },
    image : {
        type : String ,
        required : true ,
    },
    caption : {
        type : String ,
        required : true ,
        trim  : true 
    },
    likeCount :{
        type : Number ,
        default : 0 ,
    },
    commentCount :{
        type : Number ,
        default : 0 ,
    },
    // followerCount :{
    //     type : Number ,
    //     default : 0 ,
    // },
    // followingCount :{
    //     type : Number ,
    //     default : 0 ,
    // },
    mentions : [
        {
            type : mongoose.Schema.Types.ObjectId ,
            ref : 'user'
        }
    ]
} ,
{
    timestamps : true  // this is use for knowing when the post is created
}
)


const postModel = mongoose.model('post' , postSchema)

export default postModel