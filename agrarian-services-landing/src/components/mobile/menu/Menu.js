import React from 'react';

import {MenuItem} from "./item/MenuItem";

import styles from './Menu.module.scss';

export const Menu = ({items, isShown, setMenuShown}) => {
    const menuState = isShown ? styles.menu__open : styles.menu__close;
    return (
        <div className={`${styles.menu} ${menuState}`}>
            <div className={styles.container}>
                {
                    items.map((item, index) =>
                        <MenuItem
                            key={index}
                            link={item.link}
                            name={item.name}
                            isShown={isShown}
                            setMenuShown={setMenuShown}/>)
                }
            </div>
        </div>
    );
};