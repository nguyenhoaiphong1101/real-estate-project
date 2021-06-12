import { List, Tabs } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostUser } from '../../../../../../../actions/user';
import ThumbnailExtra from '../../../../../../../components/Thumbnail/ThumbnailExtra';
import './styles.scss';



function ListingPost() {

    const listPost = useSelector(state => state.user.postUser.post)
    const totalItem = useSelector(state => state.user.postUser.totalItem)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostUser(null));
    }, []);

    return (
        <List className="listing-post-profile"
            itemLayout="vertical"
            size="small"
            pagination={{
                onChange: page => {
                    dispatch(getPostUser({
                        page:page,
                    }));
                },
                pageSize: 10,
                total: totalItem,
            }}
            dataSource={listPost}
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

export default ListingPost;