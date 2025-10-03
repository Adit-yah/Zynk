import userModel from "../models/user.model.js";

export async function createUser(userData) {
  const user = await userModel.create(userData);
  return user;
}

export async function findOneUser(userInfo) {
  const user = await userModel.findOne(userInfo).lean();
  return user;
}

export async function updateUser(User) {
  const updatedUser = await userModel
    .findByIdAndUpdate(User._id, { $set: User.updateDetails }, { new: true })
    .lean();

  return updatedUser;
}

export async function validUser(userId) {
  const user = await userModel.findOne({ _id: userId });
  return user;
}

export async function findMentionsUsers(userArray) {
  const users = await userModel
    .find({
      username: { $in: userArray },
    })
    .lean();
  return users;
}

export async function searchUsers(user) {
  const SearchUsers = await userModel.find({ username : { $regex : `${ "^"+user}` , $options : 'i'}}).lean()
  return SearchUsers
}
