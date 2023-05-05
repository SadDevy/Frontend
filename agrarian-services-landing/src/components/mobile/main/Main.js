import React from 'react';

import {Home} from "../../desktop/home/Home";

import {Route, Routes} from "react-router-dom";

import mobileStyles from './Main.module.scss';
import desktopStyles from '../../desktop/main/Main.module.scss';
import {Cards} from "../../desktop/cards/Cards";

export const Main = ({goods, services}) => {
    return (
        <main className={desktopStyles.main}>
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