import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom'
import AuthService from './services/authentification-service';

const PrivateRoute= ({component: Component, ...rest}:any)=>(
    <Route {...rest} render={(props)=>{
        const isAuthenticated=AuthService.isValidAuth;
        if(!isAuthenticated){
            return <Redirect to={{pathname:"/"}}/>
        }

        return <Component {...props}/>
    }}/>
    
);

export default PrivateRoute;
