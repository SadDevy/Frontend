import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {Cards} from "../../general/cards/Cards";
import {Home} from "../../general/home/Home";

import './Main.scss';

export const Main = ({categories, categoryGroups, home}) => {
    return (
        <main className="desktop-main">
            <div className="desktop-main-container">
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