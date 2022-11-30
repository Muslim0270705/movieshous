import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {RiMovieFill} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {loginAccount} from "../../redux/reducers/users";

const Input = () => {
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
        axios.post("/login",data)
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
        <section className='input'>
            <div className="input__popup">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <h2 className="input__title">
                        Вход на more.tv
                    </h2>
                    <label htmlFor="">
                        <input {...register('email',{
                            required: {
                                message: 'Email обязательно к заполнению',
                                value: true
                            },
                            minLength: {
                                message: 'Минимум 10 символа',
                                value: 10
                            },
                            pattern: {
                                message: 'Напишите правильно свой email',
                                value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                            }

                        })} type="email"  placeholder="Email" className="input__input"/>
                        <p className='register__form-error'>
                            {errors.email && errors.email?.message}
                        </p>
                    </label>
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
                        })} type="password" placeholder="Пароль" className="input__input"/>
                        <p className='register__form-error'>
                            {errors.password && errors.password?.message}
                        </p>
                    </label>


                    <div className="input__reg">
                        <p className="input__register">Не помню пароль</p>
                        <Link to={"/register"} className="input__register">Создать акаунт</Link>
                    </div>
                    <button className="input__btn" type={'submit'}>Войти</button>
                </form>
            </div>


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


        </section>
    );
};

export default Input;