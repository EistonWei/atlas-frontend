import React from 'react';

import Overview from '../Screens/MapOverview'
import Update from '../Screens/MapUpdate'
import Create from '../Screens/MapCreate'

export const routes = [
    {
        path: "/map",
        isolate: "private",
        exact: true,
        redirect: "/map/overview",
    },
    {
        path: "/map/overview",
        isolate: "public",
        exact: true,
        component: Overview
    }
] 
export default {
    routes
}