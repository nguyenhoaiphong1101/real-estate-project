import React, { useEffect } from "react";
import "./styles.scss";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loadListCategory } from "../../../../../actions/category";
import { useHistory } from "react-router";
import { loadListFilter } from "../../../../../actions/listfilter";
import background from "../../../../../assets/images/Category/1.jpg";

const items = [
  {
    key: 1,
    url: "http://androthemes.com/themes/react/acres/assets/img/categories/1.jpg",
    name: "Thương mại",
    totalListing: "90 danh sách",
  },
  {
    key: 2,
    url: "http://androthemes.com/themes/react/acres/assets/img/categories/2.jpg",
    name: "Khu dân cư",
    totalListing: "433 danh sách",
  },
  {
    key: 3,
    url: "http://androthemes.com/themes/react/acres/assets/img/categories/3.jpg",
    name: "Biệt thự",
    totalListing: "221 danh sách",
  },
  {
    key: 4,
    url: "http://androthemes.com/themes/react/acres/assets/img/categories/4.jpg",
    name: "Căn hộ",
    totalListing: "185 danh sách",
  },
  {
    key: 5,
    url: "http://androthemes.com/themes/react/acres/assets/img/categories/5.jpg",
    name: "Nhà gần biển",
    totalListing: "230 danh sách",
  },
  {
    key: 6,
    url: "http://androthemes.com/themes/react/acres/assets/img/categories/6.jpg",
    name: "Nhà lầu",
    totalListing: "365 danh sách",
  },
];

function Category(props) {
  // const listCategory = useSelector(state => state.category.listCategory)
  // const dispatch = useDispatch();
  // const history = useHistory();

  // const valueSearch = (value) => {
  //     dispatch(loadListFilter(value, null, null, null, null));
  //     history.push('/nha-dat-ban', { from: '/' });
  // }

  return (
    <div className="category">
      <div className="title">Bất động sản theo thể loại</div>
      <div className="row-project-fe list-project-fe">
        <div className="column">
          <a href="https://nelo.com.vn/danh-muc-du-an/kien-truc/">
            <img
              src="https://nelo.com.vn/wp-content/uploads/2021/07/E_Photo-1-pts-1-scaled.jpg"
              width="2560"
              height="1440"
              data-src="https://nelo.com.vn/wp-content/uploads/2021/07/E_Photo-1-pts-1-scaled.jpg"
              alt="#"
              className="litespeed-loaded"
            />
            <span>Thương mại (90)</span>
          </a>
        </div>

        <div className="column">
          <a href="https://nelo.com.vn/danh-muc-du-an/noi-that/">
            <img
              src="https://nelo.com.vn/wp-content/uploads/2021/06/b-25-2.jpg"
              width="2048"
              height="1365"
              data-src="https://nelo.com.vn/wp-content/uploads/2021/06/b-25-2.jpg"
              alt="#"
              className="litespeed-loaded"
            />
            <span>Khu dân cư (433)</span>
          </a>
        </div>
        <div className="column">
          <a href="https://nelo.com.vn/danh-muc-du-an/cong-trinh-thuc-te/">
            <img
              src="https://nelo.com.vn/wp-content/uploads/2021/07/a-3-2-scaled.jpg"
              width="2560"
              height="1707"
              data-src="https://nelo.com.vn/wp-content/uploads/2021/07/a-3-2-scaled.jpg"
              alt="#"
              className="litespeed-loaded"
            />
            <span>Biệt thự (35)</span>
          </a>
        </div>
        <div className="column">
          <a href="https://nelo.com.vn/danh-muc-du-an/kien-truc/">
            <img
              src="https://nelo.com.vn/wp-content/uploads/2021/07/E_Photo-1-pts-1-scaled.jpg"
              width="2560"
              height="1440"
              data-src="https://nelo.com.vn/wp-content/uploads/2021/07/E_Photo-1-pts-1-scaled.jpg"
              alt="#"
              className="litespeed-loaded"
            />
            <span>Căn hộ (32)</span>
          </a>
        </div>
        <div className="column">
          <a href="https://nelo.com.vn/danh-muc-du-an/du-an-quy-hoach/">
            <img
              src="https://nelo.com.vn/wp-content/uploads/2021/06/D-2-2-scaled.jpg"
              width="2560"
              height="1440"
              data-src="https://nelo.com.vn/wp-content/uploads/2021/06/D-2-2-scaled.jpg"
              alt="#"
              className="litespeed-loaded"
            />
            <span>Nhà gần biển (56)</span>
          </a>
        </div>
        <div className="column">
          <a href="https://nelo.com.vn/danh-muc-du-an/video/">
            <img
              src="https://nelo.com.vn/wp-content/uploads/2021/07/6-1-scaled.jpg"
              width="2560"
              height="1440"
              data-src="https://nelo.com.vn/wp-content/uploads/2021/07/6-1-scaled.jpg"
              alt="#"
              className="litespeed-loaded"
            />
            <span>Nhà lầu (365)</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Category;
