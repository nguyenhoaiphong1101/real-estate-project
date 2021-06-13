import { Col, Input, Row, Space, Table, Tag } from 'antd';
import React from 'react';
import SelectExtra from '../../../../../components/SelectExtra';
import "./styles.scss";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <div>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </div>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const propertyStatus = [
    {
        key: 1,
        value: 'OPEN'
    },
    {
        key: 2,
        value: 'CLOSE'
    },
]
function ManageTopic(props) {
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
                    dataSource={data}
                    pagination={{ pageSize: 5 }} />
            </div>

        </div>
    );
}

export default ManageTopic;