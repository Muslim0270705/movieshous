import React, {useEffect, useState} from 'react';
import {IoIosArrowForward} from "react-icons/io";
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getOneFilm} from "../redux/reducers/getOneFilm";
import {getCinema, getLikes,deleteLikes} from "../redux/reducers/cinema";

const Film = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const {data,likes} = useSelector((store) => store.cinema)
    const {status, error,product} = useSelector((store) => store.onefilms);
    let genreData = data.map((item) => item.genre ).flat().filter((item,idx,arr) => arr.map(item => item.desc).indexOf(item.desc) === idx)
    useEffect(() => {
        dispatch(getOneFilm(params.id))
    },[]);
    return (
        <section className='film'>
            <div className="container-partner">
                <h3 className="about__title">
                    Главная  <IoIosArrowForward/>  Фильм  <IoIosArrowForward/> {product.title}
                </h3>
                <div className="film__name">
                    <h2 className="film__title">
                        {product.title} смотреть онлайн    <span className="grey">{product.age}+</span>

                    </h2>
                    <img onClick={() => {
                        if(likes.data.filter(item => item.id === product.id).length){
                            dispatch(deleteLikes(product.id))
                        }else{
                            dispatch(getLikes(product.id))
                        }
                    }} src="https://web-static.more.tv/static/icons/like-icon.3066bdac.svg" alt=""/>
                </div>


            </div>
            <div className="film__block-img">

                        <div className="film__vd">
                                <iframe className="film__video" width="964" height="543" allow="encrypted-media" allowFullScreen="true" gesture="media"
                                src={product.video}></iframe>
                        </div>




            </div>

            <div className="film__category">
                <div className="container-partner">
                    <div className="film__row">
                        <div className="film__category-logo">
                            <img className="film__category-img" src={product.logo} alt=""/>
                        </div>
                        <div className="film__fill">
                            <ul className="film__menu">
                                <li className="film__menu-item"><h3 className="film__menu-title">Год:</h3>

                                                <div>
                                                    <Link>
                                                        <button className="film__year">{product.year}</button>
                                                    </Link>
                                                </div>

                                </li>
                                <li className="film__menu-item"><h3 className="film__menu-title">Страна:</h3>
                                    {
                                       product.country && product.country.map((item) => (
                                                <div key={item.id}>
                                                    <Link to={'/'}>
                                                        <button className="film__year">{item.desc}</button>
                                                    </Link>
                                                </div>
                                        ))

                                    }
                                </li>
                                <li className="film__menu-item"><h3 className="film__menu-title">Жанр:</h3>
                                    {
                                        product.genre && product.genre.map((item) => (
                                            <div key={item.id}>
                                                <Link to={'/'}>
                                                    <button className="film__year">{item.desc}</button>
                                                </Link>
                                            </div>
                                        ))

                                    }
                                </li>
                                <li className="film__menu-item"><h3 className="film__menu-title">Содержание:</h3>

                                    {
                                        product.content && product.content.map((item) => (
                                            <div key={item.id}>
                                                <Link to={'/'}>
                                                    <button className="film__year">{item.desc}</button>
                                                </Link>
                                            </div>
                                        ))

                                    }
                                </li>
                                <li className="film__menu-item"><h3 className="film__menu-title">Стоимость:</h3>
                                    <div>
                                        <Link to={'/'}>
                                            <button className="film__year">{product.price}</button>
                                        </Link>
                                    </div>
                                </li>
                                <li className="film__menu-item"><h3 className="film__menu-title">Возраст:</h3>
                                    <div>
                                        <Link to={'/'}>
                                            <button className="film__year">{product.age}+</button>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <p className="film__desc">{product.desc}</p>

                </div>
            </div>
            <div className="film__actor">
                <div className="container-partner">
                    <div className="film__actor-info">
                        <h3 className="film__actor-title">
                            Создатели и актеры
                        </h3>
                        <span className="film__actor-subtitle">Фильма {product.title} <img className="film__actor-icon" src="https://web-static.more.tv/static/icons/linkArrow.77bb4936.svg" alt=""/></span>
                    </div>
                    <div className="film__actor-row">
                        {
                            product.actors && product.actors.map((item)=>(
                                <div className="film__actor-card" key={item.id}>
                                    <div className="film__actor-box">
                                        <img className="film__actor-img" src={item.img} alt=""/>
                                    </div>
                                    <h3 className="film__actor-name">{item.actor}</h3>
                                    <p className="film__actor-nick">{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="film__genre">
                        <h2 className="film__genre-title">
                            Фильм в подборках
                        </h2>
                        <div className="film__genre-row">
                            {
                                genreData.map((item) => (
                                    <button className="film__genre-btn">{item.desc}
                                    </button>
                                    )
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Film;