import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "post",
    },

    text: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const commentModel = mongoose.model('comment' , commentSchema)

export default commentModel;
