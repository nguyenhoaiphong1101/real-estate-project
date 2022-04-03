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

const price = [
  {
    id: 2,
    name: "< 500 triệu",
    from: 0,
    to: 500000000,
  },
  {
    id: 3,
    name: "500 - 800 triệu",
    from: 500000000,
    to: 800000000,
  },
  {
    id: 4,
    name: "800 triệu - 1 tỷ",
    from: 800000000,
    to: 1000000000,
  },
  {
    id: 5,
    name: "1 - 2 tỷ",
    from: 1000000000,
    to: 2000000000,
  },
  {
    id: 6,
    name: "2 - 3 tỷ",
    from: 2000000000,
    to: 3000000000,
  },
  {
    id: 7,
    name: "3 - 5 tỷ",
    from: 3000000000,
    to: 5000000000,
  },
  {
    id: 8,
    name: "5 - 7 tỷ",
    from: 5000000000,
    to: 7000000000,
  },
  {
    id: 9,
    name: "7 - 10 tỷ",
    from: 7000000000,
    to: 10000000000,
  },
  {
    id: 10,
    name: "10 - 20 tỷ",
    from: 10000000000,
    to: 20000000000,
  },
  {
    id: 11,
    name: "20 - 30 tỷ",
    from: 20000000000,
    to: 30000000000,
  },
  {
    id: 12,
    name: "> 30 tỷ",
    from: 3000000000,
    to: -1,
  },
];

const acreage = [
  {
    id: 2,
    name: "<= 30 m2",
    from: 0,
    to: 30,
  },
  {
    id: 3,
    name: "30 - 50 m2",
    from: 30,
    to: 50,
  },
  {
    id: 4,
    name: "50 - 80 m2",
    from: 50,
    to: 80,
  },
  {
    id: 5,
    name: "80 - 100 m2",
    from: 80,
    to: 100,
  },
  {
    id: 6,
    name: "100 - 150 m2",
    from: 100,
    to: 150,
  },
  {
    id: 7,
    name: "150 - 200 m2",
    from: 150,
    to: 200,
  },
  {
    id: 8,
    name: "200 - 250 m2",
    from: 200,
    to: 250,
  },
  {
    id: 9,
    name: "250 - 300 m2",
    from: 250,
    to: 300,
  },
  {
    id: 10,
    name: "300 - 500 m2",
    from: 300,
    to: 500,
  },
  {
    id: 11,
    name: ">= 500 m2",
    from: 500,
    to: -1,
  },
];

const diameters = [];

function Banner() {
  const listCategory = useSelector((state) => state.category.listCategory);

  const [valueSearchType, setValueSearchType] = useState(0);

  const dispatch = useDispatch();

  const history = useHistory();

  const onSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const [active, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!active);
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
  const changeValuePrice = (value, id) => {
    let data = price.filter((el) => el.id == id.key);
    console.log(data);
    setValuePrice({
      id: id.key,
      name: value,
      from: data[0]?.from,
      to: data[0]?.to,
    });
  };
  const changeValueProvince = (value, id) => {
    setValueProvince({ id: id.key, name: value });
  };
  const changeValueArea = (value, id) => {
    let data = acreage.filter((el) => el.id == id.key);

    setValueArea({
      id: id.key,
      name: value,
      from: data[0]?.from,
      to: data[0]?.to,
    });
  };

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
    <div
      className="banner-home"
      style={active ? { marginBottom: "70px" } : { marginBottom: "150px" }}
    >
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
          <div className="title-search">Tìm kiếm thông tin sản phẩm</div>
          <div className="card-filter"></div>
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default Banner;
