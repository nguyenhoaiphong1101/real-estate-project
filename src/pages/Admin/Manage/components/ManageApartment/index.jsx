import React, { useEffect, useState } from 'react';
import "./styles.scss"
import { Table, Tag, Space, Row, Col, Input, Modal, Upload } from 'antd';
import { Select } from 'antd';
import { getListApartment } from '../../../../../actions/admin';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd/lib/radio';
import { Option } from 'antd/lib/mentions';
import { AlignLeftOutlined, PlusOutlined } from '@ant-design/icons';



function ManageApartment(props) {
    const columns = [
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
                    <Button className="admin-btn-edit" onClick={() => showModalChange(record)}>Sửa</Button>
                    <Button className="admin-btn-delete">Xóa</Button>
                    {text.status === "PENDING" ? <Button className="admin-btn-approve">Duyệt</Button> : null}
                </Space>
            ),
        },
    ];

    const [typeButton, setTypeButton] = useState('');

    const [isModalVisibleFilter, setIsModalVisibleFilter] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModalAdd = () => {
        setTypeButton("ADD");
        setIsModalVisible(true);
    };
    const showModalChange = () => {
        setTypeButton("CHANGE");
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModalFilter = () => {
        setIsModalVisibleFilter(true);
    };

    const handleOkFilter = () => {
        setIsModalVisibleFilter(false);
    };

    const handleCancelFilter = () => {
        setIsModalVisibleFilter(false);
    };

    //Hình ảnh
    const [fileList, setFileList] = useState([]);

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ paddingTop: '10px' }}>Upload</div>
        </div>
    );

    const beforeUpload = (file) => {
        setFileList([
            ...fileList,
            {
                file: file,
                uid: file.uid,
                name: file.name,
            }])
    }
    const handleChange = info => {
        const newList = [...info.fileList]
        newList.forEach(item => {
            item.status = "done"
            let mapItem = fileList.find(file => file.uid === item.uid)
            if (mapItem) {
                item.url = mapItem.url
                item.file = mapItem.file
            }
        })
        if (info.file.originFileObj) {
            getBase64(info.file.originFileObj, imageUrl => {
                newList.forEach(item => {
                    if (item.uid === info.file.uid) {
                        item.url = imageUrl
                    }
                })
                setFileList(newList)
            });
        }
        setFileList(newList)
    };
    //

    const listApartment = useSelector(state => state.admin.apartment.listApartment);
    const totalItem = useSelector(state => state.admin.apartment.totalItem);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListApartment())
    }, []);

    return (

        <div className="admin-manage-apartment">
            <Modal className="modal-apartment" width={800} title={typeButton === "ADD" ? "Thêm căn hộ" : "Chỉnh sửa căn hộ"} visible={isModalVisible} onOk={handleOk} okText={typeButton === "ADD" ? "Thêm" : "Chỉnh sửa"} cancelText="Hủy" onCancel={handleCancel}>
                <Row>
                    <Col span={24}>
                        <h1 style={{ textAlign: "center" }}>Thông tin</h1>
                    </Col>
                    <Col span={24}>
                        <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Hình ảnh</h1>
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {uploadButton}
                        </Upload>
                    </Col>
                    <Col span={11}>
                        <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Tiêu đề</h1>
                        <Input className="input" type="text" placeholder="Tiêu đề"></Input>
                    </Col>

                </Row>
            </Modal>
            <Modal className="modal-apartment" title="Lọc" visible={isModalVisibleFilter} onOk={handleOkFilter} okText="Lọc" onCancel={handleCancelFilter} cancelText="Hủy">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Row>
                <Col span={24}>
                    <div className="title-wrapper">
                        <div className="title" style={{ textAlign: "center" }}>
                            Quản Lý Căn Hộ
                        </div>
                        <div className="sub-title" style={{ textAlign: "center" }}>
                            Nơi Quản Lý Tất Cả Căn Hộ
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="table-wrapper">
                <div className="table-tool">
                    <Row>
                        <Col span={2}>
                            <Button style={{ width: '100% ', textAlign: "center" }} onClick={() => showModalFilter()} className="admin-btn-add-apartment">Lọc <AlignLeftOutlined /></Button>
                        </Col>
                        <Col offset={1} span={3}>
                            <Button className="admin-btn-add-apartment" onClick={() => showModalAdd()}>Thêm thể loại <PlusOutlined /></Button>
                        </Col>
                        <Col offset={12} span={2}>
                            <p style={{ margin: "5px 0px 0px 20px" }}>Sắp xếp</p>
                        </Col>
                        <Col span={4}>
                            <Select className="form-control select" defaultValue="ALL"  >
                                <Option value="ALL">ALL</Option>
                                <Option value="ID">ID</Option>
                                <Option value="AREA">AREA</Option>
                                <Option value="PRICE">PRICE</Option>
                            </Select>
                        </Col>
                    </Row>

                </div>
                <div className="separator"></div>
                <Table
                    className="table"
                    columns={columns}
                    dataSource={listApartment}
                    pagination={{
                        onChange: page => {

                        },
                        pageSize: 10,
                        total: totalItem,
                    }} />
            </div>

        </div>
    );
}

export default ManageApartment;