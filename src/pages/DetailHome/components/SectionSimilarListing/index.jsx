import React from 'react';
import { Row, Col } from 'antd';
import './styles.scss';
import ThumbnailPrimary from '../../../../components/Thumbnail/ThumbnailPrimary';
function SectionSimilarListing() {

    return (
        <div className="section-similar-listing">
            <h4 className="title">Danh sách tương tự</h4>
            <div className="container-fluid wrapper">
                <div className="list-feature">
                    <Row>
                        <Col span={12}>
                            <ThumbnailPrimary />
                        </Col>
                        <Col span={12}>
                            <ThumbnailPrimary />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default SectionSimilarListing;