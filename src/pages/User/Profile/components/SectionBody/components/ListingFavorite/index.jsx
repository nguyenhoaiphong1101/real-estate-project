import { List, Tabs } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteUser } from '../../../../../../../actions/user';
import ThumbnailExtra from '../../../../../../../components/Thumbnail/ThumbnailExtra';
import './styles.scss';



function ListingFavorite() {

    const listFavorite = useSelector(state => state.user.postFavorite.post)
    const totalItem = useSelector(state => state.user.postFavorite.totalItem)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFavoriteUser(null));
    }, []);

    return (
        <List className="listing-favorite-profile"
            itemLayout="vertical"
            size="small"
            pagination={{
                onChange: page => {
                    dispatch(getFavoriteUser({
                        page:page
                         }));
                },
                pageSize: 10,
                total: totalItem,
            }}
            dataSource={listFavorite}
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

export default ListingFavorite;