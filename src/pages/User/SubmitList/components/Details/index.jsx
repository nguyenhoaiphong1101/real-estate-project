import React from 'react';
import "./styles.scss";
import { Row, Col } from "antd";
import Button from "../../../../../components/Button"
import { Checkbox } from 'antd';

function Details(props) {
    return (
        <div className="detail">
            <Row >
                <Col span={12} className="form-group pr-20">
                    <label>Property ID</label>
                    <input type="text" className="form-control" placeholder="Property ID" name="id" />
                </Col>
                <Col span={12} className="form-group pr-20">
                    <label>Beds</label>
                    <input type="text" className="form-control" placeholder="Number Of Beds" name="beds" />
                </Col>
                <Col span={12} className="form-group pr-20">
                    <label>Bathrooms</label>
                    <input type="text" className="form-control" placeholder="Number Of Bathrooms" name="baths" />
                </Col>
                <Col span={12} className="form-group pr-20">
                    <label>Condition</label>
                    <input type="text" className="form-control" placeholder="Property Condition" name="condition" />
                </Col>
                <Col span={12} className="form-group pr-20">
                    <label>Year Built</label>
                    <input type="text" className="form-control" placeholder="Property Year Built" name="built" />
                </Col>
                <Col span={12} className="form-group pr-20">
                    <label>Neighborhood</label>
                    <input type="text" className="form-control" placeholder="Property Neighborhood" name="neighborhood" />
                </Col>
            </Row>
            <div className="form-group">
                <Checkbox className="checkbox"></Checkbox>
                <label>I Agree to the terms & Conditions of Property Submission</label>
            </div>
            <Button className="btn-custom" value="Submit Listing"></Button>
        </div>

    );
}

export default Details;