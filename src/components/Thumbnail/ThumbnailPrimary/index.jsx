import { Popover, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { postFavorite } from "../../../api/favorite";
import Modal from "antd/lib/modal/Modal";
import { API_URL } from "../../../constants/Config";
import Img from "../../../assets/images/noavatar.png";
import { changeCompare } from "../../../actions/user";

function ThumbnailPrimary(props) {
  const [image, setImage] = useState({});
  const [isCompare, setIsCompare] = useState(false);

  const listCompare = useSelector((state) => [...state.user.listCompare]);

  useEffect(() => {
    if (
      listCompare.filter((item) => item === props?.listLatestNew?.id).length ===
      0
    ) {
      setIsCompare(false);
    } else {
      setIsCompare(true);
    }
  }, [listCompare]);

  const toTimeString = (seconds) => {
    if (seconds) return moment(seconds).format("DD-MM-YYYY");
  };

  const dispatch = useDispatch();
  const token = localStorage.getItem("access_token");

  const history = useHistory();
  const toDetailHome = () => {
    history.push(`/chi-tiet/${props?.listLatestNew?.id}`, props?.listLatestNew);
    if (props.isRender) {
      props.isRender();
    }
  };
  const [isFavorite, setIsFavorite] = useState();

  const setFavorite = () => {
    if (token) {
      setIsFavorite(!isFavorite);
      postFavorite.POST(props.listLatestNew?.id);
    } else {
      setIsVisible(true);
    }
  };

  const addCompare = () => {
    var temp = listCompare;
    if (
      listCompare.filter((item) => item === props.listLatestNew?.id).length ===
        0 &&
      listCompare.length < 3
    ) {
      temp.push(props.listLatestNew?.id);
      dispatch(changeCompare(temp));
    } else {
      dispatch(
        changeCompare(temp.filter((item) => item !== props.listLatestNew?.id))
      );
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleOk = () => {
    history.push("/dang-nhap");
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;
  const getPhotosImgAvatar = (name) => `${API_URL}/public/image/avatar/${name}`;

  useEffect(() => {
    setIsFavorite(props?.listLatestNew?.favourite);
    let imgs = [];
    props?.listLatestNew?.photos?.forEach((item, index) => {
      imgs.push({ ...item, uid: index, url: getPhotosImg(item.name) });
    });
    setImage(imgs[0]);
  }, [props?.listLatestNew]);
  return (
    <div className={`listing-primary ${props.className}`}>
      <Modal
        className="popup"
        title="Yêu cầu"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đăng nhập"
      >
        <p>Vui lòng đăng nhập để thực hiện thao tác !</p>
      </Modal>

      <div className="listing__thumbnail">
        <a onClick={() => toDetailHome()}>
          {/* <img className={`${props.classNameImg}`} src={image !== {} ? image?.url : ""} alt="listing" /> */}
          <img
            className={`${props.classNameImg}`}
            src={
              image?.url
                ? image?.url
                : "https://thietkenoithat.com/Portals/0/xNews/uploads/2017/9/1/mau-thiet-ke-biet-thu-kinh-sang-trong-cao-cap3.jpg"
            }
            alt="listing"
          />
        </a>

        <div className="listing-badges">
          <Tooltip
            placement="top"
            title={`Thể loại: ${props.listLatestNew?.type_apartment}`}
          >
            <span
              style={{ cursor: "default" }}
              className={`listing-badge ${
                props.listLatestNew?.status === "OPEN"
                  ? "sale"
                  : props.listLatestNew?.status === "PENDING"
                  ? "sale-pending"
                  : "sale-close"
              }`}
            >
              {props.listLatestNew?.type_apartment}
            </span>
          </Tooltip>

          <Tooltip
            placement="top"
            title={`Mức độ phù hợp: ${
              props.listLatestNew?.percent_suitable < 20
                ? "< 20"
                : props.listLatestNew?.percent_suitable || 0
            }%`}
          >
            {!props.listLatestNew?.percent_suitable ? (
              <span
                className={`listing-badge short`}
                style={{ cursor: "default" }}
                title={`Mức độ phù hợp 0%`}
              >
                0%
              </span>
            ) : (
              <span
                className={`listing-badge ${
                  props.listLatestNew?.percent_suitable >= 80
                    ? "sale"
                    : props.listLatestNew?.percent_suitable >= 30 &&
                      props.listLatestNew?.percent_suitable < 80
                    ? "medium"
                    : "short"
                }`}
                style={{ cursor: "default" }}
                title={`Mức độ phù hợp ${
                  props.listLatestNew?.percent_suitable < 20
                    ? "< 20"
                    : props.listLatestNew?.percent_suitable
                }%`}
              >
                {props.listLatestNew?.percent_suitable < 20
                  ? "< 20"
                  : props.listLatestNew?.percent_suitable}
                %
              </span>
            )}
          </Tooltip>
        </div>

        <div className="address">
          <i className="fas fa-map-marker-alt"></i>{" "}
          {props.listLatestNew?.address}
        </div>
      </div>
      <div className="listing__body">
        <div className="card-content">
          <div>
            <p className="listing-text" onClick={toDetailHome}>
              {props.listLatestNew?.title}
            </p>
            <span className="listing-price">
              {props.listLatestNew?.total_price}
            </span>
          </div>
          <div>
            <div className="acr-listing-icons">
              <Tooltip
                placement="top"
                title={`Phòng ngủ: ${props.listLatestNew?.bedroom_quantity}`}
              >
                <div className="acr-listing-icon">
                  <i className="flaticon-pillow"></i>
                  <span className="acr-listing-icon-value">
                    {props.listLatestNew?.bedroom_quantity}
                  </span>
                </div>
              </Tooltip>
              <Tooltip
                placement="top"
                title={`Phòng tắm: ${props.listLatestNew?.bathroom_quantity}`}
              >
                <div className="acr-listing-icon">
                  <i className="flaticon-bathtub"></i>
                  <span className="acr-listing-icon-value">
                    {props.listLatestNew?.bathroom_quantity}
                  </span>
                </div>
              </Tooltip>

              <Tooltip
                placement="top"
                title={`Diện tích: ${props.listLatestNew?.area} m2`}
              >
                <div className="acr-listing-icon">
                  <i className="flaticon-ruler"></i>
                  <span className="acr-listing-icon-value">
                    {props.listLatestNew?.area} m2
                  </span>
                </div>
              </Tooltip>
            </div>
            <div className="author">
              <div onClick={() => toDetailHome()}>
                <a className="listing__body--img">
                  <img
                    src={
                      props.listLatestNew?.author?.avatar?.name
                        ? getPhotosImgAvatar(
                            props.listLatestNew?.author?.avatar?.name
                          )
                        : Img
                    }
                    alt="agent"
                  />
                </a>
              </div>
              <div className="media-body">
                <h6>{props.listLatestNew?.author?.full_name}</h6>
                <span>{toTimeString(props.listLatestNew?.created_at)}</span>
              </div>
              <div className="icon-wrapper">
                <Tooltip title="So sánh">
                  <Popover trigger="click" onClick={addCompare}>
                    <div className="icon" style={{ marginRight: "5px" }}>
                      <i
                        style={{ color: isCompare ? "#01bbbc" : "" }}
                        className="fas fa-plus"
                      ></i>
                    </div>
                  </Popover>
                </Tooltip>
                <Tooltip title="Yêu thích">
                  <Popover trigger="click" onClick={setFavorite}>
                    <div className="icon" style={{ marginRight: "5px" }}>
                      <i
                        style={{ color: isFavorite ? "#ff0f59" : "" }}
                        className="far fa-heart"
                      ></i>
                    </div>
                  </Popover>
                </Tooltip>

                {/* <Popover className="popup" content={content} trigger="click">
                <div className="icon">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </Popover> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThumbnailPrimary;
