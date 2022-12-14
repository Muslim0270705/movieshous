import React, {useEffect} from 'react';
import Filmfilter from "./Filmfilter/Filmfilter";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getCinema} from "../../redux/reducers/cinema";
import FilmsSkeletonCard from "../FilmsSkeletonCard";
import 'react-loading-skeleton/dist/skeleton.css'
import Slider from "../Home/Slider/Slider";
const Films = () => {
    const dispatch = useDispatch()
    const {status, error, data, filter, content,genre,country} = useSelector((store) => store.cinema)
    useEffect(() => {
        dispatch(getCinema({
            ...filter,
            status: JSON.parse(localStorage.getItem('user')) !== null ? 'Подписка' : 'Бесплатно'
        }))
    }, [filter])

    let contentFilm = []

    const FilterContent = (baz) => {
        baz.map((item) => {
            item.content.flat().filter((el)=>{
                if (el.desc === content){
                    contentFilm = [...contentFilm,item]
                }
                else {
                    return contentFilm
                }
            })
        })
        return contentFilm
    }
    FilterContent(data)
    const FilterGenre = (baz) => {
        baz.map((item) => {

            item.genre.flat().filter((el)=>{
                if (el.desc === genre){
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
    const FilterCountry = (baz) => {

        baz.map((item) => {

            item.country.flat().filter((el)=>{
                if (el.desc === country){
                    contentFilm = [...contentFilm,item]
                }
                else {
                    return contentFilm
                }
            })



        })
        return contentFilm
    }
    FilterCountry(data)
    return (
        <>
            {/*<Slider />*/}
            <Slider data={data} status={status} error={error}/>
            <Filmfilter/>

            <section className="films">
                <div className="container">
                    <div className="films__row">
                        {
                            status === "loading" ?
                                    <FilmsSkeletonCard card={31}/>
                                : status === "resolve"
                                    ?
                                    <>
                                        {
                                            content?.length || genre?.length || country?.length ?
                                                contentFilm.map((item) => (
                                                    <div className="films__card">
                                                        <Link to={`/film/${item.id}`} className="films__card"
                                                              style={{color: "white"}}>
                                                            <div className="films__logo">
                                                                <img className="films__img" src={item.logo} alt=""/>
                                                            </div>
                                                            <h3 className="films__title">
                                                                {item.title}
                                                            </h3>
                                                            <p className="films__desc">
                                                                {item.price}
                                                            </p>
                                                        </Link>
                                                    </div>
                                                ))

                                                :
                                                data.map((item) => (
                                                    <div className="films__card">
                                                        <Link to={`/film/${item.id}`} className="films__card"
                                                              style={{color: "white"}}>
                                                            <div className="films__logo">
                                                                <img className="films__img" src={item.logo} alt=""/>
                                                            </div>
                                                            <h3 className="films__title">
                                                                {item.title}
                                                            </h3>
                                                            <p className="films__desc">
                                                                {item.price}
                                                            </p>
                                                        </Link>
                                                    </div>
                                                ))
                                        }
                                    </>



                                    : error

                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Films;