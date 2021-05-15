import React from 'react';
import './styles.scss';
import { Row, Col } from "antd";
import FromLogin from "./components/FormLogin"
import CarouselLogin from "./components/CarouselLogin"


function Login() {
    return (
        <div>
            <Row>
                <Col span={12}><FromLogin /></Col>
                <Col span={12}><CarouselLogin /></Col>
            </Row>
        </div>
    );
}

export default Login;