import React, { useEffect, useState } from "react";
import { List, Spin } from "antd";
import "./styles.scss";
import ThumbnailPrimary from "../../../../../components/Thumbnail/ThumbnailPrimary";
import { useDispatch, useSelector } from "react-redux";
import { loadListSearch } from "../../../../../actions/listsearch";
import jwtDecode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";
import {
  clearObject,
  objectToQueryString,
} from "../../../../../constants/Config";
import { LoadingOutlined } from "@ant-design/icons";

function GridHome(props) {
  const listSearch = useSelector((state) => state.listsearch.listSearch);
  const loadingList = useSelector((state) => state.listsearch.loadingList);
  const totalItem = useSelector((state) => state.listsearch.totalItem);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

  const token = localStorage.getItem("access_token");
  const user_id = token ? jwtDecode(token).id : null;

  const paramsQuery = qs.parse(window.location.search);
  const page = Object.keys(paramsQuery).length
    ? paramsQuery.page
      ? paramsQuery.page - 1
      : 0
    : 0;
  const type_apartment = location.pathname === "/nha-dat-ban" ? "BUY" : "RENT";

  useEffect(() => {
    if (Object.keys(paramsQuery).length) {
      dispatch(
        loadListSearch(
          clearObject({
            ...paramsQuery,
            type_apartment,
            user_id,
          })
        )
      );
    } else {
      dispatch(
        loadListSearch(
          clearObject({
            type_apartment,
            user_id,
            page: 1,
          })
        )
      );
    }
  }, [location]);

  // useEffect(() => {
  //     dispatch(loadListSearch(1, 2));
  // }, [])

  return (
    <Spin
      indicator={antIcon}
      spinning={loadingList}
      style={{ maxHeight: "100%" }}
    >
      <List
        className="grid-home"
        grid={{ column: 4 }}
        pagination={{
          onChange: (page) => {
            window.scrollTo(0, 320);
            history.push(
              `?${objectToQueryString(
                clearObject({
                  ...paramsQuery,
                  page,
                })
              )}`
            );
          },
          current: page + 1,
          pageSize: 12,
          total: totalItem,
          showSizeChanger: false,
        }}
        dataSource={listSearch}
        renderItem={(item) => (
          <List.Item className="item" key={item.id}>
            <ThumbnailPrimary listLatestNew={item} />
          </List.Item>
        )}
      ></List>
    </Spin>
  );
}

export default GridHome;
