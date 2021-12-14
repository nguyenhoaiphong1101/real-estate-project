import React, { useState } from 'react';
import { Select, Row, Col, Tooltip } from 'antd';
import { Bar, Doughnut, Line, Radar } from "react-chartjs-2"
import { Chart } from "chart.js/auto"
import "./styles.scss"
import ThumbnailPrimary from '../../../components/Thumbnail/ThumbnailPrimary';
import ThumbnailExtra from '../../../components/Thumbnail/ThumbnailExtra';

function Statistical(props) {
    const [targetChart, setTargetChart] = useState([
        {
            id: "1",
            title: "Giá trị"
        },
        {
            id: "2",
            title: "Diện tích"
        }
    ])
    const [typeChart, setTypeChart] = useState("1")
    const [categoryChart, setCategoryChart] = useState("1")
    const [target, setTarget] = useState("1")
    const [from, setFrom] = useState("100000000")
    const [to, setTo] = useState("100000000")


    const changeTarger = (e) => {
        setTarget("");
        if (e === "1") {
            setTargetChart([
                {
                    id: "1",
                    title: "Giá trị (tỷ)"
                },
                {
                    id: "2",
                    title: "Diện tích (nghìn m2)"
                }
            ])
        }
        if (e === "2") {
            setTargetChart([
                {
                    id: "3",
                    title: "Thành phố"
                },
                {
                    id: "1",
                    title: "Giá trị (tỷ)"
                }
            ])
        }
        if (e === "3") {
            setTargetChart([
                {
                    id: "3",
                    title: "Thành phố"
                },
                {
                    id: "2",
                    title: "Diện tích (nghìn m2)"
                }
            ])
        }
    }

    const [dataChart, setDataChart] = useState({
        label: 'Số lượng bất động sản theo giá trị ở Hồ Chí Minh',
        labelColumn: ["0,1 tỷ", "0,2 tỷ", "0,3 tỷ", "0,4 tỷ", "0,5 tỷ", "0,6 tỷ", "0,7 tỷ", "0,8 tỷ", "0,9 tỷ", "1 tỷ"],
        color: 'rgb(255, 214, 115,0.5)',
        colorBorder: 'rgba(255, 214, 115,1)',
        data: [35, 67, 48, 92, 100, 56, 22, 60, 78, 200],
    })

    const changeMoney = () => {
        setDataChart({
            label: 'Số lượng bất động sản theo giá trị ở Hồ Chí Minh',
            labelColumn: ["0,1 tỷ", "0,2 tỷ", "0,3 tỷ", "0,4 tỷ", "0,5 tỷ", "0,6 tỷ", "0,7 tỷ", "0,8 tỷ", "0,9 tỷ", "1 tỷ"],
            color: 'rgba(149,125,173,0.5)',
            colorBorder: 'rgba(149,125,173,1)',
            data: [35, 67, 48, 92, 100, 56, 22, 60, 78, 200],
        })
    }
    const changeArea = () => {
        setDataChart({
            label: 'Số lượng bất động sản theo diện tích ở Hồ Chí Minh',
            labelColumn: ["0,1 nghìn m2", "0,2 nghìn m2", "0,3 nghìn m2", "0,4 nghìn m2", "0,5 nghìn m2", "0,6 nghìn m2", "0,7 nghìn m2", "0,8 nghìn m2", "0,9 nghìn m2", "1 nghìn m2"],
            color: 'rgba(149,125,173,0.5)',
            colorBorder: 'rgba(149,125,173,1)',
            data: [45, 27, 78, 42, 60, 46, 12, 90, 34, 67],
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
                    <Row>
                        <Col span={18}>
                            <Row>
                                <Col span={8}>
                                    <div className="group-search">
                                        <div className="label-item">
                                            <label>Thống kê : </label>
                                        </div>
                                        <Select className="select" defaultValue="1" onChange={(e) => { setCategoryChart(e); changeTarger(e); }} style={{ width: 160 }} >
                                            <Select.Option value="1">Theo thành phố</Select.Option>
                                            <Select.Option value="2">Theo diện tích</Select.Option>
                                            <Select.Option value="3">Theo giá cả</Select.Option>
                                        </Select>
                                    </div>
                                </Col>
                                {categoryChart === "1" ?
                                    <Col span={8}>
                                        <div className="group-search">
                                            <div className="label-item">
                                                <label>Thành phố : </label>
                                            </div>
                                            <Select className="select" defaultValue="1" style={{ width: 160 }}  >
                                                <Select.Option value="1">Hồ Chí Minh</Select.Option>
                                            </Select>
                                        </div>
                                    </Col>
                                    :
                                    null
                                }
                                {categoryChart === "1" ?
                                    null
                                    :
                                    <Col span={8}>
                                        <div className="group-search">
                                            <div className="label-item">
                                                <label>Bắt đầu :</label>
                                            </div>
                                            <input type="text" className="input" />
                                        </div>
                                    </Col>
                                }

                                {categoryChart === "1" ?
                                    null
                                    :
                                    <Col span={8}>
                                        <div className="group-search">
                                            <div className="label-item">
                                                <label>Kết thúc:</label>
                                            </div>
                                            <input type="text" className="input" />
                                        </div>
                                    </Col>
                                }

                            </Row>
                            <Row>
                                <Col span={8}>
                                    <div className="group-search">
                                        <div className="label-item">
                                            <label>Tiêu chí :</label>
                                        </div>
                                        <Select className="select" onChange={(e) => { setTarget(e); setTo(""); setFrom(""); }} value={target} style={{ width: 160 }} >
                                            {
                                                targetChart.map(item => {
                                                    return <Select.Option key={item.id} value={item.id}>{item.title}</Select.Option>
                                                })
                                            }
                                        </Select>
                                    </div>
                                </Col>
                                {target === "3" || target === "" ?
                                    null
                                    :
                                    <Col span={8}>
                                        <div className="group-search">
                                            <div className="label-item">
                                                <label>Bắt đầu :</label>
                                            </div>
                                            <input type="text" value={from} onChange={(e) => { setFrom(e.target.value) }} className="input" />
                                        </div>
                                    </Col>
                                }
                                {target === "3" || target === "" ?
                                    null
                                    :
                                    <Col span={8}>
                                        <div className="group-search">
                                            <div className="label-item">
                                                <label>Kết thúc:</label>
                                            </div>
                                            <input type="text" value={to} onChange={(e) => { setTo(e.target.value) }} className="input" />
                                        </div>
                                    </Col>
                                }
                            </Row>
                        </Col>
                        <Col className="column-btn" span={6}>
                            <button type="submit" className="btn-submit" onClick={changeArea}>Thống kê</button>
                        </Col>
                    </Row>
                </div>
                <Row className="main-chart">
                    <Col className="left-chart" span={18}>
                        <div className="group-search">
                            <label>Biểu đồ:</label>
                            <Select className="select" defaultValue="1" onChange={(e) => { setTypeChart(e) }} style={{ width: 150 }} >
                                <Select.Option value="1">Cột</Select.Option>
                                <Select.Option value="2">Đường</Select.Option>
                                <Select.Option value="3">Radar</Select.Option>
                            </Select>
                        </div>
                        <div>
                            {typeChart === "1" ?
                                <Bar
                                    className="chart"
                                    height={500}
                                    data={{
                                        labels: dataChart.labelColumn,
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
                                : typeChart === "2" ?
                                    <Line
                                        className="chart"
                                        height={500}
                                        data={{
                                            labels: dataChart.labelColumn,
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
                                    :
                                    <Radar
                                        className="chart"
                                        height={500}
                                        data={{
                                            labels: dataChart.labelColumn,
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
        </div >
    );
}

export default Statistical;