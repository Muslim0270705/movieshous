import React from 'react';
import {IoIosArrowForward} from "react-icons/io";

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__row">
                    <h3 className="about__title">
                        Главная  <IoIosArrowForward/>  О нас
                    </h3>
                    <p className="about__desc">
                        more.tv — это все, что ты смотришь и даже больше. Тебя ждет самый широкий выбор сериалов, фильмов и развлекательных шоу для всей семьи, весь контент главных российских телеканалов в одном месте и совершенно бесплатно. Начни просмотр дома на сайте или
                        <br/>телевизоре и продолжи в дороге в мобильном приложении в любое время. Открывай каждый день more.
                    </p>
                    <p className="about__desc">
                        Оформи подписку, чтобы получить еще больше уникального контента.
                    </p>
                    <div className="about__text-row">
                        <p className="about__desc">
                            Подписка more.tv – это:
                        </p>
                        <p className="about__desc">
                            – Собственные сериалы и шоу, выходящие под брендом more originals
                        </p>
                        <p className="about__desc">
                            – Эксклюзивные зарубежные премьеры одновременно со всем миром
                        </p>
                        <p className="about__desc">
                            – Российские сериалы до эфира на ТВ
                        </p>
                        <p className="about__desc">
                            – Российские сериалы до эфира на ТВ– Российские сериалы до эфира на ТВ
                        </p>
                        <p className="about__desc">
                            – Трансляции популярных эфирных и платных телеканалов
                        </p>
                    </div>
                    <p className="about__desc">
                        Сервис доступен через браузер на любых компьютерах и ноутбуках, а также в приложениях для смартфонов, планшетов, ТВ -<br/>приставок и телевизоров Smart TV.
                    </p>
                    <p className="about__desc">
                        Пользовательское соглашение:
                        <a className="about__desc" href="https://more.tv/useragreement">
                            https://more.tv/useragreement
                        </a>
                    </p>
                    <p className="about__desc">
                        Возникли вопросы? Просто напиши нам:
                        <a className="about__desc" href="https://mail.google.com/mail/u/0/#inbox">
                            mageza.muslim@gmail.com, или позвони по номеру 8-800-600-69-96
                        </a>
                    </p>

                </div>
            </div>
        </section>
    );
};

export default About;