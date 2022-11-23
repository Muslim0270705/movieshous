import React from 'react';
import {Link} from "react-router-dom";
import {RiMovieFill,RiSearchLine} from "react-icons/ri"
const Header = () => {
    return (
        <header className="header">
                <div  className="container">
                        <div className="header__nav">
                            <Link to={"/"}>
                                <h1 className="header__logo">
                                    <RiMovieFill className="header__logo-icon"/>
                                    M-Ramo
                                </h1>
                            </Link>
                            <ul className="header__menu">
                                <li className="header__menu-item"><Link className="header__menu-item">ФИЛЬМЫ</Link></li>
                                <li className="header__menu-item"><Link className="header__menu-item">СЕРИАЛЫ</Link></li>
                                <li className="header__menu-item"><Link className="header__menu-item">МУЛЬТФИЛЬМЫ</Link></li>
                                <li className="header__menu-item"><Link to={"/about"} className="header__menu-item">О НАС</Link></li>
                            </ul>
                            <label className="header__label">
                                <RiSearchLine  className="header__search"/>
                                <input placeholder="Найти" className="header__input" type="text"/>
                            </label>
                            <button type="button" className="header__btn blue">30 дней подписки бесплатно</button>
                            <button type="button" className="header__btn">Войти</button>
                        </div>
                </div>
        </header>
    );
};

export default Header;