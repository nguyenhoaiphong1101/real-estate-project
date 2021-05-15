import React from 'react';
import "./styles.scss"
import { Row, Col } from "antd"
import { Checkbox } from 'antd';
import Button from "../../../../../../components/Button"


function FormCommentAgent(props) {
    return (
        <div className="from-comment-agent">
            <h4>Leave Freddy a Comment</h4>
            <Row className="form-group">
                <Col span={12} className="form-group pr-20">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" name="fname" />
                </Col>
                <Col span={12} className="form-group pr-20">
                    <label>Email Address</label>
                    <input type="text" className="form-control" placeholder="Email Address" name="email" />
                </Col>
                <Col span={24} className="form-group">
                    <label>Your Message</label>
                    <textarea name="comment" className="form-control" rows="4" placeholder="Type your comment..." ></textarea>
                </Col>
            </Row>
            <div className="form-group mt-20" >
                <Checkbox className="checkbox"></Checkbox>
                <label>Notify me when I receive a reply to my comment</label>
            </div>
            <Button className="btn-custom" value="Post comment"></Button>
        </div>
    );
}

export default FormCommentAgent;