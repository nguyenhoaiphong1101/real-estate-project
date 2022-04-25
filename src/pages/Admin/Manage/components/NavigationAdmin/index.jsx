import React from 'react';
import { useHistory } from 'react-router';
import { Form, Input, Row, Col, Popover } from "antd"
import "./styles.scss"



function NavigationAdmin(props) {

    const removeLocal = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('role')
        localStorage.removeItem("user");
        window.location.pathname = "/";
    }

    const toHome = () => {
        window.location.pathname = "/";
    }
    const toInfo = () => {
        window.location.pathname = "/trang-ca-nhan";
    }
    const content = (
        <div className="popup-content-wrapper">
            <ul className="popup-content">
                <li onClick={() => toHome()}>Trang chủ</li>
                <li onClick={() => toInfo()}>Thông tin</li>
                <li onClick={() => removeLocal()}>Đăng xuất</li>
            </ul>
        </div>
    );
    return (
        <div className="admin-header">
            <Row style={{ height: '100%' }}>
                <Col span={2} offset={22}>
                    <div className="icon-wrapper">
                        <Popover className="popup" content={content} trigger="click">
                            <div className="circle">
                            </div>
                        </Popover>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default NavigationAdmin;