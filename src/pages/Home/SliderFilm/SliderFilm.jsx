import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {getCinema} from "../../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";
import "swiper/css";
import "swiper/css/navigation"
const SliderFilm = () => {

    const dispatch = useDispatch()
    const {status,error,data} = useSelector((store) => store.cinema)
    useEffect(() => {
        dispatch(getCinema())
    },[])
    return (
        <>
            <div className="container">
                <h2 className="slider__title">Популярное</h2>
            </div>

            <section className="sliderfilm">

                    <Swiper style={{padding:"0 50px"}}
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
                                <p>LOADING</p>
                                : status === "resolve"
                                    ?
                                    <>
                                        {
                                            data.map((item) =>(

                                                <SwiperSlide >
                                                    <div className="slider__block" key={item.id}>
                                                        <div className="slider__img-box">
                                                            <img  src={item.logo} alt="" className="slider__box-img"/>
                                                        </div>
                                                        <h2 className="sliderfilm__title">{item.title}</h2>
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