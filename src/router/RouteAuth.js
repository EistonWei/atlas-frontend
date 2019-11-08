import React from 'react';

import LoginForm from '../Screens/AuthLogin'

export const routes = [
    {
        path: "/auth",
        isolate: "public",
        exact: true,
        redirect: "/auth/login",
    },
    {
        path: "/auth/login",
        isolate: "public",
        exact: true,
        component: LoginForm
    }
]
export default {
    routes
}