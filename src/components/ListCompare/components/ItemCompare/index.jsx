import { Button, Input, Modal, List, Row, Col } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCompare } from "../../../../actions/user";
import { listSearchCompare } from "../../../../api/listsearchApi";
import { API_URL } from "../../../../constants/Config";
import debounce from "lodash.debounce";
import "./styles.scss";

function ItemCompare(props) {
  const [visible, setVisible] = useState(false);

  const detele = () => {
    props?.deleteItem(props.item.id);
  };
  const [listShow, setListShow] = useState([]);

  useEffect(() => {
    listSearchCompare.GET().then((res) => {
      setListShow(res);
    });
  }, []);

  const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;

  const debouncedSearch = useCallback(
    debounce((nextValue) => {
      listSearchCompare
        .GET({
          search: nextValue,
        })
        .then((res) => {
          setListShow(res);
        });
    }, 300),
    []
  );

  const changeSearch = (e) => {
    debouncedSearch(e.target.value.trim());
  };

  return (
    <div>
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
            key={"btn"}
            style={{
              backgroundColor: "#01bbbc",
              color: "#fff",
              borderRadius: "16px",
              padding: "8px 16px",
              height: "auto",
            }}
            onClick={() => {
              setVisible(false);
            }}
          >
            Xác nhận
          </Button>,
        ]}
      >
        <div className="modal-search">
          <Input
            placeholder="Nhập tên sản phẩm"
            onChange={changeSearch}
            style={{ width: "100%" }}
          />
          <List
            className="list"
            rowKey="id"
            dataSource={listShow}
            renderItem={(item, index) => <ItemModal item={item} />}
          />
        </div>
      </Modal>
    </div>
  );
}

function ItemModal({ item, index }) {
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
        <p>Giá: {item.total_price}</p>
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
