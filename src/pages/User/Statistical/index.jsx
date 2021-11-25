import React, { useState } from 'react';
import { Select, Row, Col, Tooltip } from 'antd';
import { Bar, Doughnut, Line } from "react-chartjs-2"
import { Chart } from "chart.js/auto"
import "./styles.scss"
import ThumbnailPrimary from '../../../components/Thumbnail/ThumbnailPrimary';
import ThumbnailExtra from '../../../components/Thumbnail/ThumbnailExtra';

function Statistical(props) {

    const [typeChart, setTypeChart] = useState("1")

    const [dataChart, setDataChart] = useState({
        label: 'Số lượng bất động sản ( BĐS )',
        color: 'rgba(149,125,173,0.5)',
        colorBorder: 'rgba(149,125,173,1)',
        data: [35, 67, 48, 92, 100, 56, 22, 60, 78, 200, 265, 195],
    })

    const changeAmount = () => {
        setDataChart({
            label: 'Số lượng bất động sản ( BĐS )',
            color: 'rgba(149,125,173,0.5)',
            colorBorder: 'rgba(149,125,173,1)',
            data: [35, 67, 48, 92, 100, 56, 22, 60, 78, 200, 265, 195],
        })
    }
    const changeMoney = () => {
        setDataChart({
            label: 'Giá trị bất động sản ( tỷ VNĐ )',
            color: 'rgba(97,199,199,0.5)',
            colorBorder: 'rgba(97,199,199,1)',
            data: [11, 23, 48, 33, 100, 67, 57, 12, 98, 110, 57, 150],
        })
    }
    const changeArea = () => {
        setDataChart({
            label: 'Diện tích bất động sản ( nghìn m2 )',
            color: 'rgba(166,87,10,0.5)',
            colorBorder: 'rgba(166,87,10,1)',
            data: [23, 11, 90, 50, 60, 34, 67, 82, 47, 68, 121, 90],
        })
    }

    const listDemo1 =
    {
        id: 1,
        status: "OPEN",
        type_apartment: "Bán",
        author: {
            full_name: "Nguyễn Hoài Phong"
        },
        created_at: "11/01/2000",
        address: "Quận 7 Thành phố Hồ Chí Minh",
        total_price: 4000000000,
        title: "Biệt thự đầy đủ tiện nghi cần bán gấp",
        bedroom_quantity: 4,
        bathroom_quantity: 3,
        area: 500,
    }
    const listDemo2 =
    {
        id: 2,
        status: "OPEN",
        type_apartment: "Bán",
        author: {
            full_name: "Nguyễn Hoài Phong"
        },
        created_at: "11/01/2000",
        address: "Quận 7 Thành phố Hồ Chí Minh",
        total_price: 4000000000,
        title: "Biệt thự đầy đủ tiện nghi cần bán gấp",
        bedroom_quantity: 4,
        bathroom_quantity: 3,
        area: 500,
    }
    const listDemo3 =
    {
        id: 3,
        status: "OPEN",
        type_apartment: "Bán",
        author: {
            full_name: "Nguyễn Hoài Phong"
        },
        created_at: "11/01/2000",
        address: "Quận 7 Thành phố Hồ Chí Minh",
        total_price: 4000000000,
        title: "Biệt thự đầy đủ tiện nghi cần bán gấp",
        bedroom_quantity: 4,
        bathroom_quantity: 3,
        area: 500,
    }


    return (
        <div className="main-statis">
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
            <div className="content-statis">
                <h1 className="title">Biểu đồ thống kê</h1>
                <div className="list-search">
                    <div className="group-search">
                        <label>Thành phố:</label>
                        <Select className="select" defaultValue="1" style={{ width: 200 }} >
                            <Select.Option value="1">Hồ Chí Minh</Select.Option>
                            <Select.Option value="2">Vũng Tàu</Select.Option>
                            <Select.Option value="3">Hà Nội</Select.Option>
                        </Select>
                    </div>
                    <div className="group-search">
                        <label>Thống kê theo:</label>
                        <Select className="select" defaultValue="1" onChange={(e) => {
                            if (e === "1") {
                                changeAmount();
                            } else if (e === "2") {
                                changeMoney();
                            } else if (e === "3") {
                                changeArea();
                            }
                        }} style={{ width: 200 }} >
                            <Select.Option value="1">Số lượng bất động sản</Select.Option>
                            <Select.Option value="2">Giá trị</Select.Option>
                            <Select.Option value="3">Diện tích</Select.Option>
                        </Select>
                    </div>
                    <div className="group-search">
                        <label>Năm:</label>
                        <Select className="select" defaultValue="2" style={{ width: 150 }} >
                            <Select.Option value="1">2020</Select.Option>
                            <Select.Option value="2">2021</Select.Option>
                            <Select.Option value="3">2022</Select.Option>
                        </Select>
                    </div>
                    <div className="group-search">
                        <label>Biểu đồ:</label>
                        <Select className="select" defaultValue="1" onChange={(e) => { setTypeChart(e) }} style={{ width: 150 }} >
                            <Select.Option value="1">Cột</Select.Option>
                            <Select.Option value="2">Đường</Select.Option>
                        </Select>
                    </div>

                </div>
                <Row className="main-chart">
                    <Col span={18}>
                        <div className="left-chart">
                            {typeChart === "1" ?
                                <Bar
                                    className="chart"
                                    height={500}
                                    data={{
                                        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                                        datasets: [{
                                            label: dataChart.label,
                                            data: dataChart.data,
                                            backgroundColor: dataChart.color,
                                            borderColor: dataChart.colorBorder,
                                            hoverBackgroundColor: dataChart.colorBorder,
                                            borderWidth: 1
                                        }]
                                    }}
                                    options={{
                                        maintainAspectRatio: false,
                                    }}
                                />
                                :
                                <Line
                                    className="chart"
                                    height={500}
                                    data={{
                                        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                                        datasets: [{
                                            label: dataChart.label,
                                            data: dataChart.data,
                                            fill: true,
                                            pointBorderWidth: 5,
                                            tension: .2,
                                            backgroundColor: dataChart.color,
                                            borderColor: dataChart.colorBorder,
                                            hoverBackgroundColor: dataChart.colorBorder,
                                            borderWidth: 1
                                        }]
                                    }}
                                    options={{
                                        maintainAspectRatio: false,
                                    }}
                                />
                            }
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="right-chart">
                            <div className="group-item">
                                <i class="far fa-clipboard" style={{ color: "rgb(149,125,173)" }}></i>
                                <div>
                                    <label>Số lượng bất động sản</label>
                                    <p>12.000 BĐS</p>
                                </div>
                            </div>
                            <div className="group-item">
                                <i class="far fa-money-bill-alt" style={{ color: "#61c7c7" }}></i>
                                <div>
                                    <label>Tổng giá trị khu vực</label>
                                    <p>279,125 tỷ VNĐ</p>
                                </div>
                            </div>
                            <div className="group-item">
                                <i class="fas fa-coins" style={{ color: "#ffd673" }}></i>
                                <div>
                                    <label>Giá trị trung bình</label>
                                    <p>4,5 tỷ VNĐ</p>
                                </div>
                            </div>
                            <div className="group-item">
                                <i class="fas fa-chart-area" style={{ color: "#ffa852" }}></i>
                                <div>
                                    <label>Tổng diện tích khu vưc</label>
                                    <p>657 nghìn m2</p>
                                </div>
                            </div>
                            <div className="group-item">
                                <i class="fas fa-mountain" style={{ color: "#a6570a" }}></i>
                                <div>
                                    <label>Diện tích trung bình</label>
                                    <p>0,49 nghìn m2</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="rating">
                    <Col span={24}>
                        <h1 className="title-rating">Bảng đánh giá xếp hạng</h1>
                    </Col>
                    <Col span={8}>
                        <div className="group-rating">
                            <label >Bài đăng</label>
                            <p ><span style={{ color: "#ffda81" }}>1st.</span> Vũng Tàu ( 15.000 BĐS )</p>
                            <p ><span style={{ color: "#c1c3c4" }}>2nd.</span> Hồ Chí Minh ( 7.000 BĐS )</p>
                            <p ><span style={{ color: "#754821" }}>3rd.</span> Hà Nội ( 5.500 BĐS )</p>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="group-rating">
                            <label style={{ color: "#61c7c7" }}>Tổng giá trị</label>
                            <p ><span style={{ color: "#ffda81" }}>1st.</span> Hồ Chí Minh ( 320 tỷ )</p>
                            <p ><span style={{ color: "#c1c3c4" }}>2nd.</span> Vũng Tàu ( 400 tỷ )</p>
                            <p ><span style={{ color: "#754821" }}>3rd.</span> Hà Nội ( 100 tỷ )</p>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="group-rating">
                            <label style={{ color: "#ffa852" }}>Tổng diện tích</label>
                            <p ><span style={{ color: "#ffda81" }}>1st.</span> Vũng Tàu ( 215.000 m2 )</p>
                            <p ><span style={{ color: "#c1c3c4" }}>2nd.</span> Hồ Chí Minh ( 120.000 m2 )</p>
                            <p ><span style={{ color: "#754821" }}>3rd.</span> Hà Nội ( 95.500 m2 )</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <h1 style={{ textAlign: "center", fontWeight: "600", fontSize: "2.2rem", marginTop: "60px", marginBottom: "40px" }}>Một số bất động sản nổi bật</h1>
                    </Col>
                    <Col span={16}>
                        <Col style={{ paddingBottom: "10px" }} span={24}>
                            <ThumbnailExtra listLatestNew={listDemo2} />
                        </Col>
                        <Col span={24}>
                            <ThumbnailExtra listLatestNew={listDemo3} />
                        </Col>
                    </Col>
                    <Col span={8}>
                        <ThumbnailPrimary listLatestNew={listDemo1} />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Statistical;