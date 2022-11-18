import React from 'react';

const Partner = () => {
    return (
        <section className="partner">
            <div className="container">
                <div className="container-partner">
                    <h1 className="partner__title">Партнер</h1>
                </div>
                <div className="partner__box">
                    <h2 className="partner__box-title">M-RAMO — самый широкий выбор сериалов,<br/> фильмов и развлекательных шоу <br/> для всей семьи</h2>
                    <p className="partner__box-desc">Единственная подписка на рынке, предлагающая продуманный микс российского и <br/> зарубежного контента для стабильного притока и удержания аудитории</p>
                    <div className='container-partner'>
                        <div className="partner__box-row ">
                            <div className="partner__card">
                                <img className="partner-icon" src="//web-static.more.tv/static/icons/sprite-e0264260.svg#Partners_forwardHistory-usage" alt=""/>
                                <p>Премьеры топовых эфирных <br/>сериалов ведущих <br/>телеканалов до эфира на ТВ</p>
                            </div>
                            <div className="partner__card">
                                <img className="partner-icon" src="//web-static.more.tv/static/icons/sprite-e0264260.svg#Partners_ratingStar-usage" alt=""/>
                                <p>Премьеры топовых эфирных <br/>сериалов ведущих <br/>телеканалов до эфира на ТВ</p>
                            </div>
                            <div className="partner__card">
                                <img className="partner-icon" src="//web-static.more.tv/static/icons/sprite-e0264260.svg#Partners_tvContent-usage" alt=""/>
                                <p>Премьеры топовых эфирных <br/>сериалов ведущих <br/>телеканалов до эфира на ТВ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;