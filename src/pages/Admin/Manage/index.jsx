import { Col, Row } from "antd";
import React from 'react';
import {
    BrowserRouter
} from "react-router-dom";
import Images from "../../../constants/Images";
import FooterAdmin from "./components/FooterAdmin/FooterAdmin";
import Menu from "./components/Menu";
import NavigationAdmin from "./components/NavigationAdmin";
import AdminRouting from "./components/Routing";
import "./styles.scss";


function AdminWrapper() {

    // const history = useHistory();

    // useEffect(() => {
    //     if (localStorage.getItem('role') !== 'ADMIN') {
    //         history.push('/error')
    //     }
    // }, [])

    return (
        <div className="admin-manage">
            <div style={{ display: 'flex' }} className="admin-manage-menu">
                <Row style={{ width: '100%' }}>
                    <Col span={5} className="col-sidebar">
                        <div className="logo-admin-wrapper">
                            <img src={Images.LOGO_ADMIN} alt="Real Estate" />
                        </div>
                        <Menu />
                    </Col>
                    <Col span={19} className="admin-col" >
                        <NavigationAdmin />
                        <AdminRouting />
                        <FooterAdmin />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AdminWrapper;