import React, { useState } from 'react';
import "./styles.scss"
import { Col, List, Modal, Row, Form, Input, Button } from 'antd';
import ItemTarget from './components/ItemTarget';

function ListingTarget(props) {

    var list = [
        {
            id: 1,
            title: "Test",
            city: "Hồ chí minh",
            province: "Quận 3",
            area: 200,
            mattien: "Đông Nam",
            form: 200000,
            to: 5000000,
            sotang: 5,
            bedroom: 4,
            huongnha: "Đông",
        },
        {
            id: 2,
            title: "Test 2",
            city: "Hồ chí minh",
            province: "Quận 7",
            area: 300,
            mattien: "Đông Nam",
            form: 250000,
            to: 8000000,
            sotang: 2,
            bedroom: 3,
            huongnha: "Đông",
        },
    ]

    const resetData = () => {
        setTitle("");
        setCity("");
        setProvince("");
        setArea("");
        setMattien("");
        setFrom("");
        setTo("");
        setSotang("");
        setBedroom("");
        setHuongnha("");
    }


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDetail, setIsDetail] = useState(false);
    const [detail, setDetail] = useState();
    const [title, setTitle] = useState();
    const [city, setCity] = useState();
    const [province, setProvince] = useState();
    const [area, setArea] = useState();
    const [mattien, setMattien] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [sotang, setSotang] = useState();
    const [bedroom, setBedroom] = useState();
    const [huongnha, setHuongnha] = useState();
    const [listTarget, setListTarget] = useState([
        {
            id: 1,
            title: "Test",
            city: "Hồ chí minh",
            province: "Quận 3",
            area: 200,
            mattien: "Đông Nam",
            form: 200000,
            to: 5000000,
            sotang: 5,
            bedroom: 4,
            huongnha: "Đông",
        },
        {
            id: 2,
            title: "Test 2",
            city: "Hồ chí minh",
            province: "Quận 7",
            area: 300,
            mattien: "Đông Nam",
            form: 250000,
            to: 8000000,
            sotang: 2,
            bedroom: 3,
            huongnha: "Đông",
        },
    ]);




    const handleOk = () => {
        var item = {
            id: 3,
            title,
            city,
            province,
            area,
            mattien,
            from,
            to,
            sotang,
            bedroom,
            huongnha,
        }

        list.push(item);
        setListTarget(list);
        resetData();
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        resetData();
        setIsModalVisible(false);
    };

    return (
        <div className="listing-target" >
            <Modal title="Thêm mục tiêu" visible={isModalVisible} okText="Thêm" cancelText="Hủy" onOk={handleOk} onCancel={handleCancel}>
                <Row>
                    <Col className="form-group" span={11}>
                        <label>Nội dung mục tiêu</label>
                        <Input value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </Col>
                    <Col className="form-group" offset={1} span={11}>
                        <label>Thành phố</label>
                        <Input value={city} onChange={(e) => { setCity(e.target.value) }} />
                    </Col>
                    <Col className="form-group" span={11}>
                        <label>Diện tích</label>
                        <Input value={area} onChange={(e) => { setArea(e.target.value) }} />
                    </Col>
                    <Col className="form-group" offset={1} span={11}>
                        <label >Quận huyện</label>
                        <Input value={province} onChange={(e) => { setProvince(e.target.value) }} />
                    </Col>
                    <Col className="form-group" span={11}>
                        <label>Giá bắt đầu</label>
                        <Input value={from} onChange={(e) => { setFrom(e.target.value) }} />
                    </Col>
                    <Col className="form-group" offset={1} span={11}>
                        <label >Giá kết thúc</label>
                        <Input value={to} onChange={(e) => { setTo(e.target.value) }} />
                    </Col>
                    <Col className="form-group" span={11}>
                        <label>Số tầng</label>
                        <Input value={sotang} onChange={(e) => { setSotang(e.target.value) }} />
                    </Col>
                    <Col className="form-group" offset={1} span={11}>
                        <label >Số phòng ngủ</label>
                        <Input value={bedroom} onChange={(e) => { setBedroom(e.target.value) }} />
                    </Col>
                    <Col className="form-group" span={11}>
                        <label>Mặt tiền</label>
                        <Input value={mattien} onChange={(e) => { setMattien(e.target.value) }} />
                    </Col>
                    <Col className="form-group" offset={1} span={11}>
                        <label >Hướng nhà</label>
                        <Input value={huongnha} onChange={(e) => { setHuongnha(e.target.value) }} />
                    </Col>
                </Row>
            </Modal>

            <Modal title="Thêm mục tiêu" visible={isDetail} onCancel={() => { setIsDetail(false); }}
                footer={[
                    <Button key="submit" type="primary" onClick={() => { setIsDetail(false); }}>
                        Xác nhận
                    </Button>,
                ]}>
                <Row>
                    <Col className="form-group-detail" span={11}>
                        <label>Nội dung mục tiêu</label>
                        <p>{detail?.title}</p>
                    </Col>
                    <Col className="form-group-detail" offset={1} span={11}>
                        <label>Thành phố</label>
                        <p>{detail?.city}</p>
                    </Col>
                    <Col className="form-group-detail" span={11}>
                        <label>Diện tích</label>
                        <p>{detail?.area}</p>
                    </Col>
                    <Col className="form-group-detail" offset={1} span={11}>
                        <label >Quận huyện</label>
                        <p>{detail?.province}</p>
                    </Col>
                    <Col className="form-group-detail" span={11}>
                        <label>Giá bắt đầu</label>
                        <p>{detail?.form}</p>
                    </Col>
                    <Col className="form-group-detail" offset={1} span={11}>
                        <label >Giá kết thúc</label>
                        <p>{detail?.to}</p>
                    </Col>
                    <Col className="form-group-detail" span={11}>
                        <label>Số tầng</label>
                        <p>{detail?.sotang}</p>
                    </Col>
                    <Col className="form-group-detail" offset={1} span={11}>
                        <label >Số phòng ngủ</label>
                        <p>{detail?.bedroom}</p>
                    </Col>
                    <Col className="form-group-detail" span={11}>
                        <label>Mặt tiền</label>
                        <p>{detail?.mattien}</p>
                    </Col>
                    <Col className="form-group-detail" offset={1} span={11}>
                        <label >Hướng nhà</label>
                        <p>{detail?.huongnha}</p>
                    </Col>
                </Row>
            </Modal>


            <p className="title">Danh sách mục tiêu quan tâm</p>
            <p className="button-add" onClick={() => { setIsModalVisible(true) }}><i class="far fa-plus-square"></i> Thêm mục tiêu</p>
            <List className="listing-post-profile"
                itemLayout="vertical"
                size="small"
                dataSource={listTarget}
                pagination={{
                    onChange: page => {

                    },
                    pageSize: 10,
                }}
                renderItem={item => (
                    <List.Item className="item"
                        key={item.id}
                    >
                        <ItemTarget detail={(detail) => {
                            setDetail(detail);
                            setIsDetail(true);
                        }} item={item} />
                    </List.Item>
                )}
            >
            </List>
        </div>
    );
}

export default ListingTarget;