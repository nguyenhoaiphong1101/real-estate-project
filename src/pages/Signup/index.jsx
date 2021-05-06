import React from 'react';
import './styles.scss';
import { Row, Col } from "antd";
import FormSignup from "./components/FormSignup"
import CarouselLogin from "../Login/components/CarouselLogin"


function Signup() {
    return (
        <div>
            <Row>
                <Col span={12}><FormSignup /></Col>
                <Col span={12}><CarouselLogin /></Col>
            </Row>
        </div>
    );
}

export default Signup;