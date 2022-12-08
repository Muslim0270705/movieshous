import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteFavorite, getCinema, getFavorites} from "../../redux/reducers/cinema";
import {Link} from "react-router-dom";

const Favorite = () => {
    const dispatch = useDispatch()
    const {favorites} = useSelector((store) => store.cinema)

    useEffect(() => {
        dispatch(getCinema())
    }, [])
    console.log(favorites)
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
                                                console.log(1)
                                            }
                                            else{
                                                dispatch(getFavorites(item.id))
                                                console.log(0)
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