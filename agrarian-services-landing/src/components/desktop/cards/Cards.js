import React, {useState} from 'react';

import ReactPaginate from "react-paginate";
import {Card} from "../card/Card";

import styles from './Cards.module.scss';

export const Cards = ({items, itemsPerPage}) => {
    return (
        <div className={styles.cards}>
            <Pagination items={items} itemsPerPage={itemsPerPage} />
        </div>
    );
};

const Pagination = ({items, itemsPerPage}) => {

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {currentItems.map((item, index) =>
                    <Card
                        key={index}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        description={item.description}
                    />
                )}
            </div>

            <div className={styles.pagination}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="⇒"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="⇐"
                    renderOnZeroPageCount={null}

                    containerClassName={styles.pagination__container}
                    pageClassName={styles.pagination__page}
                    breakClassName={styles.pagination__break}
                    previousClassName={styles.pagination__previous}
                    nextClassName={styles.pagination__next}

                    activeClassName={styles.pagination__active}

                    pageLinkClassName={styles.pagination__link}
                    previousLinkClassName={styles.pagination__link}
                    nextLinkClassName={styles.pagination__link}
                    breakLinkClassName={styles.pagination__link}
                    disabledClassName={styles.pagination__disabled}
                />
            </div>
        </div>
    );
};