import React from 'react';
import "./styles.scss"
import { Row, Col } from "antd"
import SelectExtra from "../../../../components/SelectExtra"

const propertyStatus = [
    {
        key: -1,
        value: 'For Rent'
    },
    {
        key: 2,
        value: 'Featured'
    },
    {
        key: 3,
        value: 'For Sale'
    },
    {
        key: 4,
        value: 'Leased'
    },
    {
        key: 5,
        value: 'New Addition'
    },
    {
        key: 6,
        value: 'Sold'
    },
    {
        key: 7,
        value: 'Rental'
    },
    {
        key: 8,
        value: 'Reduced'
    },
    {
        key: 9,
        value: 'Special Offer'
    },
]

const propertyType = [
    {
        key: -1,
        value: 'House'
    },
    {
        key: 2,
        value: 'Apartment'
    },
    {
        key: 3,
        value: 'Condo'
    },
    {
        key: 4,
        value: 'Townhome'
    },
    {
        key: 5,
        value: 'Villa'
    },
    {
        key: 6,
        value: 'Duplex'
    },
]
const rentalPeriod = [
    {
        key: -1,
        value: 'Monthly'
    },
    {
        key: 2,
        value: 'Yearly'
    },
]

function BasicInfomation(props) {
    return (
        <Row className="basicinfomation">
            <Col span={24} className="form-group">
                <label>Property Description</label>
                <textarea name="content" className="form-control" rows="4" placeholder="Property Description"></textarea>
            </Col>
            <Col span={12} className="form-group pr-20">
                <label>Property Name</label>
                <input type="text" className="form-control" placeholder="Property Name" name="name" />
            </Col>
            <Col span={12} className="form-group">
                <label>Property Status</label>
                <SelectExtra className="form-control" name="status" listdata={propertyStatus} >
                    {/* {propertyStatus.map((item, index) => {
                        return (
                            <option value={item.value} key={item.key}  >
                                {item.value}
                            </option>
                        );
                    })} */}
                </SelectExtra>
            </Col>
            <Col span={12} className="form-group pr-20">
                <label>Property Type</label>
                <SelectExtra className="form-control" name="type" listdata={propertyType} >

                </SelectExtra>
            </Col>
            <Col span={12} className="form-group">
                <label>Property Price</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span>$</span>
                    </div>
                    <input type="text" className="form-control" name="price" placeholder="Property Price" />
                </div>
            </Col>
            <Col span={12} className="form-group pr-20">
                <label>Rental Period</label>
                <SelectExtra className="form-control" name="period" listdata={rentalPeriod} >

                </SelectExtra>
            </Col>
            <Col span={12} className="form-group">
                <label>Property Space (Sqft)</label>
                <input type="text" className="form-control" placeholder="Property Space (Sqft)" name="space" />
            </Col>
            <Col span={24} className="form-group">
                <label>Property Video</label>
                <input type="text" className="form-control" placeholder="Property Video URL" name="video" />
            </Col>
        </Row>
    );
}

export default BasicInfomation;