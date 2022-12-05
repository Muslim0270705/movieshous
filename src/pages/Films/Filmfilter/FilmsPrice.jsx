import React from 'react';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changePrice} from "../../../redux/reducers/cinema";

const FilmsPrice = () => {
    const [priceState,setPriceState] = useState('')
    const dispatch = useDispatch()
    const {data} = useSelector((store) => store.cinema)
    useEffect(() => {
        dispatch(changePrice(priceState))
    }, [priceState])
    return (
        <div className='filmfilter__block-btn'>
            <button onClick={() => setPriceState("")} type={"button"} className={`${priceState === "" ? "filmfilter__btn-active" : "filmfilter__btn"}`}>Все</button>
            <button onClick={() => setPriceState("Бесплатно")} type={"button"} className={`${priceState === "Бесплатно" ? "filmfilter__btn-active" : "filmfilter__btn"}`}>Бесплатные</button>
            <button onClick={() => setPriceState("Подписка")} type={"button"} className={`${priceState === "Подписка" ? "filmfilter__btn-active" : "filmfilter__btn"}`}>По подписке</button>
        </div>
    );
};

export default FilmsPrice;