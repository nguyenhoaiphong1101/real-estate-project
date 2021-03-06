import { Popover, Tooltip } from "antd";
import Modal from "antd/lib/modal/Modal";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { postFavorite } from "../../../api/favorite";
import { API_URL } from "../../../constants/Config";
import "./styles.scss";
import Img from "../../../assets/images/noavatar.png";
import { deletePost } from "../../../api/userApi";
import {
  changeCompare,
  getFavoriteUser,
  getPostUser,
} from "../../../actions/user";

function ThumbnailExtra(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState({});
  const [isCompare, setIsCompare] = useState(false);

  const handleOk = () => {
    history.push("/dang-nhap");
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const toTimeString = (seconds) => {
    if (seconds) return moment(seconds).format("DD-MM-YYYY");
  };

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

  const dispatch = useDispatch();
  const history = useHistory();

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

  const token = localStorage.getItem("access_token");

  const toDetailHome = () => {
    // if (token) {
    //     dispatch(loadDetailHome(props?.listLatestNew?.id, jwtDecode(token).id))
    // }
    // else {
    //     dispatch(loadDetailHome(props?.listLatestNew?.id))
    // }
    history.push(`/chi-tiet/${props?.listLatestNew?.id}`);
  };

  const toUpdatePost = () => {
    history.push(`/chinh-sua/${props?.listLatestNew?.id}`);
  };

  const [isFavorite, setIsFavorite] = useState();

  const setFavorite = () => {
    if (token) {
      setIsFavorite(!isFavorite);
      postFavorite.POST(props.listLatestNew?.id).then((res) => {
        if (history.location.pathname === "/trang-ca-nhan")
          dispatch(getFavoriteUser(null));
      });
    } else {
      setIsVisible(true);
    }
  };

  const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;

  const getPhotosImgAvatar = (name) => `${API_URL}/public/image/avatar/${name}`;

  const toDeletePost = async () => {
    await deletePost.DELETE(props.listLatestNew?.id);
    dispatch(getPostUser());
  };

  useEffect(() => {
    setIsFavorite(props?.listLatestNew?.favourite);
    let imgs = [];
    props?.listLatestNew?.photos?.forEach((item, index) => {
      imgs.push({ ...item, uid: index, url: getPhotosImg(item.name) });
    });
    setImage(imgs[0]);
  }, [props?.listLatestNew]);

  const content = (
    <div className="popup-content-wrapper">
      <ul className="popup-content">
        <li style={{ textAlign: "center" }} onClick={toUpdatePost}>
          <i className="fas fa-pen"></i>Ch???nh s???a
        </li>
        <li style={{ textAlign: "center" }} onClick={toDeletePost}>
          <i className="fas fa-trash"></i>Xo?? b??i
        </li>
      </ul>
    </div>
  );
  return (
    <div className="listing-extra">
      <Modal
        className="popup"
        title="Y??u c???u"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="????ng nh???p"
      >
        <p>Vui l??ng ????ng nh???p ????? th???c hi???n thao t??c !</p>
      </Modal>

      <div className="listing__thumbnail">
        <a onClick={toDetailHome}>
          {/* <img src={image !== {} ? image?.url : "http://androthemes.com/themes/html/acres/assets/img/listings-list/8.jpg"} alt="listing" /> */}
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
            title={`Th??? lo???i: ${props.listLatestNew?.type_apartment}`}
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
          {history.location.pathname === "/trang-ca-nhan" ? (
            <Tooltip
              placement="top"
              title={`Tr???ng th??i: ${props.listLatestNew?.status}`}
            >
              <span
                className={`listing-badge-status ${
                  props.listLatestNew?.status === "OPEN"
                    ? "open"
                    : props.listLatestNew?.status === "PENDING"
                    ? "pending"
                    : "close"
                }`}
              >
                {props.listLatestNew?.status}
              </span>
            </Tooltip>
          ) : null}

          <Tooltip
            placement="top"
            title={`M???c ????? ph?? h???p ${
              props.listLatestNew?.percent_suitable < 20
                ? "< 20"
                : props.listLatestNew?.percent_suitable || "0%"
            }%`}
          >
            {!props.listLatestNew?.percent_suitable ? (
              <span
                className={`listing-badge short`}
                style={{ cursor: "default" }}
                title={`M???c ????? ph?? h???p 0%`}
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
                title={`M???c ????? ph?? h???p: ${
                  props.listLatestNew?.percent_suitable < 20
                    ? "< 20"
                    : props.listLatestNew?.percent_suitable || 0
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
        {/* <div className="listing-controls" onClick={() => setFavorite()}>
          <a className={isFavorite ? "favorite" : "un-favorite"}>
            <i className="far fa-heart"></i>
          </a>
        </div> */}
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
                title={`Ph??ng ng???: ${props.listLatestNew?.bedroom_quantity}`}
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
                title={`Ph??ng t???m: ${props.listLatestNew?.bathroom_quantity}`}
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
                title={`Di???n t??ch: ${props.listLatestNew?.area} m2`}
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
                <Tooltip title="So s??nh">
                  <Popover trigger="click" onClick={addCompare}>
                    <div className="icon" style={{ marginRight: "5px" }}>
                      <i
                        style={{ color: isCompare ? "#01bbbc" : "" }}
                        className="fas fa-plus"
                      ></i>
                    </div>
                  </Popover>
                </Tooltip>
                <Tooltip title="Y??u th??ch">
                  <Popover trigger="click" onClick={setFavorite}>
                    <div className="icon" style={{ marginRight: "5px" }}>
                      <i
                        style={{ color: isFavorite ? "#ff0f59" : "" }}
                        className="far fa-heart"
                      ></i>
                    </div>
                  </Popover>
                </Tooltip>

                {props.edit ? (
                  <Tooltip title="Ch???nh s???a">
                    <Popover
                      className="popup"
                      content={content}
                      trigger="click"
                    >
                      <div className="icon">
                        <i className="fas fa-ellipsis-h"></i>
                      </div>
                    </Popover>
                  </Tooltip>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {/* {history.location.pathname === "/trang-ca-nhan" ? (
          <div className="listing-gallery-wrapper">
            <Button
              value="X??a b??i"
              className="view-detail"
              onClick={() => toUpdatePost()}
            ></Button>
          </div>
        ) : null} */}
      </div>
    </div>
  );
}

export default ThumbnailExtra;
