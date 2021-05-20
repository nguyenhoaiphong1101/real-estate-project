import React, { useEffect } from 'react';
import Header from "./components/Header"
import Menu from "./components/Menu"
import AdminRouting from "./components/Routing"
import "./styles.scss"
import {
    BrowserRouter as BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";


function AdminWrapper() {

    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('role') !== 'ADMIN') {
            history.push('/error')
        }
    }, [])

    return (
        <div className="admin-manage">
            <div style={{ display: 'flex' }} className="admin-manage-menu">
                <BrowserRouter>
                    <Menu />
                    <AdminRouting />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default AdminWrapper;