import React from 'react';
import SliderFilmFrance from "./SliderFilm/SliderFilmFrance";

const FilmFrance = ({status,error,data,favorites}) => {
    return (
        <section className="filmfrance">
            <h3 className="filmfrance__title">Все из США</h3>
            <SliderFilmFrance  data={data} status={status} error={error} favorites={favorites}/>
            <img className="filmfrance__bag" src="https://mf-static-ssl.more.tv/jackal/4773941/a27f5773-e465-4caf-9035-51863b378ae5_W1920_H771.avif" alt=""/>
        </section>
    );
};

export default FilmFrance;