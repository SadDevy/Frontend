import React, {useState} from 'react';

import styles from './Header.module.scss';
import {Menu} from "../menu/Menu";

export const Header = () => {
    const [menuIsShown, setMenuShown] = useState(false);

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

                <div className={styles.menu__button} onClick={() => setMenuShown(!menuIsShown)}>
                    <div className={styles.button__top}></div>
                    <div className={styles.button__middle}></div>
                    <div className={styles.button__bottom}></div>
                </div>

                <Menu items={menuItems} isShown={menuIsShown}/>
            </div>
        </header>
    );
};