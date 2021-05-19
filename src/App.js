import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from "react-router";
import UserWrapper from './pages/User';
import AdminWrapper from './pages/Admin/Manage';
import Login from './pages/User/Login';


function App() {
    const token = localStorage.getItem('access_token');
    const checkLogin = () => {
        if (token == null) {
            return (
                <UserWrapper />
            )
        } else {
            return (
                <Redirect to="/" />
            )
        }
    }
    const checkSignup = () => {
        if (token == null) {
            return (
                <UserWrapper />
            )
        } else {
            return (
                <Redirect to="/" />
            )
        }
    }
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route path="/" exact>
                        <UserWrapper />
                    </Route>
                    <Route path="/dang-nhap" >
                        {checkLogin()}
                    </Route>
                    <Route path="/dang-ky" >
                        {checkSignup()}
                    </Route>
                    <Route path="/admin" exact>
                        <AdminWrapper />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default App;
