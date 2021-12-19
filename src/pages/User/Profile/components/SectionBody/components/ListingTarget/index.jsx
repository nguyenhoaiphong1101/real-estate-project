import React, { useState, useEffect } from 'react';
import "./styles.scss"
import { Col, List, Modal, Select, Row, Form, Input, Button, Alert, message } from 'antd';
import ItemTarget from './components/ItemTarget';
import { createTarget, deleteTarget, getTarget, updateTarget } from '../../../../../../../api/userApi'
import { province, district } from '../../../../../../../api/searchApi';
import { listCategoryApi } from '../../../../../../../api/category';

function ListingTarget(props) {


    const [listProvince, setListProvince] = useState([])
    const [listDistrict, setListDistrict] = useState([])
    const [listCategory, setListCategory] = useState([])
    const [update, setUpdate] = useState()
    const [listTarget, setListTarget] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDetail, setIsDetail] = useState(false);
    const [detail, setDetail] = useState();
    const [city, setCity] = useState();
    const [distr, setDistr] = useState();
    const [area, setArea] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [bathroom, setBathroom] = useState();
    const [floor, setFloor] = useState();
    const [bedroom, setBedroom] = useState();


    useEffect(() => {
        province.GET().then(res => {
            setListProvince(res)
        })
        listCategoryApi.GET().then(res => {
            setListCategory(res);
        })
        getTarget.GET().then((res) => {
            setListTarget(res);
        })
    }, [])

    const changeCity = (e) => {
        setCity(e);
        district.GET(e).then(res => {
            setListDistrict(res);
        })
        setDistr();
    }

    const changeDistrict = (e) => {
        setDistr(e);
    }

    const changeCategory = (e) => {
        setCategory(e);
    }

    const updateItem = (item) => {
        district.GET(Number(item.province)).then(res => {
            setListDistrict(res);
            setDistr(item.district ? Number(item.district) : null);
        })
        setUpdate(item.id);
        setCity(item.province ? Number(item.province) : null);
        setArea(item.area ? Number(item.area) : null);
        setCategory(item.category ? Number(item.category) : null);
        setPrice(Number(item.price));
        setBathroom(item.bathroom_quantity);
        setFloor(item.floor_quantity);
        setBedroom(item.bedroom_quantity);
        setIsModalVisible(true);
    }



    const handleOk = () => {
        if (update) {
            if (!city &&
                !distr &&
                !area &&
                !category &&
                !price &&
                !bathroom &&
                !floor &&
                !bedroom
            ) {
                message.error("Vui lòng nhập ít nhất 1 thông tin !");
            } else {
                updateTarget.PUT({
                    id: update,
                    area,
                    bathroom_quantity: bathroom,
                    bedroom_quantity: bedroom,
                    category,
                    district_id: distr,
                    floor_quantity: floor,
                    price,
                    province_id: city,
                }).then(res => {
                    getTarget.GET().then((res) => {
                        setListTarget(res);
                    })
                    setCity();
                    setDistr();
                    setArea();
                    setCategory();
                    setPrice();
                    setBathroom();
                    setFloor();
                    setBedroom();
                    setIsModalVisible(false);
                })
            }
        } else {
            if (!city &&
                !distr &&
                !area &&
                !category &&
                !price &&
                !bathroom &&
                !floor &&
                !bedroom
            ) {
                message.error("Vui lòng nhập ít nhất 1 thông tin !");
            } else {
                createTarget.POST({
                    area,
                    bathroom_quantity: bathroom,
                    bedroom_quantity: bedroom,
                    category,
                    district_id: distr,
                    floor_quantity: floor,
                    price,
                    province_id: city,
                }).then(res => {
                    getTarget.GET().then((res) => {
                        setListTarget(res);
                    })
                    setCity();
                    setDistr();
                    setArea();
                    setCategory();
                    setPrice();
                    setBathroom();
                    setFloor();
                    setBedroom();
                    setIsModalVisible(false);
                })
            }
        }
    };

    const deleteItem = (id) => {
        deleteTarget.DELETE(id).then(res => {
            getTarget.GET().then((res) => {
                setListTarget(res);
            });
        })
    }

    const handleCancel = () => {
        setCity();
        setDistr();
        setArea();
        setCategory();
        setPrice();
        setBathroom();
        setFloor();
        setBedroom();
        setIsModalVisible(false);
    };

    return (
        <div className="listing-target" >
            <Modal title={update ? "Cập nhật mục tiêu" : "Thêm mục tiêu"} visible={isModalVisible} okText="Thêm" cancelText="Hủy" onOk={handleOk} onCancel={handleCancel}>
                <Row>
                    <Col className="form-group" span={11}>
                        <label>Thành phố</label>
                        <Select value={city} className="select-target" onChange={changeCity}>
                            {listProvince.length > 0 ?
                                listProvince.map(item => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                })
                                : null}
                        </Select>
                    </Col>

                    <Col className="form-group" offset={1} span={11}>
                        <label>Quận huyện</label>
                        <Select value={distr} className="select-target" onChange={changeDistrict}>
                            {listDistrict.length > 0 ?
                                listDistrict.map(item => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                })
                                : null}
                        </Select>
                    </Col>
                    <Col className="form-group" span={11}>
                        <label>Thể loại</label>
                        <Select value={category} className="select-target" onChange={changeCategory}>
                            {listCategory.length > 0 ?
                                listCategory.map(item => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                })
                                : null}
                        </Select>
                    </Col>
                    <Col className="form-group" offset={1} span={11}>
                        <label>Diện tích</label>
                        <Input value={area} type='number' onChange={(e) => { setArea(e.target.value) }} />
                    </Col>
                    <Col className="form-group" span={11}>
                        <label>Giá tiền</label>
                        <Input value={price} type='number' onChange={(e) => { setPrice(e.target.value) }} />
                    </Col>
                    <Col className="form-group" offset={1} span={11}>
                        <label>Số tầng</label>
                        <Input value={floor} type='number' onChange={(e) => { setFloor(e.target.value) }} />
                    </Col>
                    <Col className="form-group" span={11}>
                        <label>Số phòng tắm</label>
                        <Input value={bathroom} type='number' onChange={(e) => { setBathroom(e.target.value) }} />
                    </Col>
                    <Col className="form-group" offset={1} span={11}>
                        <label>Số phòng ngủ</label>
                        <Input value={bedroom} type='number' onChange={(e) => { setBedroom(e.target.value) }} />
                    </Col>
                </Row>
            </Modal>

            <Modal title="Chi tiết mục tiêu" visible={isDetail} onCancel={() => { setIsDetail(false); }}
                footer={[
                    <Button key="submit" type="primary" onClick={() => { setIsDetail(false); }}>
                        Xác nhận
                    </Button>,
                ]}>
                <Row>
                    <Col className="form-group-detail" span={11}>
                        <label>Thành phố</label>
                        <p>{detail?.province_name}</p>
                    </Col>
                    <Col className="form-group-detail" offset={1} span={11}>
                        <label>Quận/huyện</label>
                        <p>{detail?.district_name}</p>
                    </Col>
                    <Col className="form-group-detail" span={11}>
                        <label>Thể loại</label>
                        <p>{detail?.category_name}</p>
                    </Col>
                    <Col className="form-group-detail" offset={1} span={11}>
                        <label >Diện tích</label>
                        <p>{Number(detail?.area).toLocaleString('vi-VN')}m2</p>
                    </Col>
                    <Col className="form-group-detail" span={11}>
                        <label>Giá tiền</label>
                        <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(detail?.price)}</p>
                    </Col>
                    <Col className="form-group-detail" offset={1} span={11}>
                        <label>Số tầng</label>
                        <p>{detail?.floor_quantity}</p>
                    </Col>
                    <Col className="form-group-detail" span={11}>
                        <label>Số phòng tắm</label>
                        <p>{detail?.bathroom_quantity}</p>
                    </Col>
                    <Col className="form-group-detail" offset={1} span={11}>
                        <label >Số phòng ngủ</label>
                        <p>{detail?.bedroom_quantity}</p>
                    </Col>
                </Row>
            </Modal>


            <p className="title">Danh sách mục tiêu quan tâm</p>
            <p className="button-add" onClick={() => { setIsModalVisible(true) }}><i className="far fa-plus-square"></i> Thêm mục tiêu</p>
            <List className="listing-post-profile"
                itemLayout="vertical"
                size="small"
                dataSource={listTarget}
                pagination={{
                    pageSize: 10,
                }}
                renderItem={item => (
                    <List.Item className="item"
                        key={item.id}
                    >
                        <ItemTarget detail={(detail) => {
                            setDetail(detail);
                            setIsDetail(true);
                        }}
                            updateItem={updateItem}
                            deleteItem={deleteItem}
                            item={item}
                        />
                    </List.Item>
                )}
            >
            </List>
        </div>
    );
}

export default ListingTarget;