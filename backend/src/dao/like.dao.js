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

