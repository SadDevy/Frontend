import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {Layout} from "./components/general/Layout";

import styles from './App.module.scss';

export const App = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    window.onresize = event => {
        const screen = event.target;

        setScreenWidth(screen.innerWidth);
        setScreenHeight(screen.innerHeight);
    };

    const items1 = [
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },

        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },

        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },

        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },   {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },   {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },   {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },   {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },   {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },   {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },   {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },   {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
        {
            name: "Название 2",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
    ];

    const items2 = [
        {
            name: "Название 1",
            img: "./header-background.jpg",
            price: "1000 Р",
            description: "Какое-то описание"
        },
    ];

    return (
        <Router>
            <div className={styles.app}>
                <Layout
                    goods={items1}
                    services={items2}
                    screenWidth={screenWidth}
                    screenHeight={screenHeight}/>
            </div>
        </Router>
    );
};
