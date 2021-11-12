import { Col, Row } from 'antd';
import React from 'react';
import CardCompare from './components/CardCompare';
import "./styles.scss"

const item1 = {
    src: "https://neohouse.vn/wp-content/uploads/2020/06/biet-thu-dep-nhat-viet-nam-1.jpg",
    phongngu: 3,
    phongtam: 3,
    sotang: 2,
    nvs: 4,
    noithat: "Đầy đủ",
    kichthuoc: 250,
    tinhtrang: 1,
    mattien: "Đường quốc lộ",
    huongnha: "Đông Nam",
    huongbancong: "Đông",
}
const item2 = {
    src: "https://lh3.googleusercontent.com/proxy/c2MP7ZnVUl5d7_93AW9Vvl1hZsafc-fKbWkaxLoMV99nv8Hehwaab20j_KxlUSl-xn4Zcmu_2uZF5kfsL-vXSomzxtYk9m5MvWF1ZIG8_94rgKKYnCXpTmZLLdiZ",
    phongngu: 5,
    phongtam: 6,
    sotang: 3,
    nvs: 6,
    noithat: "Đầy đủ",
    kichthuoc: 350,
    tinhtrang: 1,
    mattien: "Đường quốc lộ",
    huongnha: "Đông Nam",
    huongbancong: "Đông",
}
const item3 = {
    src: "https://thietkenoithat.com/Portals/0/xNews/uploads/2017/9/1/mau-thiet-ke-biet-thu-kinh-sang-trong-cao-cap3.jpg",
    phongngu: 4,
    phongtam: 7,
    sotang: 5,
    nvs: 4,
    noithat: "Đầy đủ",
    kichthuoc: 450,
    tinhtrang: 1,
    mattien: "Đường quốc lộ",
    huongnha: "Đông Nam",
    huongbancong: "Đông",
}


function Compare(props) {
    return (
        <div className="main-compare">
            <div className="sub-header">
                <div className="container">
                    <div className="subheader-inner">
                        <h1 className="title">{props.title}</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a>
                                        <i className="fas fa-home"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    {props.title}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-compare">
                <div className="title">
                    Tổng quan các bất động sản
                </div>
                <Row>
                    <Col span={8}>
                        <CardCompare title="Nhà quận 9 - TPHCM" price="4.000.000.000 VNĐ" keyIndex={1} item={item1} />
                    </Col>
                    <Col span={8}>
                        <CardCompare title="Nhà quận Bình Thạnh - TPHCM" price="7.000.000.000 VNĐ" keyIndex={2} item={item2} />
                    </Col>
                    <Col span={8}>
                        <CardCompare title="Nhà quận 7 - TPHCM" price="10.000.000.000 VNĐ" keyIndex={3} item={item3} />
                    </Col>
                </Row>

            </div>
        </div>
    );
}

export default Compare;