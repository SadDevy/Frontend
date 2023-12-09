import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {Layout} from "./components/general/Layout";

import categoriesJson from "./data/categories.json";
import appJson from "./data/app.json";
import headerJson from "./data/header.json";
import homeJson from "./data/home.json";

import './App.scss';
import axios from "axios";
import settings from "./settings.json";

export const App = () => {

    const getCategoriesLink = settings.host + "/api/v1/categories";
    const getGroupsLink = settings.host + "/api/v1/groups/by-category";

    const [categoriesLoading, setCategoriesLoading] = useState(true);

    const [categoriesGroups, setCategoriesGroups] = useState({});

    useEffect(() => {
        setCategoriesLoading(true);

        axios.get(getCategoriesLink).then(categoriesResponse => {

            const result = categoriesResponse.data.map(category => {
                let groups = [];
                axios.get(getGroupsLink + "/" + category.name).then(groupsResponse => {
                    groups =groupsResponse.data;
                });

                return {
                    ...category,
                    groups: groups
                };
            });

            setCategoriesGroups(result);
            console.log(result);
            setCategoriesLoading(false);
        });
    }, []);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.onresize = event => {
        const screen = event.target;

        setScreenWidth(screen.innerWidth);
    };

    return (
        <Router>
            <div className="app">
                {
                    render(
                        categoriesLoading,
                        appJson.app.background,
                        headerJson.header,
                        homeJson.home,
                        screenWidth,
                        categoriesJson.categories
                    )
                }
            </div>
        </Router>
    );
};

//RENDER BODY
const render = (loading, background, header, home, screenWidth, categories) => {
    if (loading) {
        return <div>loading...</div> //fix
    }

    return (
        <div>
            <img className="app__background" src={background.url} alt={background.alt}/>
            <Layout
                categories={categories}
                header={header}
                home={home}
                screenWidth={screenWidth}/>
        </div>
    )
}