import React from 'react';
import FilmsYear from "./FilmsYear";
import FilmsSort from "./FilmsSort";
import FilmsContent from "./FilmsContent";
import FilmsCountry from "./FilmsCountry";
import FilmsPrice from "./FilmsPrice";


const Filmfilter = () => {

    return (
        <section className="filmfilter">
            <div className="container">
            <div className="filmfilter__row">

                    <FilmsPrice/>
                    <FilmsYear/>
                    <FilmsSort/>
                    <FilmsContent/>
                    <FilmsCountry/>



            </div>
            </div>
        </section>
    );
};

export default Filmfilter;