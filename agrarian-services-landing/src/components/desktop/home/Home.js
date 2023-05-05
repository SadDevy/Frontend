import React from 'react';

import styles from './Home.module.scss';

export const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.home__info}>
                <div className={styles.info__address}>ДНТ Сосновый бор</div>
                <div className={styles.info__phone}>+7 (910) 555-55-55</div>
            </div>
        </div>
    );
};