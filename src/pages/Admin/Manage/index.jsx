import React from 'react';
import Header from "./components/Header"
import Menu from "./components/Menu"
import AdminRouting from "./components/Routing"
import "./styles.scss"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function AdminWrapper(props) {
    return (
        <div className="admin-manage">
            <Header />
            <div style={{ display: 'flex' }} className="admin-manage-menu">
                <Router>
                    <Menu />
                    <AdminRouting />
                </Router>
            </div>
        </div>
    );
}

export default AdminWrapper;