import React,{useEffect, useState} from 'react';
import {changeCategory} from "../../redux/reducers/cinema";
import {useDispatch} from "react-redux";
import Slider from "./Slider/Slider";
import SliderFilm from "./SliderFilm/SliderFilm";

import Subscription from "./Subscriptions/Subscriptions";
import SliderFilmAction from "./SliderFilm/SliderFilmAction";
import SliderFilmCrime from "./SliderFilm/SliderFilmCrime";
import SliderFilmAdventure from "./SliderFilm/SliderFilmAdventure";
import FilmFrance from "./FilmFrance";



const Home = () => {

    return (
        < >
            <Slider/>
            <SliderFilm/>
            <Subscription/>
            <SliderFilmCrime/>
            <SliderFilmAdventure/>
            <SliderFilmAction/>
            <FilmFrance/>
        </>
    );
};

export default Home;