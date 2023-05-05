import React from 'react';

import {Menu} from '../menu/Menu';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}></div>
                <div className={styles.info__container}>
                    <div className={styles.info__address}>
                        <a href="https://yandex.ru/navi/-/CCUgUBC1DB" className={styles.address__link}>
                            ДНТ Сосновый бор
                        </a>
                    </div>
                    <div className={styles.info__phone}>
                        <a href="tel:89105555555" className={styles.address__link}>
                            +7 (910) 555-55-55
                        </a>
                    </div>
                </div>
            </div>

            <Menu/>
        </header>
    );
};