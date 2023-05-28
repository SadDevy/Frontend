import React from 'react';

import {MobileLayout} from "../mobile/layout/MobileLayout";
import {DesktopLayout} from "../desktop/layout/DesktopLayout";

export const Layout = ({goods, services, screenWidth, screenHeight}) => {
    return screenWidth >= 1150
        ? <DesktopLayout goods={goods} services={services}/>
        : <MobileLayout goods={goods} services={services}/>
};