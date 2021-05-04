import React from 'react';
import { Col, Row } from 'antd';
import './styles.scss';
import ThumbnailPrimary from '../../../../components/Thumbnail/ThumbnailPrimary';
import ThumbnailExtra from '../../../../components/Thumbnail/ThumbnailExtra';

function SectionTopList() {
    return (
        <div className="section-top-list">
            <div className="container">
                <div className="title-wrapper">
                    <h5 class="sub-title">Find Your Home</h5>
                    <h2 class="title">Recent Listings</h2>
                </div>
                <Row>
                    <Col span={16}>
                        <div className="item">
                            <ThumbnailExtra />
                        </div>
                        <div className="item">
                            <ThumbnailPrimary />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="item">
                            <ThumbnailPrimary />
                        </div>
                        <div className="item">
                            <ThumbnailPrimary />
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    );
}

export default SectionTopList;