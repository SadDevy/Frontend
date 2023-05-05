import React from 'react';

import {MenuItem} from "./item/MenuItem";

import styles from './Menu.module.scss';

export const Menu = ({items, isShown}) => {
    const menuState = isShown ? styles.menu__open : styles.menu__close;
    return (
        <div className={`${styles.menu} ${menuState}`}>
            <div className={styles.container}>
                {
                    items.map((item, index) => <MenuItem key={index} link={item.link} name={item.name}/>)
                }
            </div>

            {/*<div className={styles.container}>*/}
            {/*    <div className={styles.items__container}>*/}
            {/*        <div className={styles.items__item}>*/}
            {/*            <Link to="/" className={styles.item__link}>Главная</Link>*/}
            {/*        </div>*/}
            {/*        <div className={styles.items__item}>*/}
            {/*            <Link to="/goods" className={styles.item__link}>Товары</Link>*/}
            {/*        </div>*/}
            {/*        <div className={styles.items__item}>*/}
            {/*            <Link to="/services" className={styles.item__link}>Услуги</Link>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <a href="#" className={styles.order}>Сделать заказ</a>*/}
            {/*</div>*/}
        </div>
    );
};