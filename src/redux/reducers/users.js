import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{
            email:'',
            name:''
        }
    },
    reducers:{
        loginAccount : (state,action) =>{
            state.user = action.payload
        },
        logOutAccount: (state,action)=>{
            state.user ={
                email: '',
                name:''
            }
        }
    }

})
export const {loginAccount,logOutAccount} = userSlice.actions
export default userSlice.reducer