import React, { useEffect, useState } from "react";
import { List } from "antd";
import "./styles.scss";
import ThumbnailExtra from "../../../../../components/Thumbnail/ThumbnailExtra";
import { useDispatch, useSelector } from "react-redux";
import { loadListSearch } from "../../../../../actions/listsearch";
import jwtDecode from "jwt-decode";

function ListHome(props) {
  const listSearch = useSelector((state) => state.listsearch.listSearch);
  const totalItem = useSelector((state) => state.listsearch.totalItem);

  const dispatch = useDispatch();

  const listDemo = [
    {
      id: 1,
      status: "OPEN",
      type_apartment: "Bán",
      author: {
        full_name: "Nguyễn Hoài Phong",
      },
      created_at: "11/01/2000",
      address: "Quận 7 Thành phố Hồ Chí Minh",
      total_price: 4000000000,
      title:
        "Biệt thự đầy đủ tiện nghi cần bán gấp thự đầy đủ tiện nghi cần bán gấp",
      bedroom_quantity: 4,
      bathroom_quantity: 3,
      area: 500,
    },
    {
      id: 2,
      status: "OPEN",
      type_apartment: "Bán",
      author: {
        full_name: "Nguyễn Hoài Phong",
      },
      created_at: "11/01/2000",
      address: "Quận 7 Thành phố Hồ Chí Minh",
      total_price: 4000000000,
      title:
        "Biệt thự đầy đủ tiện nghi cần bán gấp thự đầy đủ tiện nghi cần bán gấp",
      bedroom_quantity: 4,
      bathroom_quantity: 3,
      area: 500,
    },
    {
      id: 3,
      status: "OPEN",
      type_apartment: "Bán",
      author: {
        full_name: "Nguyễn Hoài Phong",
      },
      created_at: "11/01/2000",
      address: "Quận 7 Thành phố Hồ Chí Minh",
      total_price: 4000000000,
      title:
        "Biệt thự đầy đủ tiện nghi cần bán gấp thự đầy đủ tiện nghi cần bán gấp",
      bedroom_quantity: 4,
      bathroom_quantity: 3,
      area: 500,
    },
  ];

  const filter = useSelector((state) => state.listfilter);
  const token = localStorage.getItem("access_token");
  const [params, setParams] = useState({
    sort_by: undefined,
    sort_direction: undefined,
    page: 1,
  });
  useEffect(() => {
    if (props?.sortBy || props?.sortDirection) {
      dispatch(
        loadListSearch({
          ...params,
          type_apartment: props.typeListing === "Nhà đất bán" ? "BUY" : "RENT",
          area_from:
            filter?.valueArea?.from && filter?.valueArea?.id !== "-1"
              ? filter?.valueArea?.from
              : undefined,
          area_to:
            filter?.valueArea?.to &&
            filter?.valueArea?.id !== "-1" &&
            filter?.valueArea?.to !== -1
              ? filter?.valueArea?.to
              : undefined,
          category_id:
            filter?.valueCategory?.id && filter?.valueCategory?.id !== "-1"
              ? filter?.valueCategory?.id
              : undefined,
          district_id:
            filter?.valueDistrict?.id && filter?.valueDistrict?.id !== "-1"
              ? filter?.valueDistrict?.id
              : undefined,
          price_from:
            filter?.valuePrice?.from && filter?.valuePrice?.id !== "-1"
              ? filter?.valuePrice?.from
              : undefined,
          price_to:
            filter?.valuePrice?.to &&
            filter?.valuePrice?.id !== "-1" &&
            filter?.valuePrice?.to !== -1
              ? filter?.valuePrice?.to
              : undefined,
          province_id:
            filter?.valueProvince?.id && filter?.valueProvince?.id !== "-1"
              ? filter?.valueProvince?.id
              : undefined,
          user_id: token ? jwtDecode(token).id : null,
          search: filter.inputSearch,
          sort_by: props.sortBy,
          sort_direction: props.sortDirection,
        })
      );
      setParams({
        ...params,
        sort_by: props.sortBy,
        sort_direction: props.sortDirection,
      });
    }
  }, [props]);

  return (
    <List
      className="list-home"
      itemLayout="vertical"
      grid={{ column: 2 }}
      size="small"
      pagination={{
        onChange: (page) => {
          dispatch(
            loadListSearch({
              ...params,
              type_apartment:
                props.typeListing === "Nhà đất bán" ? "BUY" : "RENT",
              area_from:
                filter?.valueArea?.from && filter?.valueArea?.id !== "-1"
                  ? filter?.valueArea?.from
                  : undefined,
              area_to:
                filter?.valueArea?.to &&
                filter?.valueArea?.id !== "-1" &&
                filter?.valueArea?.to !== -1
                  ? filter?.valueArea?.to
                  : undefined,
              category_id:
                filter?.valueCategory?.id && filter?.valueCategory?.id !== "-1"
                  ? filter?.valueCategory?.id
                  : undefined,
              district_id:
                filter?.valueDistrict?.id && filter?.valueDistrict?.id !== "-1"
                  ? filter?.valueDistrict?.id
                  : undefined,
              price_from:
                filter?.valuePrice?.from && filter?.valuePrice?.id !== "-1"
                  ? filter?.valuePrice?.from
                  : undefined,
              price_to:
                filter?.valuePrice?.to &&
                filter?.valuePrice?.id !== "-1" &&
                filter?.valuePrice?.to !== -1
                  ? filter?.valuePrice?.to
                  : undefined,
              province_id:
                filter?.valueProvince?.id && filter?.valueProvince?.id !== "-1"
                  ? filter?.valueProvince?.id
                  : undefined,
              user_id: token ? jwtDecode(token).id : null,
              page: page,
            })
          );
          setParams({
            ...params,
            page: page,
          });
        },
        pageSize: 10,
        total: totalItem,
      }}
      //   dataSource={listSearch}
      dataSource={listDemo}
      renderItem={(item) => (
        <List.Item className="item" key={item.id}>
          <ThumbnailExtra listLatestNew={item} />
        </List.Item>
      )}
    ></List>
  );
}

export default ListHome;
