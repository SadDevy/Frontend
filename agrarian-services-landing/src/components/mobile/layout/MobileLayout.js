import React, {useState} from 'react';

import {Header} from "../header/Header";
import {Main} from "../main/Main";
import {Footer} from "../footer/Footer";

import styles from './MobileLayout.module.scss';

export const MobileLayout = ({goods, services}) => {
    const [isMenuShown, setMenuShown] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown}/>
                <Main goods={goods} services={services} isMenuShown={isMenuShown} setMenuShown={setMenuShown}/>
                <Footer/>
            </div>
        </div>
    );
};