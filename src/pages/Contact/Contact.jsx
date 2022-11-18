import React from 'react';
import {IoIosArrowForward} from "react-icons/io";

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="about__row">
                    <h3 className="about__title ">
                        Главная  <IoIosArrowForward/> Контакты
                    </h3>
                    <h2 className="contact__title">
                        Контакты
                    </h2>
                    <p className="about__desc grey">
                        Мы открыты для сотрудничества и любых вопросов, связанных с коммерческой деятельностью и работой компании.
                    </p>
                    <div className="contact__info ">
                        <h3 className="contact__info-title">Адрес:</h3>
                        <p className="about__desc grey">ООО «М3», 117105, Москва, Варшавское ш., 9, стр. 1, БЦ «Даниловская мануфактура», корпус «Мещерин»</p>
                        <p className="about__desc grey">Общий адрес: 121205, город Москва, территория Сколково инновационного центра, Луговая ул., д. 4 к. 5, этаж 3 помещ. 3-7</p>
                        <p className="about__desc grey">Поддержка пользователей: </p>
                    </div>
                    <div className="contact__info ">
                        <h3 className="contact__info-title">Размещение рекламы и реализация специальных проектов:</h3>
                        <p className="about__desc grey">Сейлз-хаус ЭВЕРЕСТ</p>
                        <p className="about__desc grey"><a className="about__desc grey" href="https://everest-sales.ru/">https://everest-sales.ru/</a></p>
                        <p className="about__desc grey"><a className="about__desc grey" href="https://github.com/Phantather/cinema/blob/master/db.json">magezamuslim@gmail.com</a></p>
                    </div>
                    <div className="contact__info ">
                        <h3 className="contact__info-title">Сотрудничество в области маркетинга:</h3>
                        <p className="about__desc grey"><a className="about__desc grey" href="mailto: marketing@more.tv">marketing@more.tv</a></p>

                    </div>
                    <div className="contact__info ">
                        <h3 className="contact__info-title">Связи с общественностью и подписка на наши новости:</h3>
                        <p className="about__desc grey"><a className="about__desc grey" href="mailto: pr@more.tv">pr@more.tv</a></p>

                    </div>
                    <div className="contact__info ">
                        <h3 className="contact__info-title">Партнёрство и дистрибуция:</h3>
                        <p className="about__desc grey"><a className="about__desc grey" href="mailto: partners@more.tv"> partners@more.tv</a></p>

                    </div>
                    <div className="contact__info ">
                        <h3 className="contact__info-title">Закупки и производство контента:</h3>
                        <p className="about__desc grey"><a className="about__desc grey" href="mailto: content@more.tv"> content@more.tv</a></p>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;