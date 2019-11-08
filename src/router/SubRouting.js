import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookie from '../cookie'

const isLoggedIn = () => {
    var cookieData = Cookie.get('uid');
    return cookieData.jwt ? true : false;
}
const PublicRoute = (props) => (
    <Route path={props.path} 
        render={() => {
            if(props.redirect)
                return <Redirect to={{ pathname: props.redirect }}/> 
            if (isLoggedIn())
                return <Redirect to={{ pathname: '/' }}/> 
            else
                return <props.component {...props}/>      
            }}
    />
)
const PrivateRoute = (props) => (
    
    <Route path={props.path} 
        render={() => {
            if(props.redirect)
                return <Redirect to={{ pathname: props.redirect }}/> 
            if (isLoggedIn())
                return <props.component {...props}/>
            else
                return <Redirect to={{pathname: '/auth'}}/>     
            }}
    />
)

export default function SubRouting(props) {
    switch (props.isolate) {
        case "public":
            return <PublicRoute {... props}/>;
        case "private":
            return <PrivateRoute {... props}/>;
        default:
            break;
    }
}