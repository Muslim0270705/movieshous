import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getCinema = createAsyncThunk(
    "cinema/getCinema",
    async (filter,{rejectWithValue}) => {
        try {
            const res = await axios(`/data?${filter?.category.length ? "category=" + filter.category + "&" : ""}${filter?.price.length ? "price=" + filter?.price + '&' : ''}${filter?.year.length ? "year=" +  filter?.year : ''}`)
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
        filter: {
            year: "",
            price:'',
            category:"",
        },
        status: '',
        error: '',
        content: "",
        genre: "",
        country: ""

    },
    reducers: {
        // getCinema: (state,action) => {
        //     state.data = action.payload
        //     state.dataLength = action.payload.length
        // }
            changeYear:(state,action) => {
                state.filter.year = action.payload
            },
            changeGenre: (state,action) => {
            state.genre = action.payload
            },
            changeContent: (state,action) => {
            state.content = action.payload
            },
            changeCountry: (state,action) => {
            state.country = action.payload
            },
            changeCategory: (state,action) => {
            state.filter.category = action.payload
            },
            changePrice: (state,action) => {
            state.filter.price = action.payload
            }
    },
    extraReducers: {
        [getCinema.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getCinema.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getCinema.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
            state.dataLength = action.payload.length
        }
    }
})

export const {changeYear,changeGenre,changeContent,changeCountry,changeCategory,changePrice} = cinemaSlice.actions
export default  cinemaSlice.reducer
