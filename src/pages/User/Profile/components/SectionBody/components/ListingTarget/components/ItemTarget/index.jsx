import { Col, Row } from "antd";
import React from "react";
import { Menu, Dropdown } from "antd";
import "./styles.scss";

function ItemTarget(props) {
  const menu = (
    <Menu>
      <Menu.Item>
        <p
          style={{
            padding: "0px 10px",
            marginBottom: "0",
            textAlign: "center",
          }}
          onClick={() => {
            props.detail(props.item);
          }}
        >
          Chi tiết
        </p>
      </Menu.Item>
      <Menu.Item>
        <p
          style={{ padding: "0px 10px", marginBottom: "0", color: "#01bbbc" }}
          onClick={() => {
            props.updateItem(props.item);
          }}
        >
          Thay đổi
        </p>
      </Menu.Item>
      <Menu.Item>
        <p
          style={{ color: "#dc4a38", textAlign: "center", marginBottom: "0" }}
          onClick={() => {
            props.deleteItem(props.item.id);
          }}
        >
          Xóa
        </p>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="item-target">
      <Row>
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#C0C0C0",
              cursor: "pointer",
            }}
            span={2}
          >
            <i className="fas fa-list-ul"></i>
          </Col>
        </Dropdown>
        <Col span={22} className="content">
          <p className="title-target">
            {props.item.province_name}{" "}
            {props.item.district_name
              ? `( ${props.item.district_name} )`
              : null}
          </p>
          <p className="title-target-small">
            Diện tích:{" "}
            {props.item.area
              ? `${Number(props.item.area).toLocaleString("vi-VN")}m2`
              : "Không có"}
          </p>
          <p className="title-target-small">
            Giá tiền:{" "}
            {props.item.price
              ? `${new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "VND",
                }).format(props.item.price)}`
              : "Không có"}
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default ItemTarget;
