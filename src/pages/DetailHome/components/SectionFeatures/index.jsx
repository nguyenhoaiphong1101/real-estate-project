import React, { useState } from 'react';
import './styles.scss';
import { Row, Col } from 'antd';
import Feature from './components/Feature';
function SectionFeatures() {
    const [arr1, setArr1] = useState([
        {
            icon: "flaticon-paint",
            label: "Propery Type",
            value: "House"
        },
        {
            icon: "flaticon-bone",
            label: "Pet Friendly",
            value: "Yes"
        },
        {
            icon: "flaticon-chair",
            label: "Furnished",
            value: "Yes"
        },
        {
            icon: "flaticon-fan",
            label: "Cooling",
            value: "Yes"
        },
    ]);
    const [arr2, setArr2] = useState([
        {
            icon: "flaticon-bathtub",
            label: "Bathrooms",
            value: "3"
        },
        {
            icon: "flaticon-pillow",
            label: "Bed Rooms",
            value: "4"
        },
        {
            icon: "flaticon-mail",
            label: "Mail box",
            value: "Yes"
        },
        {
            icon: "flaticon-ruler",
            label: "Property Size",
            value: "3,000 Sqft"
        },
    ]);
    const [disable, setDisable] = useState('');
    function showMore(e) {
        e.preventDefault();
        setArr1([...arr1, {
            icon: "flaticon-key",
            label: "Property ID",
            value: "BPFXQEI"
        },
        {
            icon: "flaticon-garage",
            label: "Parking",
            value: "Yes"
        },
        {
            icon: "flaticon-history",
            label: "Year Built",
            value: "1979"
        },])
        setArr2([...arr2, {
            icon: "flaticon-new",
            label: "Condition",
            value: "New"
        },
        {
            icon: "flaticon-ruler",
            label: "Lot Size",
            value: "89 Acres"
        },
        {
            icon: "flaticon-view",
            label: "View",
            value: "City View"
        },])
        setDisable('disable');
    }

    return (
        <div className="section-feature">
            <h4 className="title">Features</h4>
            <div className="container-fluid wrapper">
                <div className="list-feature">
                    <Row>
                        <Col span={12}>{arr1.map((item, index) => {
                            return <Feature key={index} icon={item.icon} label={item.label} value={item.value} />
                        })}</Col>
                        <Col span={12}>{arr2.map((item, index) => {
                            return <Feature key={index} icon={item.icon} label={item.label} value={item.value} />
                        })}</Col>
                    </Row>
                    <Row>
                        <button className={`show-more ${disable}`} onClick={showMore}>Show More</button>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default SectionFeatures;