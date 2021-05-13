import React from 'react';
import "./styles.scss"
import { Row, Col } from "antd"
import ThumbnailPrimary from "../../../components/Thumbnail/ThumbnailPrimary"
import FormCommentAgent from "./components/FormCommentAgent"
import SimilarAgents from "./components/SimilarAgents"
import SendMessageFrom from "./components/SendMessageFrom"

function AgentDetail(props) {
    return (
        <div className="agent-detail">
            <Row>
                <Col span={8}>
                    <div className="sticky">
                        <SendMessageFrom />
                    </div>
                </Col>
                <Col span={16}>
                    <div>
                        <Row>
                            <Col span={12} className="mr-mb">
                                <ThumbnailPrimary />
                            </Col>
                            <Col span={12} className="mr-mb">
                                <ThumbnailPrimary />
                            </Col>
                            <Col span={12} className="mr-mb">
                                <ThumbnailPrimary />
                            </Col>
                            <Col span={12} className="mr-mb">
                                <ThumbnailPrimary />
                            </Col>
                        </Row>
                    </div>
                    <FormCommentAgent />

                </Col>
            </Row>
            <div>
                <SimilarAgents />
            </div>
        </div>
    );
}

export default AgentDetail;