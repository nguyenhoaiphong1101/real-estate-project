import React from 'react';
import { Row, Col } from 'antd';
import './styles.scss';
import Content from '../Content';
import SideBar from '../Sidebar';

function SectionBody() {
    return (
        <div className="section-body-wrapper">
            <div className="container">
                <Row>
                    <Col span={16}><Content /></Col>
                    <Col span={8}><SideBar /></Col>
                </Row>
            </div>
        </div>
    );
}

export default SectionBody;