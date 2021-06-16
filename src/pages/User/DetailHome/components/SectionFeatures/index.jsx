import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Row, Col } from 'antd';
import Feature from './components/Feature';
import { useSelector } from 'react-redux';
function SectionFeatures() {
    const detailHome = useSelector(state => state.detailhome.detailHome)
    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);
    useEffect(() => {
        setArr1([
            {
                icon: "flaticon-paint",
                label: "Sân nhà",
                value: detailHome?.apartment_detail?.front_building
            },
            {
                icon: "flaticon-garage",
                label: "Lối vào nhà",
                value: detailHome?.apartment_detail?.entrance_building
            },
            {
                icon: "flaticon-chair",
                label: "Nội thất",
                value: detailHome?.apartment_detail?.furniture
            },
            {
                icon: "flaticon-fan",
                label: "Hướng nhà",
                value: detailHome?.apartment_detail?.house_building
            },
        ]);
        setArr2([
            {
                icon: "flaticon-pillow",
                label: "Phòng ngủ",
                value: detailHome?.apartment_detail?.bedroom_quantity
            },
            {
                icon: "flaticon-bathtub",
                label: "Phòng tắm",
                value: detailHome?.apartment_detail?.bathroom_quantity
            },
            {
                icon: "flaticon-bathtub",
                label: "Nhà vệ sinh",
                value: detailHome?.apartment_detail?.toilet_quantity
            },
            {
                icon: "flaticon-ruler",
                label: "Kích thước",
                value: detailHome?.area
            },
        ]);
    }, [detailHome]);
    const [disable, setDisable] = useState('');
    function showMore(e) {
        e.preventDefault();
        setArr1([...arr1, 
        {
            icon: "flaticon-garage",
            label: "Hướng ban công",
            value: detailHome?.apartment_detail?.balcony_direction
        },
        {
            icon: "flaticon-ruler",
            label: "Số tầng",
            value: detailHome?.apartment_detail?.floor_quantity
        },
       ])
        setArr2([...arr2, {
            icon: "flaticon-new",
            label: "Tình trạng",
            value: detailHome?.type_apartment
        },
        
        {
            icon: "flaticon-view",
            label: "View",
            value: detailHome?.overview
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
                            return <Feature key={index} icon={item?.icon} label={item?.label} value={item?.value} />
                        })}</Col>
                        <Col span={12}>{arr2.map((item, index) => {
                            return <Feature key={index} icon={item?.icon} label={item?.label} value={item?.value} />
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