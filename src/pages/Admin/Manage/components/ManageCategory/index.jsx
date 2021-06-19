import { Button, Col, Input, Modal, Row, Select, Space, Table, Tag, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListCategory } from '../../../../../actions/admin';
import SelectExtra from '../../../../../components/SelectExtra';
import "./styles.scss";

import {
    PlusOutlined, SearchOutlined
} from '@ant-design/icons';
import { Option } from 'antd/lib/mentions';
import { deleteCategory, postCategory, putCategory } from '../../../../../api/adminApi';




function ManageCategory(props) {
    const listCategory = useSelector(state => state.admin.category.listCategory);
    const totalItem = useSelector(state => state.admin.category.totalItem);
    const [typeButton, setTypeButton] = useState('');
    const dispatch = useDispatch()
    const [params, setParams] = useState({ sort_direction: "ASC", sort_by: '', search: '', page: 1 });
    useEffect(() => {
        dispatch(getListCategory({
            sort_direction: "ASC"
        }))
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'id',
        },
        {
            title: 'TOTAL',
            dataIndex: 'totalItem',
            key: 'id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button className="admin-btn-edit" onClick={() => showModalChange(record)}>Edit</Button>
                    <Button className="admin-btn-delete" onClick={() => deleteCate(record)}>Delete</Button>
                </Space>
            ),
        },
    ];

    const deleteCate = async (record) => {
        await deleteCategory.DELETE(record.id);
        dispatch(getListCategory({
            ...params
        }))

    }

    const sortChange = (value) => {
        dispatch(getListCategory({
            ...params,
            sort_by: value,
        }))
        setParams({
            ...params,
            sort_by: value,
        });
    }

    const [form] = Form.useForm();
    const [search] = Form.useForm();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [idChange, setIdChange] = useState(null);

    const showModalAdd = () => {
        setTypeButton("ADD")
        setIsModalVisible(true);
    };
    const showModalChange = (record) => {
        setTypeButton("CHANGE")
        form.setFieldsValue({
            name: record.name,
        })
        setIdChange(record.id);
        setIsModalVisible(true);
    };

    const onSearch = () => {
        dispatch(getListCategory({
            ...params,
            search: search.getFieldValue().search,
        }))
        setParams({
            ...params,
            search: search.getFieldValue().search,
        });
    }

    const addCate = async () => {
        let res = await form.validateFields();

        console.log(res?.name);

        if (res?.name) {
            await postCategory.POST({
                name: form.getFieldValue().name
            })
            dispatch(getListCategory({
                ...params
            }))
            form.setFieldsValue({
                name: ''
            })
            setIsModalVisible(false);
        }
        else {
            return 0;
        }

    };

    const changeCate = async () => {
        let res = await form.validateFields();

        console.log(res?.name);

        if (res?.name) {
            await putCategory.PUT({
                name: form.getFieldValue().name
            }, idChange)
            dispatch(getListCategory({
                ...params
            }))
            form.setFieldsValue({
                name: ''
            })
            setIsModalVisible(false);
        }
        else {
            return 0;
        }

    };

    const handleCancel = () => {
        form.setFieldsValue({
            name: '',
            id: null,
        })
        setIsModalVisible(false);
    };

    return (
        <div className="admin-manage-topic">
            <Modal className="modal-topic" title={typeButton === "ADD" ? "Thêm thể loại" : "Chỉnh sửa thể loại"} visible={isModalVisible} onOk={typeButton === "ADD" ? addCate : changeCate} onCancel={handleCancel} okText={typeButton === "ADD" ? "Thêm" : "Chỉnh sửa"}>
                <Form form={form}
                    name="basic"
                >
                    <Form.Item
                        label="Tên thể loại"
                        name="name"
                        rules={[{ required: true, message: 'Vui lòng nhập tên thể loại!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <Row>
                <Col span={24}>
                    <div className="title-wrapper">
                        <div className="title">
                            Quản Lý Thể Loại
                        </div>
                        <div className="sub-title">
                            Nơi Quản Lý Tất Cả Thể Loại
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="table-wrapper">
                <div className="table-tool">
                    <Row>
                        <Col span={12}>
                            <Form form={search}
                                name="basic"
                            >
                                <Form.Item
                                    style={{ marginBottom: "0px" }}
                                    name="search"
                                >
                                    <Input className="input" placeholder="Tìm kiếm..." />
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={1}>
                            <Button onClick={() => onSearch()} className="admin-btn-add-category"><SearchOutlined /></Button>
                        </Col>
                        <Col offset={1} span={3}>
                            <Button onClick={() => showModalAdd()} className="admin-btn-add-category">Thêm thể loại<PlusOutlined /></Button>
                        </Col>
                        <Col offset={1} span={2}>
                            <p style={{ margin: "18px 0px 0px 20px" }}>Sort by</p>

                        </Col>
                        <Col span={4}>
                            <Select className="form-control select" defaultValue="ALL" onChange={sortChange}>
                                <Option value="ALL">ALL</Option>
                                <Option value="ID">ID</Option>
                                <Option value="NAME">NAME</Option>
                            </Select>
                        </Col>

                    </Row>

                </div>
                <div className="separator"></div>
                <Table
                    className="table"
                    columns={columns}
                    dataSource={listCategory}
                    pagination={{
                        onChange: page => {
                            dispatch(getListCategory({
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

export default ManageCategory;