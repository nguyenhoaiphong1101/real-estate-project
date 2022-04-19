import { Button, Input, Modal, List, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCompare } from "../../../../actions/user";
import { listSearchCompare } from "../../../../api/listsearchApi";
import { API_URL } from "../../../../constants/Config";
import "./styles.scss";

function ItemCompare(props) {
  const [visible, setVisible] = useState(false);

  const detele = () => {
    props?.deleteItem(props.item.id);
  };
  const [listDepartment, setListDepartment] = useState([]);
  const [listShow, setListShow] = useState([]);

  useEffect(() => {
    listSearchCompare.GET().then((res) => {
      setListDepartment(res);
      setListShow(res);
    });
  }, []);

  const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;

  const changeSearch = (e) => {
    setListShow(
      e.target.value === ""
        ? listDepartment
        : listDepartment.filter((item) =>
            item.title?.toLowerCase().includes(e.target.value.toLowerCase())
          )
    );
  };

  return (
    <>
      {props.item ? (
        <div className="item-compare">
          <i className="icon fas fa-times" onClick={detele}></i>
          <img
            className="img"
            alt="hình"
            src={
              props.item.photos.length > 0
                ? getPhotosImg(props.item.photos[0].name)
                : "https://thietkenoithat.com/Portals/0/xNews/uploads/2017/9/1/mau-thiet-ke-biet-thu-kinh-sang-trong-cao-cap3.jpg"
            }
          ></img>
          <p className="title">{props.item.title}</p>
        </div>
      ) : (
        <div className="item-compare">
          <i
            className="icon-add far fa-plus-square"
            onClick={() => {
              setVisible(true);
            }}
          ></i>
          <p className="title-add">Thêm sản phẩm</p>
        </div>
      )}
      <Modal
        visible={visible}
        title="Thêm bất động sản so sánh"
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        footer={[
          <Button
            style={{ backgroundColor: "#01bbbc", color: "#fff" }}
            onClick={() => {
              setVisible(false);
            }}
          >
            Xác nhận
          </Button>,
        ]}
      >
        <div className="modal-search">
          <Input.Search
            placeholder="Nhập tên sản phẩm"
            onChange={changeSearch}
            style={{ width: "100%" }}
          />
          <List
            className="list"
            dataSource={listShow}
            renderItem={(item) => <ItemModal item={item} />}
          />
        </div>
      </Modal>
    </>
  );
}

function ItemModal({ item }) {
  const [isCompare, setIsCompare] = useState(false);

  const dispatch = useDispatch();

  const listCompare = useSelector((state) => [...state.user.listCompare]);

  useEffect(() => {
    if (listCompare.filter((it) => it === item.id).length === 0) {
      setIsCompare(false);
    } else {
      setIsCompare(true);
    }
  }, [listCompare]);

  const addCompare = () => {
    var temp = listCompare;
    if (
      listCompare.filter((it) => it === item.id).length === 0 &&
      listCompare.length < 3
    ) {
      temp.push(item.id);
      dispatch(changeCompare(temp));
    }
  };
  return (
    <Row className="card-item" key={item.id}>
      <Col span={18}>
        <p className="title">{item.title}</p>
        <p>{item.address}</p>
        <p>
          Giá:{" "}
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "VND",
          }).format(item.total_price)}{" "}
          ({item.area}m2)
        </p>
      </Col>
      <Col className="fl-center" span={6}>
        <span
          onClick={addCompare}
          style={
            isCompare
              ? { color: "#ccc ", cursor: "default" }
              : { color: "#01bbbc", cursor: "pointer" }
          }
        >
          <i style={{ fontSize: "12px" }} className="fas fa-plus"></i>{" "}
          {isCompare ? "Đã so sánh" : "So sánh"}
        </span>
      </Col>
    </Row>
  );
}

export default ItemCompare;
