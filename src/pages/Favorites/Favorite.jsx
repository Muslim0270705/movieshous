import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteFavorite, getCinema, getFavorites} from "../../redux/reducers/cinema";
import {Link} from "react-router-dom";

const Favorite = () => {
    const dispatch = useDispatch()
    const [favs,setFavs] = useState([])
    const {favorites} = useSelector((store) => store.cinema)
    localStorage.setItem("favs",JSON.stringify(favorites))
    let fav = JSON.parse(localStorage.getItem("fav"))
    return (
        <section className="favorite">
            <div className="container__center">
                <div className="favorite__row">
                    {
                         favorites.data.map((item) => (
                            <div className="favorite__card">

                                    <div className="favorite__logo">
                                        <Link to={`/film/${item.id}`} className="favorite__card"
                                              style={{color: "white"}}>
                                        <img className="favorite__img" src={item.logo} alt=""/>
                                        </Link>
                                        <img onClick={() => {
                                            if(favorites.data.filter(el => el.id === item.id)?.length){
                                                dispatch(deleteFavorite(item.id))
                                            }
                                            else{
                                                dispatch(getFavorites(item.id))
                                            }}}
                                             className="favorite__icon" src={favorites.data.filter(el => el.id === item.id)?.length ? "https://web-static.more.tv/static/icons/added-to-favorites.9491c207.svg" : "https://web-static.more.tv/static/icons/add-to-favorites.a73bfe93.svg"} alt=""/>
                                    </div>
                                    <Link to={`/film/${item.id}`} className="favorite__card"
                                      style={{color: "white"}}>
                                        <h3 className="favorite__title">
                                            {item.title}
                                        </h3>
                                    </Link>
                                    <p className="favorite__desc">
                                        {item.price}
                                    </p>

                            </div>
                            ))

                    }

                </div>

            </div>
        </section>
    );
};

export default Favorite;