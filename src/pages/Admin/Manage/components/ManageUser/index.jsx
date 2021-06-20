import React, { useEffect, useState } from 'react';
import "./styles.scss"
import { Table, Tag, Space, Col, Row, Input, Button, Modal, Select } from 'antd';
import SelectExtra from '../../../../../components/SelectExtra';
import { useDispatch, useSelector } from 'react-redux';
import { getListUser, getUserDetail } from '../../../../../actions/admin';
import { Collapse } from 'antd';
import { Option } from 'antd/lib/mentions';

const { Panel } = Collapse;



function ManageUser(props) {
    const listUser = useSelector(state => state.admin.user.listUser);
    const totalItem = useSelector(state => state.admin.user.totalItem);
    const detailUser = useSelector(state => state.admin.detailUser);
    const [params, setParams] = useState({ sort_direction: "ASC", sort_by: '', page: 1 });
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListUser({
            ...params
        }))
    }, []);

    const sortChange = (value) => {
        dispatch(getListUser({
            ...params,
            sort_by: value === "ALL" ? '' : value,
        }))
        setParams({
            ...params,
            sort_by: value === "ALL" ? '' : value,
        });
    }

    const columnsApartment = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'TITLE',
            dataIndex: 'title',
            key: 'id',
        },
        {
            title: 'ADDRESS',
            dataIndex: 'address',
            key: 'id',
        },
        {
            title: 'PRICE',
            dataIndex: 'total_price',
            key: 'id',
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'id',
            render: status => <Tag color={status === "OPEN" ? "green" : status === "PENDING" ? "geekblue" : "volcano"}>
                {status}
            </Tag>
        },
        {
            title: 'TYPE',
            dataIndex: 'type_apartment',
            key: 'id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button className="admin-btn-edit" >Xem bài đăng</Button>
                </Space>
            ),
        },
    ];

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'USERNAME',
            dataIndex: 'username',
            key: 'id',
        },
        {
            title: 'FULL_NAME',
            dataIndex: 'full_name',
            key: 'id',
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            key: 'id',
        },
        {
            title: 'PHONE',
            dataIndex: 'phone',
            key: 'id',
        },
        {
            title: 'DESCRIPTION',
            dataIndex: 'description',
            key: 'id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button className="admin-btn-edit" onClick={() => showModal(record)}>Chi tiết</Button>
                </Space>
            ),
        },
    ];

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (record) => {
        dispatch(getUserDetail(record.id));
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="admin-manage-user">
            <Modal width={1400} className="modal-user" title="Thông tin người dùng" visible={isModalVisible} okText="Xác nhận" cancelText="Quay lại" onOk={handleOk} onCancel={handleCancel}>
                <Row>
                    <Col span={5}>
                        <h2 style={{ fontWeight: "800", textAlign: "center" }}>Thông tin</h2>
                        <p style={{ fontWeight: "800" }}>Username: <span>{detailUser.username}</span></p>
                        <p style={{ fontWeight: "800" }}>Tên đầy đủ: <span>{detailUser.full_name}</span> </p>
                        <p style={{ fontWeight: "800" }}>Email: <span>{detailUser.email}</span></p>
                        <p style={{ fontWeight: "800" }}>Số điện thoại: <span>{detailUser.phone}</span></p>
                        <p style={{ fontWeight: "800" }}>Mô tả: <span>{detailUser.description}</span></p>
                        <p style={{ fontWeight: "800" }}>Tổng số bài đăng: <span>{detailUser.totalPostApartment}</span></p>
                        <p style={{ fontWeight: "800" }}>Tổng số bài yêu thích: <span>{detailUser.totalFavouriteApartment}</span></p>
                        <p style={{ fontWeight: "800" }}>Tổng số bài đăng phù hợp: <span>{detailUser.totalRecommendApartment}</span></p>
                    </Col>
                    <Col span={19}>
                        <Collapse defaultActiveKey={['1']} ghost>

                            <Panel header="Danh sách bài đăng" key="1">
                                <div style={{ height: "300px", overflowY: "scroll" }}>
                                    <Table
                                        className="table"
                                        columns={columnsApartment}
                                        dataSource={detailUser.postApartmentList}
                                        pagination={{
                                            onChange: page => {
                                            },
                                            pageSize: 10,
                                            total: detailUser.totalPostApartment,
                                        }} />
                                </div>
                            </Panel>
                            <Panel header="Danh sách bài yêu thích" key="2">
                                <div style={{ height: "300px", overflowY: "scroll" }}>
                                    <Table
                                        className="table"
                                        columns={columnsApartment}
                                        dataSource={detailUser.favouriteApartmentList}
                                        pagination={{
                                            onChange: page => {
                                            },
                                            pageSize: 10,
                                            total: detailUser.totalFavouriteApartment,
                                        }} />
                                </div>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            </Modal>
            <Row>
                <Col span={24}>
                    <div className="title-wrapper">
                        <div className="title" style={{ textAlign: "center" }}>
                            Quản Lý Người Dùng
                        </div>
                        <div className="sub-title" style={{ textAlign: "center" }}>
                            Nơi Quản Lý Tất Cả Người Dùng
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="table-wrapper">
                <div className="table-tool">
                    <Row>
                        <Col offset={18} span={2}>
                            <p style={{ margin: "5px 0px 0px 20px" }}>Sắp xếp</p>
                        </Col>
                        <Col span={4} >
                            <Select className="form-control select" defaultValue="ALL" onChange={sortChange}>
                                <Option value="ALL">ALL</Option>
                                <Option value="ID">ID</Option>
                                <Option value="FULL_NAME">FULL_NAME</Option>
                                <Option value="EMAIL">EMAIL</Option>
                            </Select>
                        </Col>
                    </Row>

                </div>
                <div className="separator"></div>
                <Table
                    className="table"
                    columns={columns}
                    dataSource={listUser}
                    pagination={{
                        onChange: page => {
                            dispatch(getListUser({
                                ...params,
                                page: page,
                            }));
                            setParams({
                                ...params,
                                page: page
                            })
                        },
                        pageSize: 10,
                        total: totalItem,
                    }} />
            </div>

        </div>
    );
}

export default ManageUser;