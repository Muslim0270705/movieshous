import React from 'react';
import {FaInstagram,} from "react-icons/fa"
import {TiSocialTwitter} from "react-icons/ti"
import {AiOutlineGithub} from "react-icons/ai"
import {ImTelegram} from "react-icons/im"
import {Link} from "react-router-dom";
import {RiMovieFill} from "react-icons/ri";


const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="footer__title">
                Притного просмотра , круглосуточно и в непрерывном режиме
            </h2>
                <div className="">
                    <ul className="footer__menu">
                        <li className="footer__menu-item"><a className="footer__menu-link" href="https://www.instagram.com/mageza0.1/"><FaInstagram className="icon"/></a></li>
                        <li className="footer__menu-item"><a className="footer__menu-link" href="https://twitter.com/home?lang=ru"><TiSocialTwitter className="icon"/></a></li>
                        <li className="footer__menu-item"><a className="footer__menu-link" href="https://github.com/Muslim0270705?tab=repositories"><AiOutlineGithub className="icon"/></a></li>
                        <li className="footer__menu-item"><a className="footer__menu-link" href="https://t.me/+NBV4Yp4nQipkNjc6"><ImTelegram className="icon"/></a></li>
                    </ul>
                    <ul className='footer__menu'>
                        <li className="footer__menu-item-info"><Link to={"/about"} className="footer__menu-item-info">О нас</Link></li>
                        <li className="footer__menu-item-info"><Link to={"/contact"} className="footer__menu-item-info">Контакты</Link></li>
                        <li className="footer__menu-item-info"><Link to={"/about-us"} className="footer__menu-item-info">Партнеры</Link></li>
                        <li className="footer__menu-item-info"><Link to={"/questions"} className="footer__menu-item-info">Вопросы и Ответы</Link></li>
                    </ul>
                    <ul className='footer__menu'>
                        <li className="footer__menu-item-info"><Link to={"/vacancies"} className="footer__menu-item-info grey">Вакансии</Link></li>
                        <li className="footer__menu-item-info"><a className="grey" href="https://moretv.digift.ru/">Подарочный сертификат</a></li>
                        <li className="footer__menu-item-info"><Link className="footer__menu-item-info grey">Карта сайта</Link></li>
                    </ul>
                    <ul className='footer__menu'>
                        <li className="footer__menu-item-info"><Link to={"/trems"} className="footer__menu-item-info grey">Пользовательское соглашение</Link></li>
                        <li className="footer__menu-item-info"><Link to={"/confidentiality"} className="footer__menu-item-info grey">Политика конфиденциальности</Link></li>
                    </ul>
                </div>

                <div className="container">
                    <div className="footer__bottom">
                        <p className="footer__bottom-desc">© 2018-2022  <br/>
                            ООО «М3»</p>
                        <Link to={"/"}>
                            <h1 className="header__logo">
                                <RiMovieFill className="header__logo-icon"/>
                                M-Ramo
                            </h1>
                        </Link>
                        <div className="footer__bottom-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 40"><g fill="none"><path stroke="#8F8F8F" stroke-width="1.5" d="M54.25 39.25V.75H.75v38.5h53.5z"></path><path fill="#8F8F8F" d="M18.312 28.54c.258.001.514.034.762.1.25.063.48.192.663.372.196.207.296.487.274.77v2.291c-.01.162.01.324.063.478a.33.33 0 00.187.18l-.006.155H19.05a2.325 2.325 0 01-.106-.502 2.518 2.518 0 01-.574.447c-.25.123-.528.18-.806.167-.215 0-.428-.044-.625-.13a1.103 1.103 0 01-.481-.41 1.232 1.232 0 01-.181-.69 1.397 1.397 0 01.156-.682c.1-.185.25-.34.431-.447.193-.11.405-.185.625-.217l1.018-.168c.262-.037.394-.149.394-.335a.392.392 0 00-.213-.404 1.326 1.326 0 00-.525-.093.628.628 0 00-.512.168.797.797 0 00-.175.422h-1.068c.015-.34.132-.666.337-.938.171-.208.402-.36.663-.434.295-.075.6-.108.905-.1zm4.46 0c.278.002.552.05.813.143.279.1.525.274.712.503.219.28.343.62.356.975h-1.15a.704.704 0 00-.228-.496.718.718 0 00-.515-.187.75.75 0 00-.525.186.994.994 0 00-.28.46 2.047 2.047 0 00-.082.577c.004.212.025.424.063.633l-.007.007c.03.19.112.368.238.515.146.16.358.244.574.23a.689.689 0 00.431-.13.796.796 0 00.25-.311.736.736 0 00.081-.31h1.137a2.007 2.007 0 01-.112.477 1.84 1.84 0 01-.306.54c-.17.198-.384.353-.625.454-.6.247-1.274.247-1.874 0a1.597 1.597 0 01-.625-.503 2.017 2.017 0 01-.312-.677 3.018 3.018 0 01-.094-.739c-.01-.423.062-.845.213-1.241.146-.342.4-.628.724-.814a2.095 2.095 0 011.144-.291zm-11.094-1.372l-2.074 4.756a1.791 1.791 0 01-.375.571v.007a1.836 1.836 0 01-.468.353.903.903 0 01-.381.118c-.267.01-.535-.02-.794-.087v-1.024c.128.06.266.091.407.093a.568.568 0 00.518-.31v-.05l-2.399-4.414h1.43l1.594 3.179 1.168-3.192h1.374zm.906 1.478v1.366c0 .38.244.571.73.571.166-.004.329-.037.482-.1.13-.045.257-.1.38-.16v-1.677h1.12v4.24h-1.12v-1.75c-.17.091-.348.172-.53.242-.232.096-.48.147-.731.149a1.52 1.52 0 01-1.062-.354 1.453 1.453 0 01-.387-1.124v-1.403h1.118zm16.18 0l-.032.9h-1.25v3.34h-1.136V29.54h-1.25v-.894h3.667zm1.699 0v1.67h1.592v-1.67h1.119v4.24h-1.119V31.21h-1.592v1.676h-1.119v-4.24h1.119zm4.835 0v2.546l1.511-2.546h1.2v4.24H36.89v-2.545l-1.518 2.545h-1.194v-4.24h1.119zm4.835 0v1.608l1.405-1.608h1.4l-1.531 1.64 1.593 2.6h-1.38l-1.05-1.812-.462.478v1.334h-1.094v-4.24h1.119zM18.912 30.82a1.84 1.84 0 01-.762.23c-.136.022-.27.057-.4.105a.585.585 0 00-.262.187.544.544 0 00-.1.347.452.452 0 00.162.385.58.58 0 00.363.124c.166 0 .33-.036.48-.105a.929.929 0 00.375-.292.702.702 0 00.144-.44v-.541zM12.372 7.5c2.573 0 4.222.82 5.234 1.906V7.953h3.343v9.232l4.216-4.787h4.098l-4.479 4.899 4.598 7.773h-4.004l-3.036-5.439-1.393 1.435v4.004h-3.336v-.931a8.618 8.618 0 01-4.767 1.36c-6.247 0-7.346-3.602-7.346-5.719h3.436c0 .963.518 2.776 3.648 2.776 1.705 0 3.604-.423 3.604-2.217 0-1.34-1.305-1.67-3.13-2.117l-3.46-.857c-2.443-.59-3.842-2.024-3.842-4.613C5.756 10.89 6.8 7.5 12.372 7.5zm-.263 2.93c-1.374 0-3.01.516-3.01 2.05 0 1.34 1.111 1.626 1.823 1.787l4.192 1.012a9.685 9.685 0 012.499.925V13.02h-2c-.093-.776-.38-2.589-3.504-2.589z"></path></g></svg>
                        </div>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;