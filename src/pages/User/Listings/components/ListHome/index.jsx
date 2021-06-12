import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import "./styles.scss";
import ThumbnailExtra from '../../../../../components/Thumbnail/ThumbnailExtra'
import { useDispatch, useSelector } from 'react-redux';
import { loadListSearch } from '../../../../../actions/listsearch';
import jwtDecode from 'jwt-decode';





function ListHome(props) {
    const listSearch = useSelector(state => state.listsearch.listSearch)
    const totalItem = useSelector(state => state.listsearch.totalItem)

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(loadListSearch(1, 2));
    // }, [])


    const filter = useSelector(state => state.listfilter)
    const token = localStorage.getItem('access_token');


    return (
        <List className="list-home"
            itemLayout="vertical"
            size="small"
            pagination={{
                onChange: page => {
                    dispatch(loadListSearch({
                        type_apartment: props.typeListing === "Nhà đất bán" ? "BUY" : "RENT",
                        area_from: filter?.valueArea?.from && filter?.valueArea?.id !== "-1" ? filter?.valueArea?.from : undefined,
                        area_to: filter?.valueArea?.to && filter?.valueArea?.id !== "-1" && filter?.valueArea?.to !== -1 ? filter?.valueArea?.to : undefined,
                        category_id: filter?.valueCategory?.id && filter?.valueCategory?.id !== "-1" ? filter?.valueCategory?.id : undefined,
                        district_id: filter?.valueDistrict?.id && filter?.valueDistrict?.id !== "-1" ? filter?.valueDistrict?.id : undefined,
                        price_from: filter?.valuePrice?.from && filter?.valuePrice?.id !== "-1" ? filter?.valuePrice?.from : undefined,
                        price_to: filter?.valuePrice?.to && filter?.valuePrice?.id !== "-1" && filter?.valuePrice?.to !== -1 ? filter?.valuePrice?.to : undefined,
                        province_id: filter?.valueProvince?.id && filter?.valueProvince?.id !== "-1" ? filter?.valueProvince?.id : undefined,
                        user_id: token ? jwtDecode(token).id : null,
                        page:page,
                    }))
                },
                pageSize: 10,
                total: totalItem,
            }}
            dataSource={listSearch}
            renderItem={item => (
                <List.Item className="item"
                    key={item.id}
                >
                    <ThumbnailExtra listLatestNew={item} />
                </List.Item>
            )}
        >
        </List>
    );
}

export default ListHome;