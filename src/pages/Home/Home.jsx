import React from 'react';
import Slider from "./Slider/Slider";
import SliderFilm from "./SliderFilm/SliderFilm";
import Subscription from "./Subscriptions/Subscriptions";


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