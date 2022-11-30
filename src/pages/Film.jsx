import React,{useEffect} from 'react';
import {IoIosArrowForward} from "react-icons/io";
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getOneFilm} from "../redux/reducers/getOneFilm";
const Film = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const {status, error,product} = useSelector((store) => store.onefilms);
    useEffect(() => {
        dispatch(getOneFilm(params.id))

    },[]);
    return (
        <section className='film'>
            <div className="container-partner">
                <h3 className="about__title">
                    Главная  <IoIosArrowForward/>  Фильм  <IoIosArrowForward/> {product.title}
                </h3>
            </div>
        </section>
    );
};

export default Film;