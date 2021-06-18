import React, { useEffect } from 'react';
import "./styles.scss"
import { Table, Tag, Space, Row, Col, Input } from 'antd';
import SelectExtra from '../../../../../components/SelectExtra';
import { getListApartment } from '../../../../../actions/admin';
import { useDispatch, useSelector } from 'react-redux';

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
                <a>Delete</a>
            </Space>
        ),
    },
];

// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '4',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '5',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];

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

function ManageApartment(props) {
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
                            <SelectExtra className="form-control select" defaultValue='OPEN' name="status" listdata={propertyStatus} >
                            </SelectExtra>
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