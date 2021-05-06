import React, { useState } from 'react';
import './styles.scss';
import { Row, Col } from 'antd';
import Feature from './components/Feature';
function SectionFeatures() {
    const [arr1, setArr1] = useState([
        {
            icon: "flaticon-paint",
            label: "Loại",
            value: "Nhà"
        },
        {
            icon: "flaticon-bone",
            label: "Vật nuôi",
            value: "Có"
        },
        {
            icon: "flaticon-chair",
            label: "Nội thất",
            value: "Có"
        },
        {
            icon: "flaticon-fan",
            label: "Làm mát",
            value: "Có"
        },
    ]);
    const [arr2, setArr2] = useState([
        {
            icon: "flaticon-bathtub",
            label: "Phòng ngủ",
            value: "3"
        },
        {
            icon: "flaticon-pillow",
            label: "Phòng tắm",
            value: "4"
        },
        {
            icon: "flaticon-mail",
            label: "Hộp thư",
            value: "Có"
        },
        {
            icon: "flaticon-ruler",
            label: "Kích thước",
            value: "3,000 Sqft"
        },
    ]);
    const [disable, setDisable] = useState('');
    function showMore(e) {
        e.preventDefault();
        setArr1([...arr1, {
            icon: "flaticon-key",
            label: "ID",
            value: "BPFXQEI"
        },
        {
            icon: "flaticon-garage",
            label: "Đậu xe",
            value: "Có"
        },
        {
            icon: "flaticon-history",
            label: "Năm xây dựng",
            value: "1979"
        },])
        setArr2([...arr2, {
            icon: "flaticon-new",
            label: "Tình trạng",
            value: "Mới"
        },
        {
            icon: "flaticon-ruler",
            label: "Kích thước lô",
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
            <h4 className="title">Đặc điểm</h4>
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