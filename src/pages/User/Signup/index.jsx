import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Row, Col } from "antd";
import FormSignup from "./components/FormSignup"
import CarouselLogin from "../Login/components/CarouselLogin"
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header';

function Signup() {
    const history = useHistory();
    const [enableFooter, setEnableFooter] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token !== null) {
            history.push('/');
        }
    }, [])
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