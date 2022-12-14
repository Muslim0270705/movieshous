import React,{useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import Slider from "./Slider/Slider";
import SliderFilm from "./SliderFilm/SliderFilm";

import Subscription from "./Subscriptions/Subscriptions";
import SliderFilmAction from "./SliderFilm/SliderFilmAction";
import SliderFilmCrime from "./SliderFilm/SliderFilmCrime";
import SliderFilmAdventure from "./SliderFilm/SliderFilmAdventure";
import FilmFrance from "./FilmFrance";
import {getCinema} from "../../redux/reducers/cinema";




const Home = () => {
    const {data,status,error,favorites,country} = useSelector((store) => store.cinema)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCinema())
    },[])
    return (
        < >
            <Slider data={data} status={status} error={error}/>
            <SliderFilm data={data} status={status} error={error} favorites={favorites}/>
            <Subscription data={data} status={status} error={error} favorites={favorites}/>
            <SliderFilmCrime data={data} status={status} error={error} favorites={favorites}/>
            <SliderFilmAdventure data={data} status={status} error={error} favorites={favorites}/>
            <SliderFilmAction data={data} status={status} error={error} favorites={favorites} country={country}/>
            <FilmFrance data={data} status={status} error={error} favorites={favorites}/>
        </>
    );
};

export default Home;