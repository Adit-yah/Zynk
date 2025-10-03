import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginUser : {}
}

const userSlice = createSlice({
    name : 'user',
    initialState ,
    reducers : {

        setLoginUser : (state , action) => {
           state.loginUser = {...state.loginUser , ...action.payload}   
        },

        // updateLoginUser : ( state , action ) => {
        //     state.loginUser = {...state.loginUser , ...action.payload}
        // }

    }
})


export const getLoginUser = state => state.user.loginUser

export const  { setLoginUser } = userSlice.actions 

export default userSlice.reducer