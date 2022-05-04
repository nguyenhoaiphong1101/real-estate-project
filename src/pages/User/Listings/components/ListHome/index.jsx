import React, { useEffect, useState } from "react";
import { List } from "antd";
import "./styles.scss";
import ThumbnailExtra from "../../../../../components/Thumbnail/ThumbnailExtra";
import { useDispatch, useSelector } from "react-redux";
import { loadListSearch } from "../../../../../actions/listsearch";
import jwtDecode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";
import {
  clearObject,
  objectToQueryString,
} from "../../../../../constants/Config";

function ListHome(props) {
  const listSearch = useSelector((state) => state.listsearch.listSearch);
  const totalItem = useSelector((state) => state.listsearch.totalItem);

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const paramsQuery = qs.parse(window.location.search);
  const page = Object.keys(paramsQuery).length ? paramsQuery.page - 1 : 0;

  useEffect(() => {
    console.log(location);
    if (Object.keys(paramsQuery).length) {
      dispatch(
        loadListSearch(
          clearObject({
            ...paramsQuery,
            type_apartment:
              location.pathname === "/nha-dat-ban" ? "BUY" : "RENT",
          })
        )
      );
    } else {
      dispatch(
        loadListSearch(
          clearObject({
            type_apartment:
              location.pathname === "/nha-dat-ban" ? "BUY" : "RENT",
            page: 1,
          })
        )
      );
    }
  }, [location]);

  return (
    <List
      className="list-home"
      itemLayout="vertical"
      grid={{ column: 2 }}
      size="small"
      pagination={{
        onChange: (page) => {
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
        pageSize: 10,
        total: totalItem,
        showSizeChanger: false,
      }}
      dataSource={listSearch}
      renderItem={(item) => (
        <List.Item className="item" key={item.id}>
          <ThumbnailExtra listLatestNew={item} />
        </List.Item>
      )}
    ></List>
  );
}

export default ListHome;
