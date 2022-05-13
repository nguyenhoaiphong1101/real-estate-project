import { Col, List, Row, Spin, Tabs } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteUser } from "../../../../../../../actions/user";
import ThumbnailExtra from "../../../../../../../components/Thumbnail/ThumbnailExtra";
import "./styles.scss";
import { LoadingOutlined } from "@ant-design/icons";

function ListingFavorite() {
  const listFavorite = useSelector((state) => state.user.postFavorite.post);
  const totalItem = useSelector((state) => state.user.postFavorite.totalItem);
  const loadingList = useSelector((state) => state.user.loadingFavorite);
  const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteUser(null));
  }, []);

  return (
    <Spin
      indicator={antIcon}
      spinning={loadingList}
      style={{ maxHeight: "100%" }}
    >
      <List
        className="listing-favorite-profile"
        itemLayout="vertical"
        size="small"
        style={{ marginTop: "5px", padding: "0 25px" }}
        grid={{ column: 2 }}
        pagination={{
          onChange: (page) => {
            dispatch(
              getFavoriteUser({
                page: page,
              })
            );
          },
          pageSize: 10,
          total: totalItem,
        }}
        dataSource={listFavorite}
        renderItem={(item) => (
          <List.Item
            style={{ borderBottom: "0", padding: "0 5px" }}
            key={item.id}
          >
            <ThumbnailExtra listLatestNew={item} />
          </List.Item>
        )}
      ></List>
    </Spin>
  );
}

export default ListingFavorite;
