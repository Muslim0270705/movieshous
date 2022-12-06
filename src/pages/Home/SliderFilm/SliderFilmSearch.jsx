import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {changeSearch, getSearch} from "../../../redux/reducers/filmsearch";
import {useDispatch, useSelector} from "react-redux";
import "swiper/css";
import "swiper/css/navigation"
import {Link} from "react-router-dom";
const SliderFilmAdventure= (setSearch) => {

    const dispatch = useDispatch()
    const {status,error,data,filter} = useSelector((store) => store.search)
    const handleChange = (e) => {
        dispatch(changeSearch(e.target.value))
    }
    useEffect(()=>{
        dispatch(getSearch({
            ...filter,
        }))
    },[filter])
    console.log(filter.search)
    return (
        <>
            <div className="overlay__search">
                <div className="container">

                    <input style={{marginLeft: "30px"}} onChange={handleChange} className="popup__search" placeholder="Поиск" type="text"/>
                </div>
            </div>
            <div className="container">

                <h2 className="slider__title" style={{marginLeft: "30px"}}>{filter.search.length ?`Результаты по этому поиску ${data.length}` : "Сейчас ищут"}</h2>


            <section className="sliderfilmsearch">

                <Swiper style={{padding:"0 100px 0 0 ",height:"280px"}}
                        slidesPerView={6}
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

                                        data.map((item) =>
                                            <>
                                                <SwiperSlide onClick={() => setSearch(false)} >
                                                    <Link to={`/film/${item.id}`} style={{color: "white"}} className="films__card">
                                                        <div className="slider__block" >
                                                            <div className="slider__img-box" style={{height:"206px"}}>
                                                                <img  src={item.logo} alt="" className="slider__box-img"/>
                                                            </div>
                                                            <h2  style={{marginLeft: "10px"}} className="sliderfilm__title">{item.title}</h2>
                                                            <p style={{marginLeft: "10px"}} className="sliderfilm__desc grey">{item.price}</p>
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            </>
                                        )}
                                </>



                                : error

                    }

                </Swiper>

            </section>
            </div>
        </>


    );
};

export default SliderFilmAdventure;