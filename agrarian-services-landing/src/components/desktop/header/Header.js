import React from 'react';

import {Menu} from '../menu/Menu';

import './Header.scss';

export const Header = ({header, categories, categoryGroups}) => {
    return (
        <header className="desktop-header">
            <img className="desktop-header__background" src={header.background.url} alt={header.background.alt}/>
            <div className="desktop-header-container">
                <div className="desktop-logo-container">
                    <div className="desktop-logo__background">
                        <img className="desktop-logo" src={header.logo.url} alt={header.logo.alt}/>
                    </div>
                </div>
                <div className="desktop-info-container">
                    <div className="desktop-info__address">
                        <a href={header.address.url} className="desktop-address__link">
                            {header.address.destination}
                        </a>
                    </div>
                    <div className="desktop-info__phone">
                        <a href={`tel:${header.phone}`} className="desktop-phone__link">
                            {header.phone}
                        </a>
                    </div>
                </div>
            </div>

            <Menu categories={categories} categoryGroups={categoryGroups}/>
        </header>
    );
};