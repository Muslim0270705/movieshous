import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css"
import "swiper/css/navigation"
import {Link} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const Slider = ({data,status,error}) => {


    return (
        <section className="slider">
            <Swiper style={{padding:'0' ,maxWidth:"1300px"}}
                slidesPerView={"1"}
                spaceBetween={30}
                navigation={true}
                centeredSlides={true}
                modules={[Navigation]}
                className="sliderSwipers sliderSwiper"
            >
                {
                    status === "loading" ?
                        <SwiperSlide>
                            <div className="skeleton__card">
                                <Skeleton className="skeleton__card-swiper-img" style={{borderRadius: "30px"}}/>
                            </div>
                        </SwiperSlide>
                        : status === "resolve" ?
                            <>
                                {
                                    data?.map((item) =>(
                                        <SwiperSlide key={item.id}>
                                            <Link to={`/film/${item.id}`} style={{color: "white"}} className="films__card">
                                                <div className="slider__block">
                                                    <img src={item.img} alt="" className="slider__block-img"/>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    ))
                                }
                            </>
                            : error
                }



            </Swiper>

        </section>
    );
};

export default Slider;