import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {deleteFavorite,getFavorites} from "../../../redux/reducers/cinema";
import {useDispatch} from "react-redux";
import "swiper/css";
import {Link} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const SliderFilmFrance = ({data,status,error,favorites}) => {

    const dispatch = useDispatch()
    let contentFilm = []
    const FilterUsa = (baza) => {
        baza.map((item) => {
            item.country.flat().filter((el)=>{
                if (el.desc === 'США'){
                    contentFilm = [...contentFilm,item]
                }
                else {
                    return contentFilm
                }
            })
        })
        return contentFilm
    }
    FilterUsa(data)
    return (
        <>
            <section className="sliderfilmfrance">

                <Swiper
                        slidesPerView={5}
                        autoplay={true}
                        spaceBetween={30}
                        interval={3000}
                        className="sliderSwiper sliderfrance"
                >
                    {
                        status === "loading"
                            ?
                            Array(6).fill(0).map((item,idx) =>(
                                <SwiperSlide className='swiper__card'>
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

                                        contentFilm.map((item) =>
                                            <SwiperSlide key={item.id} className="swiper__card">
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
                                        )}
                                </>



                                : error

                    }

                </Swiper>

            </section>
        </>


    );
};

export default SliderFilmFrance;