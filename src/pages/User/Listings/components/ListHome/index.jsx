import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import "./styles.scss";
import ThumbnailExtra from '../../../../../components/Thumbnail/ThumbnailExtra'
import { useDispatch, useSelector } from 'react-redux';
import { loadListSearch } from '../../../../../actions/listsearch';





function ListHome(props) {
    const listSearch = useSelector(state => state.listsearch.listSearch)
    const totalItem = useSelector(state => state.listsearch.totalItem)

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(loadListSearch(1, 2));
    // }, [])





    return (
        <List className="list-home"
            itemLayout="vertical"
            size="small"
            pagination={{
                onChange: page => {
                    dispatch(loadListSearch(page, 10));
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