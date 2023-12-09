import React from 'react';

import {Link} from "react-router-dom";

import './MenuItem.scss';

export const MenuItem = ({title, link, subItems, isShown, setShown, isMenuShown, setMenuShown}) => {
    const menuState = isShown != null ?
        isShown ? "mobile-menu-sub-items__container--open"
            : "mobile-menu-sub-items__container--closed"
        : "";

    const setShownContainer = (e) => {
        if (setShown == null) {
            setMenuShown(!isMenuShown);
            return;
        }

        setShown(isShown != null ? !isShown : true);

        if (link === null) {
            e.preventDefault();
        }
    };

    return (
        <div className="mobile-menu-item">
            <div className="mobile-menu-items-container">
                <Link to={link} className="mobile-menu-item__link" onClick={setShownContainer}>{title}</Link>
                {
                    subItems &&
                    <div className={`${"mobile-menu-sub-items__container"} ${menuState}`}>
                        <div className="mobile-menu-sub-items__scroll-container">
                            {
                                subItems.map(item =>
                                    <SubItem key={item.id}
                                             title={item.name}
                                             link={item.link}
                                             setShown={setShown}
                                             isMenuShown={isMenuShown}
                                             setMenuShown={setMenuShown}/>
                                )
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

const SubItem = ({title, link, setShown, isMenuShown, setMenuShown}) => {
    const setMenuStatus = () => {
        setShown(false);
        setMenuShown(!isMenuShown);
    };

    return (
        <div className="mobile-menu-sub-items__item">
            <Link to={link} className="mobile-menu-sub-item__link" onClick={setMenuStatus}>{title}</Link>
        </div>
    );
};