import { Col, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import ButtonCustom from "../../../../../components/Button";
import SelectCustom from "../../../../../components/Select/index";
import "./styles.scss";
import { Tabs } from "antd";
import { loadDistrict, loadProvince } from "../../../../../actions/search";
import { Input, Space } from "antd";
import { loadListCategory } from "../../../../../actions/category";
import { loadListFilter } from "../../../../../actions/listfilter";
import { useHistory } from "react-router";
import Filter from "../../../../../components/Filter";

const { TabPane } = Tabs;

const diameters = [];

function Banner() {
  const listCategory = useSelector((state) => state.category.listCategory);

  const [valueSearchType, setValueSearchType] = useState(0);

  const dispatch = useDispatch();

  const history = useHistory();

  const onSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const getDistrict = (id) => {
    dispatch(loadDistrict(id));
  };

  const [valueCategory, setValueCategory] = useState({ id: null, name: "" });
  const [valueDistrict, setValueDistrict] = useState({ id: null, name: "" });
  const [valueProvince, setValueProvince] = useState({ id: null, name: "" });
  const [valuePrice, setValuePrice] = useState({ id: null, name: "" });
  const [valueArea, setValueArea] = useState({ id: null, name: "" });
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    if (valueProvince.id) getDistrict(valueProvince.id);

    setValueDistrict({});
  }, [valueProvince]);

  const changeValueCategory = (value, id) => {
    setValueCategory({ id: id.key, name: value });
  };
  const changeValueDistrict = (value, id) => {
    setValueDistrict({ id: id.key, name: value });
  };
  // const changeValuePrice = (value, id) => {
  //   let data = price.filter((el) => el.id == id.key);
  //   console.log(data);
  //   setValuePrice({
  //     id: id.key,
  //     name: value,
  //     from: data[0]?.from,
  //     to: data[0]?.to,
  //   });
  // };
  // const changeValueProvince = (value, id) => {
  //   setValueProvince({ id: id.key, name: value });
  // };
  // const changeValueArea = (value, id) => {
  //   let data = acreage.filter((el) => el.id == id.key);

  //   setValueArea({
  //     id: id.key,
  //     name: value,
  //     from: data[0]?.from,
  //     to: data[0]?.to,
  //   });
  // };

  const listDistrict = useSelector((state) => state.search.district);
  const listProvince = useSelector((state) => state.search.province);
  const [typeAparment, setTypeAparment] = useState("1");

  const onChangeType = (value) => {
    setTypeAparment(value);
  };

  useEffect(() => {
    dispatch(loadProvince());
    dispatch(loadListCategory());
  }, []);

  const valueSearch = () => {
    dispatch(
      loadListFilter(
        valueCategory,
        valueProvince,
        valueDistrict,
        valuePrice,
        valueArea,
        inputSearch
      )
    );
    if (typeAparment == "1") {
      history.push("/nha-dat-ban", { from: "/" });
    } else {
      history.push("/nha-dat-thue", { from: "/" });
    }
  };

  return (
    <div className="banner-home" style={{ marginBottom: "20px" }}>
      <div className="container">
        <div className="banner-item">
          <div className="banner-inner">
            <div className="banner-text">
              <h1 className="title text-white">Find Your Ideal Home Today</h1>
              <p className="subtitle text-white">
                Tìm kiếm nơi ở phù hợp cho bạn ngay hôm nay. Hàng nghìn sự lựa
                chọn hoàn hảo đang chờ đợi{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="banner-filter">
          <div className="title-search">Tìm kiếm bất động sản</div>
          <div className="card-filter">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
