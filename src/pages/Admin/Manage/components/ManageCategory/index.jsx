import { Col, Input, Row, Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListCategory } from '../../../../../actions/admin';
import SelectExtra from '../../../../../components/SelectExtra';
import "./styles.scss";

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
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: tags => (
    //         <div>
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
    //         </div>
    //     ),
    // },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                {/* <a>Invite {record.name}</a> */}
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
function ManageCategory(props) {
    const listCategory = useSelector(state => state.admin.category.listCategory);
    const totalItem = useSelector(state => state.admin.category.totalItem);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListCategory())
    }, []);

    return (
        <div className="admin-manage-topic">
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
                    dataSource={listCategory}
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

export default ManageCategory;