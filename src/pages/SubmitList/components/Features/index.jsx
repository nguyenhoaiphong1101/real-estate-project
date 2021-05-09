import React from 'react';
import { Row, Col } from "antd"
import "./styles.scss"

function Features(props) {
    return (
        <div className="submit-list-features">
            <Row>
                <Col span={8} className="ml-mr">
                    <label className="acr-listing-feature">
                        <input type="checkbox" name="feature1" />
                        <i className="acr-feature-check fas fa-check"></i>
                        <i className="acr-listing-feature-icon flaticon-bone"></i>
                        Pet Friendly
                    </label>
                </Col>
                <Col span={8} className="ml-mr">
                    <label className="acr-listing-feature">
                        <input type="checkbox" name="feature2" />
                        <i className="acr-feature-check fas fa-check"></i>
                        <i className="acr-listing-feature-icon flaticon-chair"></i>
                        Furnished
                    </label>
                </Col>
                <Col span={8} className="ml-mr">
                    <label className="acr-listing-feature">
                        <input type="checkbox" name="feature3" />
                        <i className="acr-feature-check fas fa-check"></i>
                        <i className="acr-listing-feature-icon flaticon-fan"></i>
                        Cooling
                    </label>
                </Col>
                <Col span={8} className="ml-mr">
                    <label className="acr-listing-feature">
                        <input type="checkbox" name="feature4" />
                        <i className="acr-feature-check fas fa-check"></i>
                        <i className="acr-listing-feature-icon flaticon-garage"></i>
                        Parking
                    </label>
                </Col>
                <Col span={8} className="ml-mr">
                    <label className="acr-listing-feature">
                        <input type="checkbox" name="feature5" />
                        <i className="acr-feature-check fas fa-check"></i>
                        <i className="acr-listing-feature-icon flaticon-mail"></i>
                        Mailbox
                    </label>
                </Col>
                <Col span={8} className="ml-mr">
                    <label className="acr-listing-feature">
                        <input type="checkbox" name="feature6" />
                        <i className="acr-feature-check fas fa-check"></i>
                        <i className="acr-listing-feature-icon flaticon-view"></i>
                        City View
                    </label>
                </Col>
            </Row>
        </div>
    );
}

export default Features;