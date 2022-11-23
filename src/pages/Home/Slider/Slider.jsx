import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper";

import "swiper/css";
import "swiper/css/navigation"



const Slider = () => {
    return (
        <section className="slider">

            <Swiper style={{padding:"0 100px"}}
                slidesPerView={"auto"}
                loop={true}
                autoplay={true}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="sliderSwiper"
            >
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="https://mf-static-ssl.more.tv/jackal/4767753/15d53c04-75a9-4029-b211-396bfe1fd5b8_W1920_H771.avif" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="https://mf-static-ssl.more.tv/jackal/4676145/f15bf3a8-6392-4e20-af8f-d36c967e61e7_W1920_H771.avif" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="https://mf-static-ssl.more.tv/jackal/4773917/dda12d53-bfb1-459e-a94c-d485e7da9d6c_W1920_H771.avif" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="https://mf-static-ssl.more.tv/jackal/4778441/b6dff7d0-852a-40fa-a127-b3efd36a0f4d_W1920_H771.avif" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="https://mf-static-ssl.more.tv/jackal/4773977/20cab5bc-86a9-454d-9155-0b2250c3f7bb_W1920_H771.avif" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block swiper-slide-active">
                        <img src="https://mf-static-ssl.more.tv/jackal/4773965/bb46cc72-933b-49fd-aafe-289b73942a68_W1920_H771.avif" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Slider;