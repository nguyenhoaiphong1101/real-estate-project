import React from 'react';
import { Row, Col } from 'antd';
import './styles.scss'



function NeedMore(props) {
    return (
        <div className="section-needmore">
            <div className="container">
                <div className="needmore">
                    <Row className="needmore-content">
                        <Col span={8}>
                            <h3>Need More Information On Real Estate?</h3>
                        </Col>
                        <Col span={16}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quibusdam consectetur, nulla tempore quas iste, aliquid esse animi, delectus sed libero ad aspernatur magni hic nemo modi blanditiis quod corporis!</p>
                            <a className="needmore-content-btn" href="#">Find Out More</a>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    );
}

export default NeedMore;