import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getCinema = createAsyncThunk(
    "cinema/getCinema",
    async (_,{rejectWithValue}) => {
        try {
            const res = await axios('/data?category=films')
            if(res.statusText !== 'OK'){
                throw new Error("Server error !")
            }
            return res.data
        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const cinemaSlice = createSlice({
    name: "cinema",
    initialState:{
        data: [],
        dataLength: 0,
        filter: {},
        status: '',
        error: ''
    },
    reducers: {
        // getCinema: (state,action) => {
        //     state.data = action.payload
        //     state.dataLength = action.payload.length
        // }
    },
    extraReducers:{
      [getCinema.pending] : (state,action) =>{
          state.status = 'Loading...'
          state.error = ''
      },
      [getCinema.rejected] : (state, action) =>{
          state.status = 'error'
          state.error = action.payload
      },
      [getCinema.fulfilled] : (state,action) =>{
          state.status = 'resolve'
          state.error = ''
          state.data = action.payload
          state.dataLength = action.payload.length
      }
    }
})
export const {} = cinemaSlice.actions
export default  cinemaSlice.reducer
