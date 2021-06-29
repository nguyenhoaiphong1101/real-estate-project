import React from 'react';
import { Row, Col } from 'antd';
import './styles.scss';
import Content from '../Content';
import SideBar from '../Sidebar';

function SectionBody(props) {
    return (
        <div className="section-body-wrapper">
            <div className="container">
                <Row>
                    <Col span={16}><Content isRender={props.isRender} /></Col>
                    <Col span={8}><SideBar isRender={props.isRender}/></Col>
                </Row>
            </div>
        </div>
    );
}

export default SectionBody;