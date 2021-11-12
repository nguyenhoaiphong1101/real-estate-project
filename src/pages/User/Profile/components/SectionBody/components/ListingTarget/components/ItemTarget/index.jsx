import { Col, Row } from 'antd';
import React from 'react';
import { Menu, Dropdown } from 'antd';
import "./styles.scss"

function ItemTarget(props) {
    const menu = (
        <Menu>
            <Menu.Item>
                <p style={{ padding: "0px 10px", marginBottom: "0", textAlign: "center" }} onClick={() => { props.detail(props.item) }}>Chi tiết</p>
            </Menu.Item>
            <Menu.Item>
                <p style={{ padding: "0px 10px", marginBottom: "0", color: "#519fff" }}>Thay đổi</p>
            </Menu.Item>
            <Menu.Item>
                <p style={{ color: "#dc4a38", textAlign: "center", marginBottom: "0" }}>Xóa</p>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="item-target">
            <Row>
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
                    <Col style={{ textAlign: 'center', color: "#C0C0C0", cursor: "pointer" }} span={2}>
                        <i style={{ marginTop: "6px" }} className="fas fa-list-ul" ></i>
                    </Col>
                </Dropdown>

                <Col span={22}>
                    <p className="title-target">{props.item.title}</p>
                </Col>
            </Row>
        </div>
    );
}

export default ItemTarget;