import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {BsHouseDoor} from "react-icons/bs"
import {AiOutlineYoutube} from "react-icons/ai"
import {IoPersonOutline} from "react-icons/io5"

import {RiMovieFill,RiSearchLine} from "react-icons/ri"
import {useDispatch, useSelector} from "react-redux";
import {logOutAccount} from "../../redux/reducers/users";
import {changeCategory} from "../../redux/reducers/cinema";
import SliderFilmSearch from "../../pages/Home/SliderFilm/SliderFilmSearch";
const Header = () => {
    const {user} = useSelector((store) => store.users)
    const dispatch = useDispatch()
    const [categoryState,setCategoryState] = useState("")
    const [active,setActive] = useState(false)
    const [fix,setFix] = useState('/')
    const [search,setSearch] = useState(false)
    useEffect( () => {
        dispatch(changeCategory(categoryState)
        )
    },[categoryState])
    const userName = localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : ''
    return (
        <header className="header">
            <div style={{display: search ? "block" : "none"}} className="overlay">
                    <div className="popup">
                        <img onClick={() => setSearch(!search)}  className="overlay__close" src="//web-static.more.tv/static/icons/sprite-e0264260.svg#close-usage" alt=""/>
                        <SliderFilmSearch props={setSearch}/>
                    </div>
            </div>
            <div  className="container">
                        <div className="header__nav">
                            <Link to={"/"}>
                                <h1 className="header__logo">
                                    <RiMovieFill className="header__logo-icon"/>
                                    M-Ramo
                                </h1>
                            </Link>

                            <ul className="header__menu">
                                <li onClick={() => setCategoryState("films")}  className="header__menu-item"><Link to={"/content"} className="header__menu-item">????????????</Link></li>
                                <li onClick={() => setCategoryState("series")}  className="header__menu-item"><Link to={"/content"} className="header__menu-item">??????????????</Link></li>
                                <li onClick={() => setCategoryState("cartoons")}  className="header__menu-item"><Link to={"/content"} className="header__menu-item">??????????????????????</Link></li>
                                <li className="header__menu-item"><Link to={"/about"} className="header__menu-item">?? ??????</Link></li>
                                {
                                    userName.email === 'magezamuslim40@gmail.com' ? <li className='header__item'><Link className='header__menu-item' to={"/clothes"}> Admin Panel </Link> </li> : ''
                                }
                            </ul>

                            <label className="header__label">
                                <RiSearchLine  className="header__search"/>
                                <input onClick={() => setSearch(!search)} placeholder="??????????" className="header__input" type="text" />
                            </label>

                            {
                                user.email.length ?

                                    <div className="header__menu-exit " onClick={() => setActive(!active)}>
                                        <div className="header__exit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30"
                                                 className="header__exit-icon">
                                                <g stroke="#fff" transform="translate(.449)" fill="none" fill-rule="evenodd">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                          d="M20.5 20.75c0-2.485-2.462-4.5-5.5-4.5s-5.5 2.015-5.5 4.5"></path>
                                                    <circle cx="15" cy="11.5" r="2.75" stroke-width="1.5"></circle>
                                                    <rect width="28" height="28" x="1" y="1" stroke-width="2" rx="12"></rect>
                                                </g>

                                            </svg>
                                            <img  style={{transform: active ? "rotate(180deg)" : "rotate(0)"}}  className='header__exit-ac' src="//web-static.more.tv/static/icons/sprite-e0264260.svg#Button_more-usage" alt=""/>
                                        </div>
                                        <div style={{display: active ? "block" : "none"}} className='header__exit-accordion'>
                                            <div className="header__exit-box">
                                                <div className="header__exit-box-name">
                                                    <h3 className="header__exit-box-name-title">{userName.name}</h3>
                                                    <p className="header__exit-box-name-email">{userName.email}</p>
                                                </div>
                                                <div className="header__exit-box-img">
                                                    <img onClick={() =>{
                                                        dispatch(logOutAccount())
                                                        localStorage.removeItem("user")
                                                    }} className="header__exit-img" src="//web-static.more.tv/static/icons/sprite-e0264260.svg#logout-usage" alt=""/>
                                                </div>
                                            </div>
                                            <ul className="header__exit-accordion-menu">
                                                <li  className="header__exit-accordion-menu-item">
                                                    <Link className="header__exit-accordion-menu-item" to={"/favorites"}>
                                                        ??????????????????
                                                    </Link>
                                                </li>
                                                <li className="header__exit-accordion-menu-item">
                                                    ????????????????
                                                </li>
                                                <li className="header__exit-accordion-menu-item">
                                                    ????????????
                                                </li>
                                            </ul>
                                        </div>
                                    </div>




                                    :
                                    <>
                                        <button type="button" className="header__btn"><Link style={{color:"white"}} to={"/input"}>??????????</Link></button>
                                    </>

                            }
                            <ul className="header__menu-bottom">
                                <li onClick={() => setFix("/")} style={{color: fix === "/" ? "white":""}} className="header__menu-bottom-item">
                                    <Link to={'/'}  className="header__menu-bottom-item-desc">
                                        <BsHouseDoor className="header__menu-bottom-item-icon"/>
                                        ??????????????
                                    </Link>
                                </li>
                                <li onClick={() => setFix("catalog")} style={{color: fix === "catalog" ? "white":""}} className="header__menu-bottom-item">
                                    <Link to={"/content"} className="header__menu-bottom-item-desc">
                                        <AiOutlineYoutube className="header__menu-bottom-item-icon"/>
                                        ??????????????
                                    </Link>
                                </li>
                                <li onClick={() => setFix("person")} style={{color: fix === "person" ? "white":""}} className="header__menu-bottom-item">
                                    <Link to={"/favorites"} className="header__menu-bottom-item-desc">
                                        <IoPersonOutline className="header__menu-bottom-item-icon"/>
                                        ??????????????
                                    </Link>
                                </li>
                            </ul>
                        </div>
            </div>
        </header>
    );
};

export default Header;