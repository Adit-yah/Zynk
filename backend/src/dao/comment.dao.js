import commentModel from "../models/comment.model.js"

export async function createComment (commentData) {
    const comment = (await commentModel.create(commentData)).populate('user' , 'username image')
    return comment 
}

export async function getComments(data) {
    const comments = await commentModel
    .find({post : data.postId})
    .sort({createdAt : -1})
    .skip(data.skip < 5 ?  data.skip : 5)
    .limit(data.limit < 20 ? data.limit : 20)
    .populate([{ path : 'user' , select : 'username image'}])
    .lean()

    return comments
}