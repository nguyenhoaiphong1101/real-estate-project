import { Popover } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../../../../../components/Button";
import { API_URL } from "../../../../../../../constants/Config";
import Img from "../../../../../../../assets/images/noavatar.png";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeCompare } from "../../../../../../../actions/user";

function ItemSlider(props) {
  const toTimeString = (seconds) => {
    if (seconds) return moment(seconds).format("DD-MM-YYYY");
  };
  const [isCompare, setIsCompare] = useState(false);
  const history = useHistory();
  const listCompare = useSelector((state) => [...state.user.listCompare]);

  useEffect(() => {
    if (
      listCompare.filter((item) => item === props?.listHighlight?.id).length ===
      0
    ) {
      setIsCompare(false);
    } else {
      setIsCompare(true);
    }
  }, [listCompare]);
  const dispatch = useDispatch();

  const addCompare = () => {
    var temp = listCompare;
    if (
      listCompare.filter((item) => item === props.listHighlight?.id).length ===
        0 &&
      listCompare.length < 3
    ) {
      temp.push(props.listHighlight?.id);
      dispatch(changeCompare(temp));
    }
  };
  const toDetailHome = () => {
    // if (token) {
    //     dispatch(loadDetailHome(props?.listLatestNew?.id, jwtDecode(token).id))
    // }
    // else {
    //     dispatch(loadDetailHome(props?.listLatestNew?.id))
    // }
    history.push(`/chi-tiet/${props?.listHighlight?.id}`, props?.listHighlight);
  };
  const getPhotosImgAvatar = (name) => `${API_URL}/public/image/avatar/${name}`;
  const content = (
    <div className="popup-content-wrapper">
      <ul className="popup-content">
        <li>
          <i className="fas fa-phone"></i>Call Agent
        </li>
        <li>
          <i className="fas fa-th-list"></i>Send Message
        </li>
        <li>
          <i className="fas fa-star"></i>Book Tour
        </li>
      </ul>
    </div>
  );
  return (
    <div
      className="item-slider"
      style={{
        backgroundImage:
          "URL('http://androthemes.com/themes/react/acres/assets/img/listings/3.jpg')",
      }}
    >
      <div className="item-wrapper">
        <div className="item">
          <div className="listing-primary">
            <div className="listing__body">
              <h5 className="listing-title">
                <a title="Iris Watson, Frederick Nebraska 20620">
                  {props.listHighlight?.address}
                </a>
              </h5>
              <div className="author">
                <a>
                  <img
                    src={
                      props.listHighlight?.author?.avatar?.name
                        ? getPhotosImgAvatar(
                            props.listHighlight?.author?.avatar?.name
                          )
                        : Img
                    }
                    alt="agent"
                  />
                </a>
                <div className="media-body">
                  <h6>{props.listHighlight?.author?.full_name}</h6>
                  <span>{toTimeString(props.listHighlight?.created_at)}</span>
                </div>
                <div className="icon-wrapper">
                  <Popover className="popup" content={content} trigger="click">
                    <div className="icon">
                      <i className="fas fa-ellipsis-v"></i>
                    </div>
                  </Popover>
                </div>
              </div>
              <span className="listing-price">
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "VND",
                }).format(props.listHighlight?.total_price)}
              </span>
              <p className="listing-text">{props.listHighlight?.title}</p>
              <div className="acr-listing-icons">
                <div className="acr-listing-icon">
                  <i className="flaticon-pillow"></i>
                  <span className="acr-listing-icon-value">
                    {props.listHighlight?.bedroom_quantity}
                  </span>
                </div>
                <div className="acr-listing-icon">
                  <i className="flaticon-bathtub"></i>
                  <span className="acr-listing-icon-value">
                    {props.listHighlight?.bathroom_quantity}
                  </span>
                </div>
                <div className="acr-listing-icon">
                  <i className="flaticon-ruler"></i>
                  <span className="acr-listing-icon-value">
                    {props.listHighlight?.area}
                  </span>
                </div>
              </div>
              <div className="listing-gallery-wrapper">
                <Button
                  value="Xem chi tiết"
                  onClick={() => toDetailHome()}
                  className="view-detail"
                ></Button>
                <span
                  onClick={addCompare}
                  style={
                    isCompare
                      ? { color: "#ccc", cursor: "default" }
                      : { color: "#01bbbc", cursor: "pointer" }
                  }
                >
                  <i style={{ fontSize: "12px" }} className="fas fa-plus"></i>{" "}
                  {isCompare ? "Đã so sánh" : "So sánh"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemSlider;
