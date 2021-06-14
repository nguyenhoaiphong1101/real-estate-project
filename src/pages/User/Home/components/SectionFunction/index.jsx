import React from 'react';
import { Col, Row } from 'antd';
import './styles.scss';
import { useHistory } from 'react-router-dom';

function SectionFunction() {
    const history = useHistory();
    return (
        <div className="section-function">
            <div className="container">
                <Row>
                    <Col span={12}>
                        <div className="item-wrapper">
                            <i className="flaticon-sales-agent item--blue"></i>
                            <div className="content">
                                <h4>Mua nhà?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</p>
                                <a onClick={()=>{history.push('/nha-dat-ban')}} className="btn-link item--blue">
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
                                <h4>Thuê nhà</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</p>
                                <a onClick={()=>{history.push('/nha-dat-thue')}} className="btn-link item--green">
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