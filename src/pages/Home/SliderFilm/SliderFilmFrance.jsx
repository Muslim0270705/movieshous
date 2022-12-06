import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {getCinema} from "../../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";
import "swiper/css";
import "swiper/css/navigation"
const SliderFilmFrance = () => {

    const dispatch = useDispatch()
    const {status,error,data,genre} = useSelector((store) => store.cinema)
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
                                            <>
                                                <SwiperSlide >
                                                    <div className="slider__block" >
                                                        <div className="slider__img-box">
                                                            <img  src={item.logo} alt="" className="slider__box-img"/>
                                                        </div>
                                                        <h2 className="sliderfilm__title">{item.title}</h2>
                                                        <p className="sliderfilm__desc grey">{item.price}</p>
                                                    </div>
                                                </SwiperSlide>
                                            </>
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