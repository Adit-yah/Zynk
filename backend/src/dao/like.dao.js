import likeModel from "../models/like.model.js"

export async function createLike (likeData){
   await likeModel.create(likeData)
}

export async function isLiked (likeData) {
    return !!( await likeModel.findOne(likeData) )  
}

export async function deleteLike (likeData) {
    await likeModel.findOneAndDelete(likeData)
}

export async function userLikedPosts({ postIdArray , userId}){
    const like = await likeModel.find({
        post : { $in : postIdArray},
        user : userId
    }).select('post').lean()
    return like 
}