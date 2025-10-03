import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import postReducer from '../feature/postSlice';

const store = configureStore({
  reducer: {
    user : userReducer,
    post : postReducer
  },
});

export default store;
