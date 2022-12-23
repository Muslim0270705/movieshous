import React from 'react';
import {Link} from "react-router-dom";

const Subscriptions = () => {
    return (

        <section className='subscriptions'>
            <h2 className='subscriptions__title'>Первые 30 дней подписки бесплатно</h2>
            <div className="subscriptions__row">
                <div className="subscriptions__card">
                    <img src="https://web-static.more.tv/static/icons/01.54ead7b9.svg" alt=""/>
                    <p className='subscriptions__desc'>Сериалы, снятые <br/> специально для more.tv</p>
                </div>
                <div className="subscriptions__card">
                    <img src="https://web-static.more.tv/static/icons/01.54ead7b9.svg" alt=""/>
                    <p className='subscriptions__desc'>Сериалы, снятые <br/> специально для more.tv</p>
                </div>
                <div className="subscriptions__card">
                    <img src="https://web-static.more.tv/static/icons/01.54ead7b9.svg" alt=""/>
                    <p className='subscriptions__desc'>Сериалы, снятые <br/> специально для more.tv</p>
                </div>
                <div className="subscriptions__card">
                    <img src="https://web-static.more.tv/static/icons/01.54ead7b9.svg" alt=""/>
                    <p className='subscriptions__desc'>Сериалы, снятые <br/> специально для more.tv</p>
                </div>
                   

            </div>
            <Link to={"/input"}>
                <button type='button' className='subscriptions__btn'>попробовать бесплатно</button>
            </Link>
        </section>
    );
};

export default Subscriptions;