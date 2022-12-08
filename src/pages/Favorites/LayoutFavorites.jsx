import React from 'react';
import {Outlet} from 'react-router-dom'
import Favorites from "./Favorites.";
const LayoutFavorites = () => {
    return (
        <>
            <Favorites/>
            <Outlet/>
        </>
    );
};

export default LayoutFavorites;