import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
    initialState:{
        email:null,
        loggedIn:false
    },
    name: 'user',
    reducers :{
        login : (state,action)=>{
              state.user = action.payload.email;
              state.loggedIn =action.payload.loggedIn
        },
        logout : (state)=>{
            state.user = null;
            state.loggedIn=false;
        }
    }
})

export const {login, logout} = userslice.actions;
export const selectUser=(state)=>state.user.user;
export default userslice.reducer
