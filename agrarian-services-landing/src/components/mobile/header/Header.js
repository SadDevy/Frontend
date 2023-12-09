import React from 'react';

import {Menu} from '../menu/Menu';

import './Header.scss';

export const Header = ({isMenuShown, setMenuShown, header, categories, categoryGroups}) => {
    const mobileButtonTopState = isMenuShown != null
        ? isMenuShown
            ? "mobile-button__top--open"
            : "mobile-button__top--closed"
        : "";

    const mobileButtonMiddleState = isMenuShown != null
        ? isMenuShown
            ? "mobile-button__middle--open"
            : "mobile-button__middle--closed"
        : "";

    const mobileButtonBottomState = isMenuShown != null
        ? isMenuShown
            ? "mobile-button__bottom--open"
            : "mobile-button__bottom--closed"
        : "";

    return (
        <header className="mobile-header">
            <img className="mobile-header__background" src={header.background.url} alt={header.background.alt}/>
            <div className="mobile-header-container">
                <div className="mobile-logo-container">
                    <div className="mobile-logo__background">
                        <img className="mobile-logo" src={header.logo.url} alt={header.logo.alt}/>
                    </div>
                </div>

                <div className="mobile-menu__button" onClick={() => setMenuShown(!isMenuShown)}>
                    <div className={`mobile-button__top ${mobileButtonTopState}`}></div>
                    <div className={`mobile-button__middle ${mobileButtonMiddleState}`}></div>
                    <div className={`mobile-button__bottom ${mobileButtonBottomState}`}></div>
                </div>
            </div>
        </header>
    );
};