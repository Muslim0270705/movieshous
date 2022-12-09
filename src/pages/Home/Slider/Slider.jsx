import React,{useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css"
import "swiper/css/navigation"
import {getCinema} from "../../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const Slider = () => {
    const dispatch = useDispatch()
    const {status,error,data} = useSelector((store) => store.cinema)
    console.log(data)
    useEffect(() => {
        dispatch(getCinema())
    },[])

    return (
        <section className="slider">
            <Swiper style={{padding:"0 60px 0 60px"}}
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
                            <div className="skeleton__card">
                                <Skeleton className="skeleton__card-swiper-img" style={{borderRadius: "30px"}}/>
                            </div>
                        </SwiperSlide>
                        : status === "resolve" ?
                            <>
                                {
                                    data.map((item) =>(
                                        <SwiperSlide>
                                            <Link to={`/film/${item.id}`} style={{color: "white"}} className="films__card">
                                                <div key={item.id} className="slider__block">
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