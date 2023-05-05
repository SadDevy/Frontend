import React from 'react';

import styles from './Card.module.scss';

export const Card = ({name, img, price, description}) => {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.card__front}>
                    <div className={styles.card__name}>{name}</div>
                    <div className={styles.card__img}>
                        <img src={img} alt="" className={styles.image} />
                    </div>
                    <div className={styles.card__price}>{price}</div>
                </div>

                <div className={styles.card__back}>
                    <div className={styles.card__name}>Описание</div>
                    <div className={styles.card__description}>{description}</div>
                </div>
            </div>
        </div>
    );
};