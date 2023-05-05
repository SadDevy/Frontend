import React from 'react';

import {Header} from "../header/Header";
import {Main} from "../main/Main";
import {Footer} from "../footer/Footer";

import styles from './MobileLayout.module.scss';

export const MobileLayout = ({goods, services}) => {
    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <Header/>
                <Main goods={goods} services={services}/>
                <Footer/>
            </div>
        </div>
    );
};