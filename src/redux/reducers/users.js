import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{
            email:''
        }
    },
    reducers:{
        loginAccount : (state,action) =>{
            state.user = action.payload
        },
        logOutAccount: (state,action)=>{
            state.user ={
                email: ''
            }
        }
    }

})
export const {loginAccount,logOutAccount} = userSlice.actions
export default userSlice.reducer