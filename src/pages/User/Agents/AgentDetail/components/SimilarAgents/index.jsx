import React from 'react';
import "./styles.scss"
import { Row, Col } from "antd"
import ThumbnailAgent from "../../../../../../components/Thumbnail/ThumbnailAgent"

function SimilarAgents(props) {
    return (
        <div className="similar-agents">
            <h4>Similar Agents</h4>
            <Row>
                <Col span={8} className="pr-10">
                    <ThumbnailAgent />
                </Col>
                <Col span={8} className="pr-10">
                    <ThumbnailAgent />
                </Col>
                <Col span={8} className="pr-10">
                    <ThumbnailAgent />
                </Col>
            </Row>
        </div>
    );
}

export default SimilarAgents;