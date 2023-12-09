import React from 'react';

import './Home.scss';

export const Home = ({home}) => {
    return (
        <div className="home">
            <img className="home__background" src={home.image.url} alt={home.image.alt}/>
            <div className="home__info">
                <div className="home-info__address">ДНТ Сосновый бор</div>
                <div className="home-info__phone">+7 (910) 555-55-55</div>
            </div>
        </div>
    );
};