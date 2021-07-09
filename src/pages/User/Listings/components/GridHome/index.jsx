import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import "./styles.scss";
import ThumbnailPrimary from '../../../../../components/Thumbnail/ThumbnailPrimary'
import { useDispatch, useSelector } from 'react-redux';
import { loadListSearch } from '../../../../../actions/listsearch';
import jwtDecode from 'jwt-decode';




function GridHome(props) {
    const listSearch = useSelector(state => state.listsearch.listSearch)
    const totalItem = useSelector(state => state.listsearch.totalItem)

    const dispatch = useDispatch();

    const filter = useSelector(state => state.listfilter)
    const token = localStorage.getItem('access_token');
    const [params, setParams] = useState({ sort_by: undefined, sort_direction: undefined, page: 1 });

    useEffect(() => {
        if (props?.sortBy || props?.sortDirection) {
            dispatch(loadListSearch({
                ...params,
                type_apartment: props.typeListing === "Nhà đất bán" ? "BUY" : "RENT",
                area_from: filter?.valueArea?.from && filter?.valueArea?.id !== "-1" ? filter?.valueArea?.from : undefined,
                area_to: filter?.valueArea?.to && filter?.valueArea?.id !== "-1" && filter?.valueArea?.to !== -1 ? filter?.valueArea?.to : undefined,
                category_id: filter?.valueCategory?.id && filter?.valueCategory?.id !== "-1" ? filter?.valueCategory?.id : undefined,
                district_id: filter?.valueDistrict?.id && filter?.valueDistrict?.id !== "-1" ? filter?.valueDistrict?.id : undefined,
                price_from: filter?.valuePrice?.from && filter?.valuePrice?.id !== "-1" ? filter?.valuePrice?.from : undefined,
                price_to: filter?.valuePrice?.to && filter?.valuePrice?.id !== "-1" && filter?.valuePrice?.to !== -1 ? filter?.valuePrice?.to : undefined,
                province_id: filter?.valueProvince?.id && filter?.valueProvince?.id !== "-1" ? filter?.valueProvince?.id : undefined,
                user_id: token ? jwtDecode(token).id : null,
                sort_by: props.sortBy,
                search: filter.inputSearch,
                sort_direction: props.sortDirection,
            }))
            setParams({
                ...params,
                sort_by: props.sortBy,
                sort_direction: props.sortDirection,
            })
        }

    }, [props]);

    // useEffect(() => {
    //     dispatch(loadListSearch(1, 2));
    // }, [])


    return (
        <List className="grid-home"
            grid={{ gutter: 16, column: 2 }}
            pagination={{
                onChange: page => {
                    dispatch(loadListSearch({
                        ...params,
                        type_apartment: props.typeListing === "Nhà đất bán" ? "BUY" : "RENT",
                        area_from: filter?.valueArea?.from && filter?.valueArea?.id !== "-1" ? filter?.valueArea?.from : undefined,
                        area_to: filter?.valueArea?.to && filter?.valueArea?.id !== "-1" && filter?.valueArea?.to !== -1 ? filter?.valueArea?.to : undefined,
                        category_id: filter?.valueCategory?.id && filter?.valueCategory?.id !== "-1" ? filter?.valueCategory?.id : undefined,
                        district_id: filter?.valueDistrict?.id && filter?.valueDistrict?.id !== "-1" ? filter?.valueDistrict?.id : undefined,
                        price_from: filter?.valuePrice?.from && filter?.valuePrice?.id !== "-1" ? filter?.valuePrice?.from : undefined,
                        price_to: filter?.valuePrice?.to && filter?.valuePrice?.id !== "-1" && filter?.valuePrice?.to !== -1 ? filter?.valuePrice?.to : undefined,
                        province_id: filter?.valueProvince?.id && filter?.valueProvince?.id !== "-1" ? filter?.valueProvince?.id : undefined,
                        user_id: token ? jwtDecode(token).id : null,
                        page: page,
                    }))
                    setParams({
                        ...params,
                        page: page,
                    })
                },
                pageSize: 10,
                total: totalItem,
            }}
            dataSource={listSearch}
            renderItem={item => (
                <List.Item className="item"
                    key={item.id}
                >
                    <ThumbnailPrimary listLatestNew={item} />
                </List.Item>
            )}
        >
        </List>
    );
}

export default GridHome;