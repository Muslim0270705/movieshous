import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {deleteFavorite, getCinema, getFavorites} from "../../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";
import "swiper/css";
import {Link} from "react-router-dom";
const SliderFilmFrance = () => {

    const dispatch = useDispatch()
    const {status,error,data,favorites} = useSelector((store) => store.cinema)
    useEffect(() => {
        dispatch(getCinema())
    },[])
    let contentFilm = []
    const FilterGenre = (baz) => {
        baz.map((item) => {
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
    FilterGenre(data)
    return (
        <>
            <section className="sliderfilmfrance">

                <Swiper style={{padding:"0 100px 0 0 "}}
                        slidesPerView={5}
                        autoplay={true}
                        spaceBetween={30}
                        interval={3000}
                        className="sliderSwiper"
                >
                    {
                        status === "loading"
                            ?
                            <p>LOADING</p>
                            : status === "resolve"
                                ?
                                <>
                                    {

                                        contentFilm.map((item) =>
                                            <SwiperSlide >
                                                <div className="slider__block" key={item.id}>
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