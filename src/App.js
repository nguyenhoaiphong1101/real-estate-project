import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router";
import UserWrapper from './pages/User';
import AdminWrapper from './pages/Admin/Manage';


function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route path="/" exact>
                        <UserWrapper />
                    </Route>
                    <Route path="/admin" >
                        <AdminWrapper />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default App;
