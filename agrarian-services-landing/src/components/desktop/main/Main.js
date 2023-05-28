import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {Cards} from "../../general/cards/Cards";
import {Home} from "../../general/home/Home";

import styles from './Main.module.scss';

export const Main = ({goods, services}) => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/goods" element={<Cards items={goods} itemsPerPage={6}/>}/>
                    <Route path="/services" element={<Cards items={services} itemsPerPage={6}/>}/>
                </Routes>
            </div>
        </main>
    );
};