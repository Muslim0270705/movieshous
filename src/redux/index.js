import {configureStore} from "@reduxjs/toolkit";
import cinema from  "./reducers/cinema";
import users from "./reducers/users";
import onefilms from "./reducers/getOneFilm";
import search from "./reducers/filmsearch";
export const store = configureStore({
    reducer:{
        cinema,
        users,
        onefilms,
        search
    }
})