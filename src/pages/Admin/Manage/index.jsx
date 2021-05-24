import React, { useEffect } from 'react';
import Header from "./components/Header"
import Menu from "./components/Menu"
import AdminRouting from "./components/Routing"
import { Row, Col } from "antd"
import "./styles.scss"
import {
    BrowserRouter as BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import ManageAccount from './components/ManageAccount';


function AdminWrapper() {

    // const history = useHistory();

    // useEffect(() => {
    //     if (localStorage.getItem('role') !== 'ADMIN') {
    //         history.push('/error')
    //     }
    // }, [])

    return (
        <div className="admin-manage">
            <Header />
            <div style={{ display: 'flex' }} className="admin-manage-menu">
                <BrowserRouter>
                    <Row style={{ width: '100%' }}>
                        <Col span={4} style={{ backgroundColor: '#f1f1f1' }}>
                            <Menu />
                        </Col>
                        <Col span={20} className="admin-col" >
                            <div className="admin-table">
                                <AdminRouting />
                            </div>
                        </Col>
                    </Row>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default AdminWrapper;