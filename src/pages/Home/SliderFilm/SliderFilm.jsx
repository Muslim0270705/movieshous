import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {deleteFavorite,getFavorites} from "../../../redux/reducers/cinema";
import {useDispatch} from "react-redux";
import "swiper/css";
import "swiper/css/navigation"
import {Link} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const SliderFilm = ({status,error,data,favorites}) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="container">
                <h2 className="slider__title">Популярное</h2>
            </div>

            <section className="sliderfilm">

                    <Swiper
                        slidesPerView={5}
                        autoplay={true}
                        spaceBetween={30}
                        navigation={true}

                        modules={[Navigation]}
                        className="sliderSwiper"
                    >
                        {
                            status === "loading"

                                ?
                                Array(6).fill(0).map((item,idx) =>(
                                    <SwiperSlide>
                                        <div className="skeleton__card">
                                            <Skeleton className="skeleton__card-img"/>
                                            <Skeleton count={1} width="50%"/>
                                            <Skeleton count={1} width="40%"/>
                                        </div>
                                    </SwiperSlide>
                                ))




                                : status === "resolve"
                                    ?
                                    <>
                                        {
                                            data?.map((item) =>(
                                                <SwiperSlide key={item.id}>
                                                        <div className="slider__block" >
                                                            <div className="slider__img-box">
                                                                <Link to={`/film/${item.id}`} style={{color: "white"}} className="films__card">

                                                                <img  src={item.logo} alt="" className="slider__box-img"/>
                                                                </Link>
                                                                <img onClick={() => {
                                                                    if(favorites.data.filter(el => el.id === item.id)?.length){
                                                                        dispatch(deleteFavorite(item.id))
                                                                        console.log(1)
                                                                    }
                                                                    else{
                                                                        dispatch(getFavorites(item.id))
                                                                        console.log(0)
                                                                    }}}
                                                                     className="slider__icon" src={favorites.data.filter(el => el.id === item.id)?.length ? "https://web-static.more.tv/static/icons/added-to-favorites.9491c207.svg" : "https://web-static.more.tv/static/icons/add-to-favorites.a73bfe93.svg"} alt=""/>
                                                            </div>
                                                            <Link to={`/film/${item.id}`} style={{color: "white"}} className="films__card">

                                                                <h2 className="sliderfilm__title">{item.title}</h2>
                                                            </Link>
                                                            <p className="sliderfilm__desc grey">{item.price}</p>
                                                        </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </>



                                    : error

                        }

                    </Swiper>

            </section>
        </>


    );
};

export default SliderFilm;