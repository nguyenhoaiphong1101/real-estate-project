import React from 'react';
import { Row, Col } from "antd";
import "./styles.scss"
import ThumbnailAgent from "../../../components/Thumbnail/ThumbnailAgent"
import ThumbnailSecondary from "../../../components/Thumbnail/ThumbnailSecondary"

function index(props) {
    return (
        <div className="agent-archive">
            <Row>
                <Col span={16}>
                    <Row>
                        <Col span={12} className="pl-pr">
                            <ThumbnailAgent />
                        </Col>
                        <Col span={12} className="pl-pr">
                            <ThumbnailAgent />
                        </Col>
                        <Col span={12} className="pl-pr">
                            <ThumbnailAgent />
                        </Col>
                        <Col span={12} className="pl-pr">
                            <ThumbnailAgent />
                        </Col>
                    </Row>
                </Col>
                <Col span={8} className="pl-pr">
                    <h4 className="title">Danh sách gần đây</h4>
                    <div >
                        <ThumbnailSecondary />
                        <ThumbnailSecondary />
                        <ThumbnailSecondary />
                        <ThumbnailSecondary />
                    </div>
                    <h4>Popular Categories</h4>
                    <ul>
                        <li>
                            <a href="#">
                                Living Rooms
                            <span>(24)</span>
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Real Estate
                            <span>(16)</span>
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Kitchens
                            <span>(32)</span>
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Flats
                            <span>(22)</span>
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Luxury
                            <span>(15)</span>
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bed Rooms
                            <span>(8)</span>
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>

    );
}

export default index;