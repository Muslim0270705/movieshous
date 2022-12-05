import React,{useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css"
import "swiper/css/navigation"
import {getCinema} from "../../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";




const Slider = () => {
    const dispatch = useDispatch()
    const {status,error,data} = useSelector((store) => store.cinema)
    console.log(data)
    useEffect(() => {
        dispatch(getCinema())
    },[])

    return (
        <section className="slider">
            <Swiper style={{padding:"0 60px"}}
                slidesPerView={"auto"}
                autoplay={true}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="sliderSwiper"
            >
                {
                    status === "loading" ?
                        <SwiperSlide>
                            <div style={{background:"grey"}} className="slider__block grey">
                                <img src="" alt="" className="slider__block-img grey"/>
                            </div>
                        </SwiperSlide>
                        : status === "resolve" ?
                            <>
                                {
                                    data.map((item) =>(
                                        <SwiperSlide>
                                            <div key={item.id} className="slider__block">
                                                <img src={item.img} alt="" className="slider__block-img"/>
                                            </div>
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