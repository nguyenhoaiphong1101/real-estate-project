import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeCompare } from "../../../actions/user";
import { API_URL } from "../../../constants/Config";
import "./styles.scss";

function ThumbnailRecomend(props) {
  const user = useSelector((state) => state.user.user);
  const [isCompare, setIsCompare] = useState(false);
  const [image, setImage] = useState({});
  const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;
  const dispatch = useDispatch();
  const history = useHistory();

  const listCompare = useSelector((state) => [...state.user.listCompare]);

  useEffect(() => {
    if (listCompare.filter((item) => item === props?.list?.id).length === 0) {
      setIsCompare(false);
    } else {
      setIsCompare(true);
    }
  }, [listCompare]);

  const addCompare = () => {
    var temp = listCompare;
    if (
      listCompare.filter((item) => item === props.list?.id).length === 0 &&
      listCompare.length < 3
    ) {
      temp.push(props.list?.id);
      dispatch(changeCompare(temp));
    }
  };
  useEffect(() => {
    let imgs = [];
    props?.list?.photos?.forEach((item, index) => {
      imgs.push({ ...item, uid: index, url: getPhotosImg(item.name) });
    });
    setImage(imgs[0]);
  }, [props?.list]);
  const toDetailHome = () => {
    history.push(`/chi-tiet/${props?.list?.id}`, props?.list);
  };
  return (
    <div className="recomend-item">
      {/* <a><img  src="http://androthemes.com/themes/react/acres/assets/img/categories/3.jpg" alt="#" /></a> */}
      {/* <Img src={image?.url} webp /> */}

      <div
        className="recomend-img"
        style={{
          backgroundImage: `url(${
            image?.url
              ? image?.url
              : "https://thietkenoithat.com/Portals/0/xNews/uploads/2017/9/1/mau-thiet-ke-biet-thu-kinh-sang-trong-cao-cap3.jpg"
          })`,
        }}
        onClick={() => toDetailHome()}
      ></div>
      <div className="listing-badges">
        <span
          style={{ cursor: "default" }}
          className={`listing-badge ${
            props.list?.status === "OPEN"
              ? "sale"
              : props.list?.status === "PENDING"
              ? "sale-pending"
              : "sale-close"
          }`}
        >
          {props.list?.type_apartment}
        </span>
        {!props.list?.percent_suitable ? null : (
          <span
            className={`listing-badge ${
              props.list?.percent_suitable >= 80
                ? "sale"
                : props.list?.percent_suitable >= 30 &&
                  props.list?.percent_suitable < 80
                ? "medium"
                : "short"
            }`}
            style={{ cursor: "default" }}
            title={`Mức độ phù hợp ${
              props.list?.percent_suitable < 20
                ? "< 20"
                : props.list?.percent_suitable
            }%`}
          >
            {props.list?.percent_suitable < 20
              ? "< 20"
              : props.list?.percent_suitable}
            %
          </span>
        )}
      </div>
      <div className="bg"></div>
      <div className="recomend-item-body">
        <div style={{ zIndex: "1" }}>
          <h5 className="recommend-title" onClick={() => toDetailHome()}>
            {props.list?.title}
          </h5>
          <span>{props.list?.address}</span>
          <br />
          <span>{props.list?.total_price}</span>
          <br />
          <span
            onClick={addCompare}
            className="hoverCompare"
            style={
              isCompare
                ? { color: "#fff ", cursor: "default" }
                : { color: "#fff", cursor: "pointer" }
            }
          >
            <i style={{ fontSize: "12px" }} className="fas fa-plus"></i>{" "}
            {isCompare ? "Đã so sánh" : "So sánh"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ThumbnailRecomend;
