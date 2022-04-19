import React from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../../../../constants/Config";
import "./styles.scss";

function CardCompare(props) {
  const history = useHistory();

  const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;
  return (
    <div className="card-compare">
      <div className="pricing-table">
        <h2 className="pricing-table__header">{props.item.title}</h2>
        <div className="card-img">
          <img
            className="img"
            src={
              props.item.photos.length > 0
                ? getPhotosImg(props.item.photos[0].name)
                : "http://nhadep.org.vn/uploads/weblink/products47033.png"
            }
          />
        </div>

        <h3
          className={`pricing-table__price ${
            props.rank.price === 2
              ? "low"
              : props.rank.price === 0
              ? "high"
              : ""
          }`}
        >
          {props.item.total_price}
        </h3>
        <a
          target="_blank"
          className="pricing-table__button"
          onClick={() => {
            history.push(`/chi-tiet/${props?.item?.id}`, props?.item);
          }}
        >
          Xem chi tiết
        </a>
        <ul className="pricing-table__list">
          <li>Địa chỉ: {props.item?.address}</li>
          <li>Thể loại: {props.item?.category_name}</li>
          <li
            className={
              props.rank.bed === 2 ? "high" : props.rank.bed === 0 ? "low" : ""
            }
          >
            Phòng ngủ: {props.item?.bedroom_quantity}
          </li>
          <li
            className={
              props.rank.bath === 2
                ? "high"
                : props.rank.bath === 0
                ? "low"
                : ""
            }
          >
            Phòng tắm: {props.item?.bathroom_quantity}
          </li>
          <li
            className={
              props.rank.floor === 2
                ? "high"
                : props.rank.floor === 0
                ? "low"
                : ""
            }
          >
            Số tầng: {props.item?.floor_quantity}
          </li>
          <li
            className={
              props.rank.toilet === 2
                ? "high"
                : props.rank.toilet === 0
                ? "low"
                : ""
            }
          >
            Nhà vệ sinh: {props.item?.toilet_quantity}
          </li>
          <li>Nội thất: {props.item?.furniture}</li>
          <li
            className={
              props.rank.area === 2
                ? "high"
                : props.rank.area === 0
                ? "low"
                : ""
            }
          >
            Kích thước: {props.item?.area}m2
          </li>
          <li>
            Tình trạng:{" "}
            {props.item?.type_apartment === "RENT" ? "Cho thuê" : "Bán"}
          </li>
          <li>Mặt tiền: {props.item?.front_building}</li>
          <li>Hướng nhà: {props.item?.house_building}</li>
          <li>Hướng ban công: {props.item?.balcony_direction}</li>
        </ul>
      </div>
    </div>
  );
}

export default CardCompare;
