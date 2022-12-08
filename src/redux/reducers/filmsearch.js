import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getSearch = createAsyncThunk(
    "search/getSearch",
    async (filter,{rejectWithValue}) => {
        try {
            const res = await axios(`/data?${filter?.search?.length ? "title_like=" + filter?.search : ''}`)
            if(res.statusText !== 'OK'){
                throw new Error("Server error !")
            }
            return res.data
        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const cinemaSearch = createSlice({
    name: "search",
    initialState:{
        data: [],
        dataLength: 0,
        filter: {
            search:'',
        }


    },
    reducers: {
        changeSearch: (state, action) =>  {
            state.filter.search = action.payload
        }
    },
    extraReducers: {
        [getSearch.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getSearch.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getSearch.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
            state.dataLength = action.payload.length
        }
    }
})

export const {changeSearch} = cinemaSearch.actions
export default  cinemaSearch.reducer
