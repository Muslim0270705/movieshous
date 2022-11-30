import React from 'react';
import Slider from "../Home/Slider/Slider";
import Filmfilter from "./Filmfilter/Filmfilter";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Films = () => {
    const {status,error,data} = useSelector((store) => store.cinema)
    return (
        <>
            <Slider/>
            <Filmfilter/>
            <section className="films">
                <div className="container">
                    <div className="films__row">
                        {
                            data.map((item) => (

                                    <div key={item.id} className="films__card">
                                        <Link to={`/film/${item.id}`} className="films__card" style={{color:"white"}}>
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

                    </div>
                </div>
            </section>
        </>
    );
};

export default Films;