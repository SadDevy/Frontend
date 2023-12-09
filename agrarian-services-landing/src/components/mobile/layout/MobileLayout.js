import React, {useState} from 'react';

import {Header} from "../header/Header";
import {Main} from "../main/Main";
import {Footer} from "../footer/Footer";

import './MobileLayout.scss';
import {Menu} from "../menu/Menu";

export const MobileLayout = ({categories, header, home}) => {
    const [isMenuShown, setMenuShown] = useState(null);

    const categoryGroups = getCategoryGroups(categories.map(item => item.name));

    const setCategoryGroupsShown = () => {
        for (let categoryGroup in categoryGroups) {
            const isShown = categoryGroups[categoryGroup].isShown;
            if (isShown) {
                categoryGroups[categoryGroup].setShown(!isShown);
            }
        }
    };

    return (
        <div className="mobile-layout-container" onClick={setCategoryGroupsShown}>
            <div className="mobile-layout">
                <Menu categories={categories}
                      categoryGroups={categoryGroups}
                      isShown={isMenuShown}
                      setMenuShown={setMenuShown}
                />
                <Header isMenuShown={isMenuShown}
                        setMenuShown={setMenuShown}
                        header={header}
                        categories={categories}
                        categoryGroups={categoryGroups}
                />
                <Main categories={categories}
                      categoryGroups={categoryGroups}
                      isMenuShown={isMenuShown}
                      setMenuShown={setMenuShown}
                      home={home}/>
                <Footer/>
            </div>
        </div>
    );
};

const getCategoryGroups = (keys) => {
    const categoryGroups = {};
    for (let key of keys) {
        const [isShown, setShown] = useState(null);

        categoryGroups[key] = {};
        categoryGroups[key].isShown = isShown;
        categoryGroups[key].setShown = setShown;
    }

    return categoryGroups;
};