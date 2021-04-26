import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './footer.css';

function footer(props) {
    return (
        <div className="footer-container">
            <div className="footer-top">
                <Row>
                    <Col span={12} className="footer-col col-1">
                        <h2>LOGO</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam consequuntur tempora excepturi earum molestiae! Officia iste deleniti minima. Omnis vel minima cum alias est nostrum inventore at, eligendi nam?
                    </Col>
                    <Col span={12} className="footer-col col-2">
                        <Row>
                            <Col span={8}>
                                <h2>Menu</h2>
                                <ul>
                                    <li><a href="#">Find Home</a></li>
                                    <li><a href="#">Add Listing</a></li>
                                    <li><a href="#">Listing</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </Col>
                            <Col span={8}>
                                <h2>Infomation</h2>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </Col>
                            <Col span={8}>
                                <h2>Legal</h2>
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                    <li><a href="#">Cookie Policy</a></li>
                                    <li><a href="#">Legal Terms</a></li>
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
                            © Copyright 2020 - AndroThemes All Rights Reserved
                        </p>
                    </Col>
                    <Col span={12}>
                        <ul className="nav-link">
                            <li><a href="">Find a Home</a></li>
                            <li><a href="">Add Listing</a></li>
                            <li><a href="">View Agencies</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>

        </div>

    );
}

export default footer;