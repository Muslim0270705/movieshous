import {configureStore} from "@reduxjs/toolkit";
import cinema from  "./reducers/cinema";
import users from "./reducers/users";
import onefilms from "./reducers/getOneFilm";
export const store = configureStore({
    reducer:{
        cinema,
        users,
        onefilms
    }
})