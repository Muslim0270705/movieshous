import {configureStore} from "@reduxjs/toolkit";
import cinema from  "./reducers/cinema"

export const store = configureStore({
    reducer:{
        cinema
    }
})