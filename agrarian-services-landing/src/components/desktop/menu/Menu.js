import React from 'react';

import {Link} from "react-router-dom";

import './Menu.scss';

export const Menu = ({categories, categoryGroups}) => {
    return (
        <div className="desktop-menu">
            <div className="desktop-menu-container">
                <div className="desktop-menu-items__container">
                    <Item title={"Главная"} link={"/"}/>
                    {
                        categories.map(item =>
                            <Item key={item.id}
                                  title={item.title}
                                  link={null}
                                  subItems={item.groups}
                                  isShown={categoryGroups[item.name].isShown}
                                  setShown={categoryGroups[item.name].setShown}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

const Item = ({title, link, subItems, isShown, setShown}) => {
    const menuState = isShown != null ?
        isShown ? "desktop-menu-sub-items__container--open"
            : "desktop-menu-sub-items__container--closed"
        : "";

    const setShownContainer = (e) => {
        if (setShown == null) {
            return;
        }

        setShown(isShown != null ? !isShown : true);

        if (link === null) {
            e.preventDefault();
        }
    };

    return (
        <div className="desktop-menu-items__item">
            <Link to={link} className="desktop-menu-item__link" onClick={setShownContainer}>{title}</Link>
            {
                subItems &&
                <div className={`${"desktop-menu-sub-items__container"} ${menuState}`}>
                    <div className="desktop-menu-sub-items__scroll-container">
                        {
                            subItems.map(item =>
                                <SubItem key={item.id} title={item.name} link={item.link}/>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

const SubItem = ({title, link}) => {
    return (
        <div className="desktop-menu-sub-items__item">
            <Link to={link} className="desktop-menu-sub-item__link">{title}</Link>
        </div>
    );
};