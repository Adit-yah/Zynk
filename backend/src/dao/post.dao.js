import postModel  from "../models/post.model.js";

export async function createPost (postData){

    const post = await postModel.create(postData)
    return post
}

export async function getPosts ( skip = 0  , limit = 10 ) {
   const posts = await postModel
   .find()
   .sort({createdAt : -1})
   .skip(skip)
   .limit(limit)    
   .populate([
    { path : 'user' , select : "username image"},
    { path : 'mentions' , select : 'username'}
   ])
   .lean()

   return posts
}

export async function IncDecLikeFromPost (postId , mode) {
    const increment = mode ? 1 : -1
    const post = await postModel.findOneAndUpdate(
        { _id : postId},  // filter on basis of id
        { $inc : {likeCount : increment}}, // update condition
        {new : true} //return new obj
    ).lean()
    return post 
}

export async function IncCommentOfPost (postId) {
    const post = await postModel.findOneAndUpdate(
        { _id : postId},  // filter on basis of id
        { $inc : {commentCount : 1}}, // update condition
        {new : true} //return new obj
    ).lean()
    return post 
}
