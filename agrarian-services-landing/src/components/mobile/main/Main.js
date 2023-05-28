import React from 'react';

import {Route, Routes} from "react-router-dom";

import {Home} from "../../general/home/Home";
import {Cards} from "../../general/cards/Cards";

import mobileStyles from './Main.module.scss';
import desktopStyles from '../../desktop/main/Main.module.scss';

export const Main = ({goods, services, isMenuShown, setMenuShown}) => {
    return (
        <main className={desktopStyles.main} onClick={() => setMenuShown(isMenuShown ? !isMenuShown : isMenuShown)}>
            <div className={mobileStyles.container}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/goods" element={<Cards items={goods} itemsPerPage={3}/>}/>
                    <Route path="/services" element={<Cards items={services} itemsPerPage={3}/>}/>
                </Routes>
            </div>
        </main>
    );
};