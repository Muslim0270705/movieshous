import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteDisLikes, deleteFavorite, getCinema, getDisLikes, getFavorites} from "../../redux/reducers/cinema";
import {Link} from "react-router-dom";

const Ratings = () => {
    const dispatch = useDispatch()
    const {likes,dislikes} = useSelector((store) => store.cinema)

    useEffect(() => {
        dispatch(getCinema())
    }, [])
    return (
        <section className="favorite">
            <div className="container__center">
                <div className="films__row">
                    {
                        likes.data.map((item) => (
                            <div className="favorite__card">

                                <div className="favorite__logo">
                                    <Link to={`/film/${item.id}`} className="favorite__card"
                                          style={{color: "white"}}>
                                        <img className="favorite__img" src={item.logo} alt=""/>
                                    </Link>
                                    <img onClick={() => {
                                        if(likes.data.filter(el => el.id === item.id)?.length){
                                            dispatch(deleteFavorite(item.id))

                                        }
                                        else{
                                            dispatch(getFavorites(item.id))

                                        }}} className="favorite__icon"  src={likes.data.filter(el => el.id === item.id)?.length ? "https://web-static.more.tv/static/icons/like-icon-active.486b3641.svg" : "https://web-static.more.tv/static/icons/like-icon.3066bdac.svg"} alt=""/>

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
                    {
                        dislikes.data.map((item) => (
                            <div className="favorite__card">

                                <div className="favorite__logo">
                                    <Link to={`/film/${item.id}`} className="favorite__card"
                                          style={{color: "white"}}>
                                        <img className="favorite__img" src={item.logo} alt=""/>
                                    </Link>
                                    <img onClick={() => {
                                        if(dislikes.data.filter(el => el.id === item.id)?.length){
                                            dispatch(deleteDisLikes(item.id))
                                        }else{
                                            dispatch(getDisLikes(item.id))
                                        }
                                    }} style={{transform: "rotate(180deg)"}} className="favorite__icon"  src={dislikes.data.filter(el => el.id === item.id)?.length ? "https://web-static.more.tv/static/icons/like-icon-active.486b3641.svg":  "https://web-static.more.tv/static/icons/like-icon.3066bdac.svg"} alt=""/>

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

export default Ratings;