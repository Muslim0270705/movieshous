import React, {useState} from 'react';
import Header from "../../Layout/Header/Header";
import {Link} from "react-router-dom";

const Favorites = () => {
    const [active,setActive] = useState("Избранное")
    const userName = JSON.parse(localStorage.getItem("user"))
    return (
        <section className="favorites">
            <Header/>
                <div className="container__small">
                    <div className="favorites__title">
                        <img className="favorites__icon" src="//web-static.more.tv/static/icons/sprite-e0264260.svg#ava-usage" alt=""/>
                        <h3 className="favorites__name">{userName.name}</h3>
                        <p className="favorites__email">{userName.email}</p>
                    </div>
                    <ul className="favorites__menu">
                        <li  className={`${active === "Избранное" ? "favorites__menu__items-active" : "favorites__menu__items"}`}>
                            <Link to={"/favorites"} onClick={() => setActive("Избранное")} className={`${active === "Избранное" ? "favorites__menu__item-active" : "favorites__menu__item"}`}>Избранное</Link>
                        </li>
                        <li  className={`${active === "Оценки" ? "favorites__menu__items-active" : "favorites__menu__items"}`}>
                            <Link to={"/favorites/ratings"} onClick={() => setActive("Оценки")}  className={`${active === "Оценки" ? "favorites__menu__item-active" : "favorites__menu__item"}`}>Оценки</Link>
                        </li>
                        <li  className={`${active === "Подписка" ? "favorites__menu__items-active" : "favorites__menu__items"}`}>
                            <Link  to={"/favorites/subscription"} onClick={() => setActive("Подписка")}  className={`${active === "Подписка" ? "favorites__menu__item-active" : "favorites__menu__item"}`}>Подписка</Link>
                        </li>
                    </ul>
                </div>


        </section>
    );
};

export default Favorites;