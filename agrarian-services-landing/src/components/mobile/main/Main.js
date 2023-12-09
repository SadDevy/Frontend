import React from 'react';

import {Route, Routes} from "react-router-dom";

import {Home} from "../../general/home/Home";
import {Cards} from "../../general/cards/Cards";

import './Main.scss';
import '../../desktop/main/Main.scss';

export const Main = ({categories, categoryGroups, isMenuShown, setMenuShown, home}) => {
    return (
        <main className="desktop-main" onClick={() => setMenuShown(isMenuShown ? !isMenuShown : isMenuShown)}>
            <div className="mobile-main-container">
                <Routes>
                    <Route path="/" element={<Home home={home}/>}/>
                    {
                        categories.map(item => {
                            return item.groups.map(group => {
                                    return (
                                        <Route
                                            path={group.link}
                                            element={
                                            <Cards
                                                items={item.items.filter(item => item.groupId === group.id)}
                                                itemsPerPage={6}/>
                                        }/>
                                    )
                                }
                            )
                        })
                    }
                </Routes>
            </div>
        </main>
    );
};