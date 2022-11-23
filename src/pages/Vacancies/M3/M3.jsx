import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Accordion from "../Accordion/Accordion";

const M3 = () => {
    return (
        <section className="m3">
            <img className="m3-img" src="https://web-static.more.tv/static/icons/shapka@2x.b0ff9588..jpg" alt=""/>
            <div className="m3__row">
                <img className="m3-icon" src="https://web-static.more.tv/static/icons/m3logo.65443301.svg" alt="m3-icon"/>
                <p className="m3__desc">
                    Компания М3 создает и развивает <br/>
                    digital-продукты медиахолдингов «СТС Медиа» <br/>
                    и «Национальная Медиа Группа»
                </p>
            </div>
            <div className="m3__texts">
                <div className="container__small">
                    <div className="m3__info">
                        <h3 className="contact__info-title center">
                            Отличная команда
                        </h3>
                        <p className="about__desc grey">
                            У нас большая экспертиза как в контенте, так и в продукте. Мы не только мечтатели, но и практики, строго следящие за цифрами. В нашей команде — лучшие специалисты в своем деле, работавшие в главных компаниях страны. У нас собственная команда разработки. Мы четко ставим цели и точно знаем, как их достичь.
                        </p>
                    </div>
                    <div className="m3__info">
                        <h3 className="contact__info-title center">
                            Мы устойчивая компания с сильным акционером
                        </h3>
                        <p className="about__desc grey">
                            Национальная Медиа Группа. Это самый крупный частный медиахолдинг России, входящий в топ-4 лучших крупных работодателей России 2020 по версии hh.ru и в топ-50 лучших работодателей России 2020 по версии Forbes. Он производит контент, а также управляет ведущими каналами, киностудиями и медиа.
                        </p>
                    </div>
                    <div className="m3__info">
                        <img className="m3__info-img" src="https://web-static.more.tv/static/icons/murugov.6ef51421..jpg" alt=""/>
                    </div>
                    <div className="m3__info">
                        <h3 className="contact__info-title center">
                            С продуктами компании интересно работать
                        </h3>
                        <p className="about__desc grey">
                            Среди наших продуктов как платформы ведущих каналов (СТС, СТС Love, CTC Kids, Домашний, Че), так и собственный онлайн-кинотеатр, который объединяет все эти проекты и позволяет показывать первоклассный контент аудитории в 20 млн пользователей ежемесячно.
                        </p>
                    </div>
                    <div className="m3__info">
                        <h3 className="contact__info-title center">
                            Мы громко заявили о себе в индустрии
                        </h3>
                        <p className="about__desc grey">
                            Мы быстрее, интереснее и смелее остальных. Сейчас мы один из лидеров в создании оригинального контента. Именно на more вышли такие нашумевшие сериалы, как «Чики», «Трудные подростки» и «Псих». С нами сотрудничают ведущие режиссеры, продюсеры и актеры. Но при этом мы показываем качественный массовый контент: хитовые российские комедии, развлекательные шоу и детскую анимацию.
                        </p>
                    </div>
                    <div className="m3__info">
                        <h3 className="contact__info-title center">
                            Мы действительно технологичная компания
                        </h3>
                        <p className="about__desc grey">
                            У нас нет лишней бюрократии, мы все общаемся на ты и прислушиваемся друг к другу. А еще у нас классный офис на Даниловской мануфактуре, медицинская страховка и дополнительное образование.
                        </p>
                    </div>
                </div>
            </div>
            <div className="marquee">
                <div className="track">
                    <div className="content"><img className="m3__marquee" src="https://web-static.more.tv/static/icons/progs@2x-min.4c1a4d27..png" alt=""/>
                        <img className="m3__marquee" src="https://web-static.more.tv/static/icons/progs@2x-min.4c1a4d27..png" alt=""/>
                    </div>
                </div>
            </div>
            <div className='container__center'>
                <div className="m3__bottom">
                    <h3 className="m3__bottom-title">Ты с нами?</h3>
                    <p className="m3__bottom-desc">Мы постоянно растем и ищем больше <br/>людей в нашу команду, присоединяйся!</p>
                    <button type='button' className="m3__bottom-btn">
                        смотреть вакансии
                    </button>
                </div>
            </div>
            <div className="Achievements">
                <div className="container__center">
                    <div className="Achievements__info">
                        <h2 className="Achievements__title">
                            M-Ramo
                        </h2>
                        <p className="Achievements__desc">
                            Достижения команды more.tv за год работы
                        </p>
                        <img className="Achievements__img" src="https://web-static.more.tv/static/icons/more_desktop.4dec086d..jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="stories">
                <div className="container__center">
                    <div className="stories__info">
                        <h2 className="Achievements__title">
                            M-Ramo
                        </h2>
                        <p className="Achievements__desc">
                            Смелые оригинальные истории more.tv, к которым обычное ТВ пока не готово
                        </p>
                        <div className="stories__row">
                            <div className="stories__card">
                                <img className="stories__img" src="https://web-static.more.tv/static/icons/%D0%BF%D1%81%D0%B8%D1%85@2x.9fdb5a1c..jpg" alt=""/>
                            </div>
                            <div className="stories__card">
                                <img className="stories__img" src="https://web-static.more.tv/static/icons/%D1%82%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B5@2x.6baee410..jpg" alt=""/>
                            </div>
                            <div className="stories__card">
                                <img className="stories__img" src="https://web-static.more.tv/static/icons/%D1%87%D0%B8%D0%BA%D0%B8@2x.83c5f258..jpg" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="stories">
                <div className="container__center">
                    <div className="stories__info">
                        <h2 className="stories__title">
                            Отзывы наших сотрудников о работе в М3

                        </h2>
                        <section className="m3__slider">

                            <Swiper
                                    slidesPerView={2}
                                    loop={true}
                                    autoplay={true}
                                    spaceBetween={30}
                                    className="sliderSwiper"
                            >
                                <SwiperSlide>
                                    <div className="slider__card">
                                        <div className="slider__card-name">

                                                <img className="slider__card-img" src="https://web-static.more.tv/static/icons/Artem@2x.b6749a95..png" alt=""/>

                                            <div className="slider__name">
                                                <h2 className='slider__card-title'>Артем Курчавый</h2>
                                                <p className="slider__card-desc">Руководитель отдела YouTube</p>
                                            </div>
                                        </div>
                                        <p className="slider__card-desc">
                                            Для меня, наверное, это наиболее комфортная рабочая среда. Тот случай, когда речь про бизнес и результат, а не высиживание от звонка до звонка. <br/>
                                            Возможность реализовать свои идеи, добиться лучших показателей. Ну и, конечно, возможность прикоснуться к индустрии кино.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider__card">
                                        <div className="slider__card-name">

                                                <img className="slider__card-img" src="https://web-static.more.tv/static/icons/Rudenko@2x.0e4d0fa3..png" alt=""/>

                                            <div className="slider__name">
                                                <h2 className='slider__card-title'>Сергей Руденко
                                                </h2>
                                                <p className="slider__card-desc">Старший фронтенд разработчик
                                                </p>
                                            </div>
                                        </div>
                                        <p className="slider__card-desc">
                                            Я работаю в М3 уже пятый месяц. С самого начала, еще на этапе собеседования, меня очень зацепил именно коллектив, и именно поэтому я выбрал М3. Спустя почти полгода я убедился, что сделал правильный выбор, потому что здесь есть все, что нужно для развития: сложные и интересные проекты, крутая команда с большим опытом, большая компания, большой трафик, большая миссия. Осознание, что так много людей пользуется твоими трудами очень сильно мотивирует.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider__card">
                                        <div className="slider__card-name">

                                                <img className="slider__card-img" src="https://web-static.more.tv/static/icons/Polina@2x.4c26611f..png" alt=""/>

                                            <div className="slider__name">
                                                <h2 className='slider__card-title'>Полина Немчак
                                                </h2>
                                                <p className="slider__card-desc">Фронтенд разработчик
                                                </p>
                                            </div>
                                        </div>
                                        <p className="slider__card-desc">Мне нравится работать в моей команде, потому что с тиммейтами всегда можно поговорить, обсудить любые вопросы. Например, мы часто обсуждаем интересные подходы в разработке, новые фичи языка или интересные задачи, которые кто-то решает. В целом у нас складывается очень дружелюбная атмосфера в компании, отчего я с первого дня чувствую себя её частью. Я чувствую, что наши совместные усилия помогают делать хороший продукт.
                                        </p>
                                    </div>
                                </SwiperSlide>

                            </Swiper>

                        </section>
                    </div>

                </div>
            </div>
            <div className="stories__info">
                 <h2 className="stories__title">
                     У нас классный офис
                 </h2>
                 <p className="Achievements__desc" style={{margin: "20px 0 0"}}>
                     В нашем просторном офисе, расположенном в одном из лучших творческих кластеров Москвы, тебя ждут <br/> приятная атмосфера, уютный кофепоинт и дружелюбная команда. Мы работаем в гибридном режиме: три <br/> дня в неделю – в офисе, два – удаленно.
                 </p>
                <section className="slider">

                    <Swiper
                            slidesPerView={3}
                            loop={true}
                            autoplay={true}
                            spaceBetween={30}
                            navigation={true}
                            modules={[Navigation]}
                            className="sliderSwiper"
                    >
                        <SwiperSlide>
                            <div className="slider__block">
                                <img src="	https://web-static.more.tv/static/icons/DSC_4620.2e273a83..jpeg" alt="" className="slider__block-img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider__block">
                                <img src="https://web-static.more.tv/static/icons/DSC_4623.e986b4d9..jpg" alt="" className="slider__block-img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider__block">
                                <img src="https://web-static.more.tv/static/icons/DSC_4626.f9244636..jpeg" alt="" className="slider__block-img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider__block">
                                <img src="	https://web-static.more.tv/static/icons/DSC_4634.fec976c2..jpeg" alt="" className="slider__block-img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider__block">
                                <img src="	https://web-static.more.tv/static/icons/DSC_4651.113612de..jpeg" alt="" className="slider__block-img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider__block">
                                <img src="	https://web-static.more.tv/static/icons/DSC_4655.982f4051..jpeg" alt="" className="slider__block-img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider__block">
                                <img src="	https://web-static.more.tv/static/icons/DSC_4660.4cf5dc56..jpeg" alt="" className="slider__block-img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider__block">
                                <img src="https://web-static.more.tv/static/icons/DSC_4651.113612de..jpeg" alt="" className="slider__block-img"/>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </section>
            </div>
            <Accordion/>

        </section>
    );
};

export default M3;