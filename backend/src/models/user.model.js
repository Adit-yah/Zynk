import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username : {
        type : String ,
        required : true ,
        unique : true ,
        trim : true ,
        lowercase : true
    },
    email : {
        type : String ,
        required : true ,
        unique : true ,
        trim : true
    },
    password : {
        type : String ,
        required : true 
    },
    bio : {
        type : String ,
        default : "" ,
        trim : true 
    },
    image : {
        type: String,
        default: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
        trim: true
    }
})

const userModel = mongoose.model( 'user' , userSchema)

export default userModel;