import React, {useEffect, useState} from 'react';

import {Header} from "../header/Header";
import {Main} from "../main/Main";
import {Footer} from "../footer/Footer";

import './DesktopLayout.scss';

export const DesktopLayout = ({categories, header, home}) => {

    const categoryGroups = getCategoryGroups(categories.map(item => item.name));

    const setCategoryGroupsShown = (e) => {
        for (let categoryGroup in categoryGroups) {
            const isShown = categoryGroups[categoryGroup].isShown;
            if (isShown) {
                categoryGroups[categoryGroup].setShown(!isShown);
            }
        }
    };

    return (
        <div className="desktop-layout-container" onClick={setCategoryGroupsShown}>
            <div className="desktop-layout">
                <Header header={header} categories={categories} categoryGroups={categoryGroups}/>
                <Main categories={categories} categoryGroups={categoryGroups} home={home}/>
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