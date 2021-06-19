import React, { useEffect } from 'react';
import "./styles.scss"
import { Table, Tag, Space, Row, Col, Input } from 'antd';
import { Select } from 'antd';
import { getListApartment } from '../../../../../actions/admin';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd/lib/radio';
import { Option } from 'antd/lib/mentions';



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
        // {
        //     title: 'Tags',
        //     key: 'tags',
        //     dataIndex: 'tags',
        //     render: tags => (
        //         <>
        //             {tags.map(tag => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';
        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button className="admin-btn-edit" onClick={() => editChange(text, record)}>Edit</Button>
                    <Button className="admin-btn-delete">Delete</Button>
                    {text.status === "PENDING" ? <Button className="admin-btn-approve">Approve</Button> : null}
                </Space>
            ),
        },
    ];



    const propertyStatus = [
        {
            key: 1,
            value: 'OPEN'
        },
        {
            key: 2,
            value: 'PENDING'
        },
        {
            key: 3,
            value: 'CLOSE'
        },
    ]

    const editChange = (text, record) => {
        console.log(text);
        console.log(record);
    }
    const listApartment = useSelector(state => state.admin.apartment.listApartment);
    const totalItem = useSelector(state => state.admin.apartment.totalItem);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListApartment())
    }, []);

    return (
        <div className="admin-manage-topic">
            <Row>
                <Col span={24}>
                    <div className="title-wrapper">
                        <div className="title">
                            Quản Lý Căn Hộ
                        </div>
                        <div className="sub-title">
                            Nơi Quản Lý Tất Cả Căn Hộ
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="table-wrapper">
                <div className="table-tool">
                    <Row>
                        <Col span={12}>
                            <Input className="input" placeholder="Tìm kiếm..." />
                        </Col>
                        <Col offset={8} span={4}>
                            <Select className="form-control select" defaultValue="all"  >
                                <Option value="all">ALL</Option>
                                <Option value="open">OPEN</Option>
                                <Option value="pending">PENDING</Option>
                                <Option value="close">CLOSE</Option>
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
                        totalItem: { totalItem },
                    }} />
            </div>

        </div>
    );
}

export default ManageApartment;