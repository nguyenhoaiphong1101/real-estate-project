import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './styles.scss';
import Images from './../../constants/Images'


function Footer(props) {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="footer-top">
                    <Row  className="footer-col-wrap">
                        <Col span={12} className="footer-col col-1">
                            <img className="nav-logo" src={Images.LOGO} alt="logo" />
                            <p>Tập trung vào chất lượng công trình, đảm bảo an toàn, dựng lên đẳng cấp và tạo ra lợi ích cho mọi người
                        </p>
                        </Col>
                        <Col span={12} className="footer-col col-2">
                            <Row className="align-right">
                                <Col span={8}>
                                    <h2>Danh mục</h2>
                                    <ul>
                                        <li><a href="/#">Tìm kiếm</a></li>
                                        <li><a href="/#">Thêm danh sách</a></li>
                                        <li><a href="/#">Danh sách</a></li>
                                        <li><a href="/#">Blog</a></li>
                                    </ul>
                                </Col>
                                <Col span={8}>
                                    <h2>Thông tin</h2>
                                    <ul>
                                        <li><a href="/#">Về chúng tôi</a></li>
                                        <li><a href="/#">Liên hệ chúng tôi</a></li>
                                        <li><a href="/#">Dịch vụ</a></li>
                                        <li><a href="/#">FAQ</a></li>
                                    </ul>
                                </Col>
                                <Col span={8}>
                                    <h2>Pháp lý</h2>
                                    <ul>
                                        <li><a href="/#">Chính sách bảo mật</a></li>
                                        <li><a href="/#">Chính sách hoàn trả</a></li>
                                        <li><a href="/#">Chính sách Cookie</a></li>
                                        <li><a href="/#">Điều khoản pháp lý</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="footer-bottom">
                    <Row>
                        <Col span={12}>
                            <p>
                                © Copyright 2022 - KTPM 2018
                        </p>
                        </Col>
                        <Col span={12}>
                            <ul className="nav-link">
                                <li><a href="/">Tìm nhà</a></li>
                                <li><a href="/">Thêm danh sách</a></li>
                                <li><a href="/">Xem đại lý</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    );
}

export default Footer;