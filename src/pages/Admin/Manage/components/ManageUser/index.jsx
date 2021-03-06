import React, { useEffect, useState } from "react";
import "./styles.scss";
import {
  Table,
  Tag,
  Space,
  Col,
  Row,
  Input,
  Button,
  Modal,
  Select,
  Form,
} from "antd";
import SelectExtra from "../../../../../components/SelectExtra";
import { useDispatch, useSelector } from "react-redux";
import { getListUser, getUserDetail } from "../../../../../actions/admin";
import { Collapse } from "antd";
import { Option } from "antd/lib/mentions";

import { SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Panel } = Collapse;

function ManageUser(props) {
  const listUser = useSelector((state) => state.admin.user.listUser);
  const totalItem = useSelector((state) => state.admin.user.totalItem);
  const detailUser = useSelector((state) => state.admin.detailUser);
  const [params, setParams] = useState({
    sort_direction: "ASC",
    sort_by: "ID",
    page: 1,
    search: undefined,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getListUser({
        ...params,
      })
    );
  }, []);

  const sortChange = (value) => {
    dispatch(
      getListUser({
        ...params,
        sort_by: value === "ALL" ? "" : value,
      })
    );
    setParams({
      ...params,
      sort_by: value === "ALL" ? "" : value,
    });
  };

  const columnsApartment = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "TITLE",
      dataIndex: "title",
      key: "id",
    },
    {
      title: "ADDRESS",
      dataIndex: "address",
      key: "id",
    },
    {
      title: "PRICE",
      dataIndex: "total_price",
      key: "id",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "id",
      render: (status) => (
        <Tag
          color={
            status === "OPEN"
              ? "green"
              : status === "PENDING"
              ? "geekblue"
              : "volcano"
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "TYPE",
      dataIndex: "type_apartment",
      key: "id",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            className="admin-btn-edit"
            onClick={() => toDetailHome(record)}
          >
            Xem b??i ????ng
          </Button>
        </Space>
      ),
    },
  ];

  const history = useHistory();

  const toDetailHome = (record) => {
    const win = window.open(`/chi-tiet/${record?.id}`, "_blank");
    win.focus();
  };

  const columns = [
    {
      title: "STT",
      // dataIndex: 'id',
      key: "id",
      render: (value, item, index) => (params.page - 1) * 10 + index + 1,
    },
    {
      title: "T??i kho???n",
      dataIndex: "username",
      key: "id",
    },
    {
      title: "T??n",
      dataIndex: "full_name",
      key: "id",
      render: (text) => (text ? text : "Ch??a c???p nh???t"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "id",
      render: (text) => (text ? text : "Ch??a c???p nh???t"),
    },
    {
      title: "??i???n tho???i",
      dataIndex: "phone",
      key: "id",
      render: (text) => (text ? text : "Ch??a c???p nh???t"),
    },
    {
      title: "M?? t???",
      dataIndex: "description",
      key: "id",
      render: (text) => (text ? text : "Ch??a c???p nh???t"),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button className="admin-btn-edit" onClick={() => showModal(record)}>
            Chi ti???t
          </Button>
        </Space>
      ),
    },
  ];

  const [search] = Form.useForm();

  const onSearch = () => {
    dispatch(
      getListUser({
        ...params,
        search: search.getFieldValue().search
          ? search.getFieldValue().search
          : undefined,
      })
    );
    setParams({
      ...params,
      search: search.getFieldValue().search
        ? search.getFieldValue().search
        : undefined,
    });
  };

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

  const sortDirection = (value) => {
    dispatch(
      getListUser({
        ...params,
        sort_direction: value,
      })
    );
    setParams({
      ...params,
      sort_direction: value,
    });
  };

  function handleEnter(e) {
    if (e.charCode === 13) {
      dispatch(
        getListUser({
          ...params,
          search: search.getFieldValue().search
            ? search.getFieldValue().search
            : undefined,
        })
      );
      setParams({
        ...params,
        search: search.getFieldValue().search
          ? search.getFieldValue().search
          : undefined,
      });
    }
  }

  return (
    <div className="admin-manage-user">
      <Modal
        width={1400}
        className="modal-user"
        title="Th??ng tin ng?????i d??ng"
        visible={isModalVisible}
        okText="X??c nh???n"
        cancelText="Quay l???i"
        onOk={handleOk}
        getContainer={false}
        onCancel={handleCancel}
      >
        <Row>
          <Col span={5}>
            <h2 style={{ fontWeight: "800", textAlign: "center" }}>
              Th??ng tin
            </h2>
            <p style={{ fontWeight: "800" }}>
              Username: <span>{detailUser.username}</span>
            </p>
            <p style={{ fontWeight: "800" }}>
              T??n ?????y ?????: <span>{detailUser.full_name}</span>{" "}
            </p>
            <p style={{ fontWeight: "800" }}>
              Email: <span>{detailUser.email}</span>
            </p>
            <p style={{ fontWeight: "800" }}>
              S??? ??i???n tho???i: <span>{detailUser.phone}</span>
            </p>
            <p style={{ fontWeight: "800" }}>
              M?? t???: <span>{detailUser.description}</span>
            </p>
            <p style={{ fontWeight: "800" }}>
              T???ng s??? b??i ????ng: <span>{detailUser.totalPostApartment}</span>
            </p>
            <p style={{ fontWeight: "800" }}>
              T???ng s??? b??i y??u th??ch:{" "}
              <span>{detailUser.totalFavouriteApartment}</span>
            </p>
            <p style={{ fontWeight: "800" }}>
              T???ng s??? b??i ????ng ph?? h???p:{" "}
              <span>{detailUser.totalRecommendApartment}</span>
            </p>
          </Col>
          <Col span={19}>
            <Collapse defaultActiveKey={["1"]} ghost>
              <Panel header="Danh s??ch b??i ????ng" key="1">
                <div style={{ maxHeight: "300px", overflowY: "scroll" }}>
                  <Table
                    className="table"
                    columns={columnsApartment}
                    dataSource={detailUser.postApartmentList}
                    pagination={{
                      onChange: (page) => {},
                      pageSize: 10,
                      total: detailUser.totalPostApartment,
                    }}
                  />
                </div>
              </Panel>
              <Panel header="Danh s??ch b??i y??u th??ch" key="2">
                <div style={{ maxHeight: "300px", overflowY: "scroll" }}>
                  <Table
                    className="table"
                    columns={columnsApartment}
                    dataSource={detailUser.favouriteApartmentList}
                    pagination={{
                      onChange: (page) => {},
                      pageSize: 10,
                      total: detailUser.totalFavouriteApartment,
                    }}
                  />
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
              Qu???n L?? Ng?????i D??ng
            </div>
            <div className="sub-title" style={{ textAlign: "center" }}>
              N??i Qu???n L?? T???t C??? Ng?????i D??ng
            </div>
          </div>
        </Col>
      </Row>
      <div className="table-wrapper">
        <div className="table-tool">
          <Row>
            <Col span={10}>
              <Form form={search} name="basic">
                <Form.Item style={{ marginBottom: "0px" }} name="search">
                  <Input
                    onKeyPress={handleEnter}
                    className="input"
                    placeholder="T??m ki???m..."
                  />
                </Form.Item>
              </Form>
            </Col>
            <Col span={1}>
              <Button
                onClick={() => onSearch()}
                className="admin-btn-add-category"
              >
                <SearchOutlined />
              </Button>
            </Col>
            <Col offset={5} span={2}>
              <p style={{ margin: "18px 0px 0px 20px" }}>S???p x???p</p>
            </Col>
            <Col span={3} style={{ paddingRight: "5px" }}>
              <Select
                className="form-control select"
                defaultValue="ID"
                onChange={sortChange}
              >
                <Option value="ID">M???c ?????nh</Option>
                <Option value="FULL_NAME">T??n</Option>
                <Option value="EMAIL">Email</Option>
              </Select>
            </Col>
            <Col span={3}>
              <Select
                className="form-control select"
                defaultValue="ASC"
                onChange={sortDirection}
              >
                <Option value="ASC">T??ng d???n</Option>
                <Option value="DESC">Gi???m d???n</Option>
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
            onChange: (page) => {
              dispatch(
                getListUser({
                  ...params,
                  page: page,
                })
              );
              setParams({
                ...params,
                page: page,
              });
            },
            pageSize: 10,
            position: ["bottomCenter"],
            showSizeChanger: false,
            total: totalItem,
          }}
        />
      </div>
    </div>
  );
}

export default ManageUser;
