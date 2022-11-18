import React from 'react';
import {IoIosArrowForward} from "react-icons/io";

const Questions = () => {
    return (
        <section className="questions">
            <div className="container">

                <div className="about__row">
                    <h3 className="about__title">
                        Главная  <IoIosArrowForward/> Вопросы и ответы
                    </h3>
                    <h3 className="contact__title">Как оплатить more.tv в мобильном <br/> приложении</h3>
                    <div className="contact__info">
                        <p className="about__desc grey">К сожалению, в приложении more.tv могут быть проблемы с оплатой подписки.</p>
                        <p className="about__desc grey">Это временно. Можно оформить и продлить подписку через сайт — в приложении она тоже будет действовать.</p>
                    </div>
                    <div className="contact__info">
                        <h3 className="contact__info-title">Как поставить оплату со счета мобильного телефона:
                            Для Apple:</h3>
                        <h3 className="contact__info-title grey">Для Apple:</h3>
                        <ul className="questions__menu">
                            <li className="about__desc grey">Перейди в «Настройки». </li>
                            <li className="about__desc grey">Тапни по своему Apple ID (твое имя).</li>
                            <li className="about__desc grey">Перейди в «Оплата и доставка».</li>
                            <li className="about__desc grey">Тапни по «Добавить способ оплаты». </li>
                            <li className="about__desc grey">Выбери «Мобильный телефон».</li>
                            <p className="about__desc grey">(поддерживается не всеми операторами)</p>
                        </ul>
                        <h3 className="contact__info-title grey">Для Android:</h3>
                        <p className="about__desc grey">К сожалению, Google ограничил все способы оплаты в России, но мы сейчас подскажем, что нужно сделать.</p>
                        <h3 className="contact__info-title grey">Как продлить подписку:</h3>
                        <p className="about__desc grey">Нужно отменить ее на телефоне (при этом подписка продолжит действовать весь оплаченный период) и оформить заново на сайте.</p>
                        <h3 className="contact__info-title grey">Для Apple:</h3>
                        <ul className="questions__menu">
                            <li className="about__desc grey">Открой приложение «Настройки».</li>
                            <li className="about__desc grey">Нажми на свое имя в Apple ID.</li>
                            <li className="about__desc grey">Нажми «Подписки».</li>
                            <li className="about__desc grey">Выбери подписку приложения more.tv.</li>
                            <li className="about__desc grey">Нажми «Отменить подписку».</li>
                        </ul>
                        <h3 className="contact__info-title grey">Для Android:</h3>
                        <ul className="questions__menu">
                            <li className="about__desc grey">Открой приложение Google Play.</li>
                            <li className="about__desc grey">В правом верхнем углу экрана нажми на значок профиля.</li>
                            <li className="about__desc grey">Выбери «Платежи и подписки» → «Подписки».</li>
                            <li className="about__desc grey">Найди подписку more.tv.</li>
                            <li className="about__desc grey">Нажми «Отменить подписку».</li>
                            <p className="about__desc grey">Когда подписка закончится, зайди на сайт more.tv и оформи ее снова.</p>
                        </ul>
                        <h3 className="contact__info-title grey">Как оформить подписку:</h3>
                        <ul className="questions__menu ">
                            <li className="about__desc grey">Нажми «Вход» в правом верхнем углу экрана и войди в свой профиль. </li>
                            <li className="about__desc grey">Логин и пароль те же, что и для мобильного приложения.</li>
                            <li className="about__desc grey">Нажми кнопку «Подключить подписку» в правом верхнем углу.</li>
                            <li className="about__desc grey">Следуй инструкциям по оплате в открывшемся окне.</li>

                        </ul>
                        <p className="about__desc grey">Подписка будет работать и на сайте, и в мобильном приложении, ты сможешь смотреть любимые шоу как и раньше.</p>
                        <p className="about__desc grey">Если возникнут проблемы, пиши нам в техподдержку.</p>
                        <p className="about__desc grey">Если платеж не прошел, попробуй перейти в настройки аккаунта и изменить способ оплаты на «Мобильный телефон». Также <br/> подписку всегда можно оплатить на нашем сайте. Если возникли какие-то проблемы, то напиши в нашу техподдержку (Профиль <br/> → Поддержка → Написать письмо).</p>
                    </div>
                    <h3 className="contact__title">Как активировать промокод?</h3>
                    <div className="contact__info">
                        <p className="contact__info-title">Активация промокода происходит только на сайте more.tv,</p>
                        <p className="contact__info-title">но активированный промокод применяется для просмотра на всех платформах</p>
                    </div>
                    <div className="contact__info">
                        <h3 className="contact__info-title">На сайте more.tv</h3>
                        <ul className="questions__menu-promo">
                            <li className="about__desc grey">Войди в профиль пользователя</li>
                            <li className="about__desc grey">Перейди в раздел «Использовать промокод», введи промокод и следуй инструкциям на экране</li>
                        </ul>
                        <h3 className="contact__info-title">В мобильном приложении iOS / Andorid</h3>
                        <ul className="questions__menu-promo">
                            <li className="about__desc grey">Войди в профиль пользователя на сайте more.tv</li>
                            <li className="about__desc grey">Перейди в раздел «Использовать промокод», введи промокод и следуй инструкциям на экране</li>
                            <li className="about__desc grey">Вернись в приложение</li>
                            <li className="about__desc grey">Войди в профиль в приложении, используя те же данные пользователя, что и на сайте</li>
                        </ul>
                        <h3 className="contact__info-title">В приложении для Smart TV</h3>
                        <ul className="questions__menu-promo">
                            <li className="about__desc grey">Войди в профиль пользователя на сайте more.tv</li>
                            <li className="about__desc grey">Перейди в раздел «Использовать промокод», введи промокод и следуй инструкциям на экране</li>
                            <li className="about__desc grey">Вернись в приложение для Smart TV</li>
                            <li className="about__desc grey">Перейди в личный кабинет приложения, чтобы привязать устройство к профилю</li>
                            <li className="about__desc grey">Введи код телевизора на сайте more.tv в разделе «Подключить телевизор»</li>
                            <li className="about__desc grey">Телевизор синхронизируется автоматически</li>
                        </ul>
                    </div>
                    <div className="contact__info">
                        <h3 className="contact__title">Другие вопросы и ответы</h3>
                        <h3 className="questions__title">На каких устройствах возможен просмотр?</h3>
                        <h3 className="contact__info-title">Персональный компьютер или ноутбук</h3>
                        <ul className="questions__menu-ques">
                            <li className="about__desc grey">Google Chrome — версия 64 и выше,</li>
                            <li className="about__desc grey">Яндекс.Браузер — версия 18 и выше,</li>
                            <li className="about__desc grey">Opera — версия 51 и выше,</li>
                            <li className="about__desc grey">Mozilla Firefox — версия 53 и выше,</li>
                            <li className="about__desc grey">Apple Safari — версия 10 и выше,</li>
                            <li className="about__desc grey">Microsoft Edge — версия 44 и выше.</li>
                        </ul>
                        <h3 className="contact__info-title">Смартфон или планшет</h3>
                        <ul className="questions__menu-ques">
                            <li className="about__desc grey">При использовании приложений:</li>
                            <li className="about__desc grey">iOS/iPadOS — версия операционной системы iOS 13 и выше,</li>
                            <li className="about__desc grey">Android — версия операционной системы 6.0 и выше.</li>
                        </ul>
                        <ul className="questions__menu-ques">
                            <li className="about__desc grey">При использовании браузеров Google Chrome, Яндекс.Браузер, Firefox:</li>
                            <li className="about__desc grey">iOS — версия 12 и выше,</li>
                            <li className="about__desc grey">Android — версия 8 и выше.</li>
                        </ul>
                        <h3 className="contact__info-title">Телевизоры с функцией Smart TV</h3>
                        <p className='about__desc grey'>для телевизоров под управлением ОС Tizen дата выпуска должна быть не ранее 2015 года,<br/>
                            для телевизионных приставок Apple TV под управлением ОС tvOS — версия операционной системы tvOS 12 и выше,<br/>
                            для всех видов устройств необходима эффективная пропускная способность подключения устройства к сети Интернет на <br/> уровне 7 Мбит/с и выше.</p>
                        <h3 className="questions__title">На каких устройствах возможен просмотр?</h3>
                        <p className="about__desc grey">Чтобы отключить автоматическое продление подписки, оформленной на мобильном устройстве, необходимо использовать <br/> настройки Google Play или App Store. </p>
                        <p className="about__desc grey">Чтобы отключить автоматическое продление подписки, оформленной на веб-сайте или в приложении для Smart TV <br/>, необходимо использовать раздел управления подпиской, располагающийся в профиле пользователя.</p>
                        <p className="about__desc grey">Удаление приложения никак не влияет на статус подписки по причине того, что подписка связывается с учётной записью <br/> пользователя Google Play, App Store или more.tv, а не с конкретным экземпляром приложения или устройством.</p>
                        <h3 className="questions__title">Можно ли смотреть контент за пределами России?</h3>
                        <p className='about__desc grey'>
                            Доступность видеоконтента для просмотра за границей определяется обладателями прав на этот контент. Если вы увидели <br/> сообщение «Данное видео недоступно для просмотра на территории этой страны», то это означает, что права на показ данного <br/> контента не распространяются на территорию страны, в которой вы находитесь.
                        </p>


                    </div>
                    <div className="contact__info">
                        <h3 className="contact__title">Куда можно обратиться с вопросом, на который не нашлось ответа?</h3>
                        <p style={{margin: "20px 0 100px 0"}} className="about__desc grey" >Любой интересующий вас вопрос вы можете задать нашей службе поддержки пользователей по электронной почте на адрес support@more.tv или в чате в профиле.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions;