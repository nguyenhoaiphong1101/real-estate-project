import React, { useEffect } from 'react';
import "./styles.scss"
import { Table, Tag, Space, Col, Row, Input, Button } from 'antd';
import SelectExtra from '../../../../../components/SelectExtra';
import { useDispatch, useSelector } from 'react-redux';
import { getListUser } from '../../../../../actions/admin';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
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
                <Button className="admin-btn-edit">Edit</Button>
                <Button className="admin-btn-delete">Delete</Button>
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
function ManageUser(props) {
    const listUser = useSelector(state => state.admin.user.listUser);
    const totalItem = useSelector(state => state.admin.user.totalItem);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListUser())
    }, []);
    return (
        <div className="admin-manage-topic">
            <Row>
                <Col span={24}>
                    <div className="title-wrapper">
                        <div className="title">
                            Quản Lý Người Dùng
                        </div>
                        <div className="sub-title">
                            Nơi Quản Lý Tất Cả Người Dùng
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
                            <SelectExtra className="form-control select" defaultValue='OPEN' name="status" listdata={propertyStatus} >
                            </SelectExtra>
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

                        },
                        pageSize: 10,
                        totalItem: { totalItem },
                    }} />
            </div>

        </div>
    );
}

export default ManageUser;