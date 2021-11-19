import { Component } from "react";
import { Route } from "react-router";

const PrivateRoute = ({component:Component, ...rest}) => {
    return( 
        <Route{...rest}>{<component/>:<Redirect to="/"/>}</Route>
        )
    }
   