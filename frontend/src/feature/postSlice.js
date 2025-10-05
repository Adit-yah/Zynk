import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  comments: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // Post related
    setPosts: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
    },

    updatePostsDetails: (state, action) => {
      state.posts = state.posts.map((post) => {
       const isLike = (post.likeCount === action.payload.likeCount )? post.isLike : !post.isLike
        return post._id === action.payload._id
          ? { ...post, ...action.payload, user: post.user , isLike , mentions: post.mentions}
          : post;
      });
    },

    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },

    // Comment related
    setComments : (state , action) => {
      state.comments =[ ...state.comments , ...action.payload]
    },

    clearComment: (state) => {
      state.comments = [];
    },

    addComment: (state, action) => {
      state.comments.unshift(action.payload);
    },
  },
});

export const getPosts = (state) => state.post.posts;
export const getComments = (state) => state.post.comments

export const { setPosts, updatePostsDetails, addPost, setComments, clearComment, addComment } = postSlice.actions;

export default postSlice.reducer;
