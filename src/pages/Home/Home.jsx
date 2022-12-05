import React,{useEffect, useState} from 'react';
import {changeCategory} from "../../redux/reducers/cinema";
import {useDispatch} from "react-redux";
import Slider from "./Slider/Slider";
import SliderFilm from "./SliderFilm/SliderFilm";

import Subscription from "./Subscriptions/Subscriptions";
import SliderFilm2 from "./SliderFilm/SliderFilm2";



const Home = () => {

    return (
        < >
            <Slider/>

            <SliderFilm/>
            <Subscription/>
            <SliderFilm style={{margin: "0 20px 0 0"}}/>
            <SliderFilm/>
            <SliderFilm/>
            <SliderFilm/>
            <SliderFilm/>
            <SliderFilm/>
        </>
    );
};

export default Home;