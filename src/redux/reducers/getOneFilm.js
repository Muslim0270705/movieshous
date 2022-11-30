import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getOneFilm = createAsyncThunk(
    "onefilm/getOneFilm",
    async (id,{rejectWithValue}) => {
        try {
            const res = await axios(`/data/${id}`)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)
const oneFilm = createSlice({
    name: "onefilm",
    initialState : {
        product : {},
        error : '',
        status : ''
    },
    reducers : {},
    extraReducers : {
        [getOneFilm.pending] : (state) => {
            state.status = 'loading'
            state.error = ''
        },
        [getOneFilm.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getOneFilm.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.product = action.payload
        }
    }
})

export default oneFilm.reducer