import React from 'react';

import {Link} from "react-router-dom";

import styles from './Menu.module.scss';

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <div className={styles.items__container}>
                    <div className={styles.items__item}>
                        <Link to="/" className={styles.item__link}>Главная</Link>
                    </div>
                    <div className={styles.items__item}>
                        <Link to="/goods" className={styles.item__link}>Товары</Link>
                    </div>
                    <div className={styles.items__item}>
                        <Link to="/services" className={styles.item__link}>Услуги</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};