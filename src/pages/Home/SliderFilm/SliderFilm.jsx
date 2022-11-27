import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation"
import {getCinema} from "../../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";

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

                    <Swiper style={{padding:"0  80px"}}
                        slidesPerView={4}
                        loop={true}
                        autoplay={true}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="sliderSwiper"
                    >
                        {
                            status === "loading" ? <img src="data:image/jpeg;base64,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" alt=""/>
                                : status === "resolve" ?
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