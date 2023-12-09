import React from 'react';

import {MenuItem} from "./item/MenuItem";

import './Menu.scss';

export const Menu = ({categories, categoryGroups, isShown, setMenuShown}) => {
    const menuState = isShown != null
        ? isShown ? "mobile-menu--open" : "mobile-menu--closed"
        : "";

    return (
        <div className={`mobile-menu ${menuState}`}>
            <div className="mobile-layout--sub-menu-shown" />
            <div className="mobile-menu-container">
                <MenuItem title={"Главная"} link={"/"} isMenuShown={isShown} setMenuShown={setMenuShown}/>
                {
                    categories.map(item =>
                        <MenuItem key={item.id}
                                  title={item.title}
                                  link={null}
                                  subItems={item.groups}
                                  isShown={categoryGroups[item.name].isShown}
                                  setShown={categoryGroups[item.name].setShown}
                                  isMenuShown={isShown}
                                  setMenuShown={setMenuShown}/>
                    )
                }
            </div>
        </div>
    );
};