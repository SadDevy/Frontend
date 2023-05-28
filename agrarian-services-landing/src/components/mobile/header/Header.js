import React, {useState} from 'react';

import styles from './Header.module.scss';
import {Menu} from "../menu/Menu";

export const Header = ({isMenuShown, setMenuShown}) => {
    const menuItems = [
        {
            name: 'Главная',
            link: '/'
        },
        {
            name: 'Товары',
            link: '/goods'
        },
        {
            name: 'Услуги',
            link: '/services'
        },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}/>

                <div className={styles.menu__button} onClick={() => setMenuShown(!isMenuShown)}>
                    <div className={styles.button__top}></div>
                    <div className={styles.button__middle}></div>
                    <div className={styles.button__bottom}></div>
                </div>

                <Menu items={menuItems} isShown={isMenuShown} setMenuShown={setMenuShown}/>
            </div>
        </header>
    );
};