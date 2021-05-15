import React from 'react';
import { Col, Row } from 'antd';
import './styles.scss';

function SectionFunction() {
    return (
        <div className="section-function">
            <div className="container">
                <Row>
                    <Col span={12}>
                        <div className="item-wrapper">
                            <i className="flaticon-sales-agent item--blue"></i>
                            <div className="content">
                                <h4>Mùa nhà?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</p>
                                <a className="btn-link item--blue">
                                    Tìm hiểu thêm
                                    <i className="fas fa-arrow-right item--blue">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="item-wrapper">
                            <i className="flaticon-sold item--green"></i>
                            <div className="content">
                                <h4>Bán nhà</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</p>
                                <a className="btn-link item--green">
                                    Tìm hiểu thêm
                                    <i className="fas fa-arrow-right item--green">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default SectionFunction;