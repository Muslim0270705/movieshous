import React, {useState} from 'react';
import FilmsYear from "./FilmsYear";
import FilmsSort from "./FilmsSort";
import FilmsContent from "./FilmsContent";
import {useSelector} from "react-redux";
import FilmsCountry from "./FilmsCountry";

const Filmfilter = () => {
    const [active,setActive] = useState('')
    const {data} = useSelector((store) => store.cinema)
    return (
        <section className="filmfilter">
            <div className="container">
            <div className="filmfilter__row">

                    <div className='filmfilter__block-btn'>
                        <button onClick={() => setActive("Все")} type={"button"} className={`${active === "Все" ? "filmfilter__btn-active" : "filmfilter__btn"}`}>Все</button>
                        <button onClick={() => setActive("Бесплатные")} type={"button"} className={`${active === "Бесплатные" ? "filmfilter__btn-active" : "filmfilter__btn"}`}>Бесплатные</button>
                        <button onClick={() => setActive("По подписке")} type={"button"} className={`${active === "По подписке" ? "filmfilter__btn-active" : "filmfilter__btn"}`}>По подписке</button>
                    </div>
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