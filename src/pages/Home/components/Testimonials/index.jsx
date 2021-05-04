import React from 'react';
import './styles.scss';
import { Row, Col } from 'antd';
import { Rate } from 'antd';



function Testimonials(props) {
    return (
        <div className="container">
            <div className="testimonials-title">
                <h5>Testimonials</h5>
                <h2>What Are People Saying</h2>
            </div>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <div className="testimonials-item">
                        <div className="testimonials-item-body">
                            <h5>Perfect service</h5>
                            <Rate value="5" disabled="true" className="testimonials-item-body-rate"></Rate>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit doloribus saepe! Dolores deleniti vitae dolor voluptas, laborum expedita doloribus illo explicabo nam magnam praesentium suscipit ducimus adipisci vero culpa.</p>
                        </div>

                        <div className="testimonials-item-author">
                            <img src="http://androthemes.com/themes/react/acres/assets/img/people/1.jpg" alt="#" />
                            <div className="testimonials-item-author-inner">
                                <h6>John Mishlen</h6>
                                <span>Executive CEO at company</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="testimonials-item">
                        <div className="testimonials-item-body">
                            <h5>Competitive prices</h5>
                            <Rate value="4" disabled="true" className="testimonials-item-body-rate"></Rate>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit doloribus saepe! Dolores deleniti vitae dolor voluptas, laborum expedita doloribus illo explicabo nam magnam praesentium suscipit ducimus adipisci vero culpa.</p>
                        </div>

                        <div className="testimonials-item-author">
                            <img src="http://androthemes.com/themes/react/acres/assets/img/people/2.jpg" alt="#" />
                            <div className="testimonials-item-author-inner">
                                <h6>Moe Sondi</h6>
                                <span>Executive CEO at company</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="testimonials-item">
                        <div className="testimonials-item-body">
                            <h5>Great agents</h5>
                            <Rate value="4" disabled="true" className="testimonials-item-body-rate"></Rate>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit doloribus saepe! Dolores deleniti vitae dolor voluptas, laborum expedita doloribus illo explicabo nam magnam praesentium suscipit ducimus adipisci vero culpa.</p>
                        </div>

                        <div className="testimonials-item-author">
                            <img src="http://androthemes.com/themes/react/acres/assets/img/people/3.jpg" alt="#" />
                            <div className="testimonials-item-author-inner">
                                <h6>Mandy Floss</h6>
                                <span>Executive CEO at company</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    );
}

export default Testimonials;