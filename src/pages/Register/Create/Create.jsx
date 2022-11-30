import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {RiMovieFill} from "react-icons/ri";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";
import {loginAccount} from "../../../redux/reducers/users";
import {useDispatch} from "react-redux";

const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        reset,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm({mode:"onBlur"})
    const onSubmit = (data) => {
        axios.post("/register",data)
            .then(resolve => {
                dispatch(loginAccount({
                    ...resolve.data.user,
                    token: resolve.data.accessToken
                }))
                navigate('/')
                localStorage.setItem("user", JSON.stringify({
                    ...resolve.data.user,
                    token: resolve.data.accessToken
                }) )
            }).catch((error) => alert(error))
    }
    return (
        <section className="register">
            <div className="input__link">
                <Link to={"/"}>
                    <h1 className="header__logo">
                        <RiMovieFill className="header__logo-icon"/>
                        M-Ramo
                    </h1>
                </Link>
                <Link to={"/"}>
                    <img className="input__close" src="https://web-static.more.tv/static/icons/PageHeader_close-icon.fd447d32.svg" alt=""/>
                </Link>
            </div>
            <div className="input__popup popup">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <h2 className="input__title" style={{whiteSpace: "nowrap" , margin:"0 0 300px"}}>
                        Придумай пароль для входа <br/>
                        на любом устройстве
                    </h2>
                    <div className="input__popup">
                        <label htmlFor="">
                            <input {...register('password', {
                                required: {
                                    message: "Пароль обязателен к заполнению",
                                    value: true
                                },
                                pattern: {
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                    message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                                }
                            })} type="password" placeholder="Придумайте пароль" className="input__input"/>
                            <p className='register__form-error'>
                                {errors.password && errors.password?.message}
                            </p>
                        </label>


                            <button className="input__btn" type='button'>Создать аккаунт</button>

                        <div className="input__reg">
                            <p className="input__register">Использовать соцсеть</p>
                            <Link to={"/input"} className="input__register">У меня есть аккаунт</Link>
                        </div>

                    </div>
                </form>

            </div>

        </section>
    );
};

export default Create;