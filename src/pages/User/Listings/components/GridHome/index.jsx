import React, { useEffect } from 'react';
import { List } from 'antd';
import "./styles.scss";
import ThumbnailPrimary from '../../../../../components/Thumbnail/ThumbnailPrimary'
import { useDispatch, useSelector } from 'react-redux';
import { loadListSearch } from '../../../../../actions/listsearch';




function GridHome(props) {
    const listSearch = useSelector(state => state.listsearch.listSearch)
    const totalItem = useSelector(state => state.listsearch.totalItem)

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(loadListSearch(1, 2));
    // }, [])


    return (
        <List className="grid-home"
            grid={{ gutter: 16, column: 2 }}
            pagination={{
                onChange: page => {
                    dispatch(loadListSearch(page, 2));
                },
                pageSize: 2,
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