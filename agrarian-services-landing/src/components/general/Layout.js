import React from 'react';

import {MobileLayout} from "../mobile/layout/MobileLayout";
import {DesktopLayout} from "../desktop/layout/DesktopLayout";

export const Layout = ({categories, header, home, screenWidth}) => {
    return screenWidth >= 1150
        ? <DesktopLayout categories={categories} header={header} home={home}/>
        : <MobileLayout categories={categories} header={header} home={home}/>
};