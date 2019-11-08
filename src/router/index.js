import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

//screens
import App from '../Screens/App'
import Auth from '../Screens/Auth'
import MapScreen from '../Screens/Map'
import MapList from '../Screens/List'

//sub routing
import RouteAuth from './RouteAuth'
import RouteMap from './RouteMap'
import RouteMapList from './RouteMapList'
//helper function
import SubRouting from './SubRouting'
//redux
import store from '../Store';

const routes = [
    {
        path: '/',
        component: App,
        exact: true,
        isolate:'private'
    },
    {
        path: "/auth",
        component: Auth,
        isolate: "public",
        routes: RouteAuth.routes,
    },
    {
        path: "/map",
        component: MapScreen,
        isolate: "private",
        routes: RouteMap.routes,
    },
    {
        path: "/list",
        component: MapList,
        isolate: "private",
        routes: RouteMapList.routes,
    }
]

const AppRoute = () => (
	<div className="h-100">
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                {routes.map((route, i) => (
                    <SubRouting key={i} {...route} />
                ))}
                </Switch>
            </BrowserRouter>
        </Provider>
	</div>
);

export default AppRoute;