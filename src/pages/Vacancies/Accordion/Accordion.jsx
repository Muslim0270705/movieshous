import React from 'react';
import Cardacc from "./Cardacc";
import {accordionData} from "./accordata";

const Accordion = () => {
    return (
        <>
            <div className="accordion">
                <div style={{padding: "0 0 40px"}} className="container__center stories__info">
                    <h2 className='stories__title'>Вакансии</h2>
                    <p className="Achievements__desc" style={{margin: "20px 0 0"}}>
                        Если ты не нашел или не нашла свою вакансию, отправь резюме на hr@more.tv
                    </p>
                    <div className="accordion__row">
                        {
                            accordionData.map((item) =>(
                                <Cardacc item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="container__center">
                    <h2 className='stories__title'>Где мы находимся</h2>
                    <div className="Achievements__desc map__desc" style={{margin: "20px 0 0"}}>
                        <div className="map__row">
                            <img style={{width:"13px",height: "20px"}} src="https://web-static.more.tv/static/icons/pin.38567c37.svg" alt=""/>
                            <p style={{whiteSpace: "nowrap"}} className="Achievements__desc">117105, Москва, Варшавское ш., 9, стр. 1, БЦ «Даниловская мануфактура», корпус «Мещерин» (северный вход)</p>
                        </div>
                        <div className="map__row">
                            <img style={{width:"20px",height: "20px"}} src="https://web-static.more.tv/static/icons/metro.e4b15c7d..png" alt=""/>
                            <p className="Achievements__desc">Тульская</p>
                        </div>
                    </div>
                    <div className='map__car'>
                    </div>
                    <a className="map__link" href='https://g.page/IT-Run?share'>Открыть адрес в Яндекс.Картах</a>
                    <p className="map__text">Смотри общедоступные телеканалы бесплатно, круглосуточно и в непрерывном режиме</p>
                </div>
            </div>
        </>


    );
};

export default Accordion;