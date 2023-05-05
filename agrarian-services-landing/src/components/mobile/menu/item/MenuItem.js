import React from 'react';

import {Link} from "react-router-dom";

import styles from './MenuItem.module.scss';

export const MenuItem = ({name, link}) => {
    return (
        <div className={styles.item}>
            <div className={styles.container}>
                <Link to={link} className={styles.item__link}>{name}</Link>
            </div>
        </div>
    );
};