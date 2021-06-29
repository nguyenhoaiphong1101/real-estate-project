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
                            <h3>Muốn biết thêm thông tin về bất động sản?</h3>
                        </Col>
                        <Col span={16}>
                            <p>Hàng ngàn ngôi nhà với đầy đủ mẫu mã, kiểu dáng ở khắp mọi nơi đang chờ bạn lựa chọn. Hãy đến ngay với chúng tôi để có một sửa lựa chọn hoàn hảo dành cho bạn!</p>
                            <a className="needmore-content-btn" href="#">Tìm hiểu thêm</a>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    );
}

export default NeedMore;