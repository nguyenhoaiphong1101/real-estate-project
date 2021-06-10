import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadListLatestNew } from '../../../../../../../actions/latestnew';
import ThumbnailSecondary from '../../../../../../../components/Thumbnail/ThumbnailSecondary';
import './styles.scss';
function RecentList() {
    const listLatestNew = useSelector(state => state.latestnew.listLastetNew);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadListLatestNew());
    }, [])

    return (
        <div className="recent-listing">
            <h4 className="title">Danh sách gần đây</h4>
            <div className="container-fluid wrapper">
                {listLatestNew.map((item, index) => {
                    return <ThumbnailSecondary key={index} listLatestNew={item} />
                })}
            </div>
        </div>
    );
}

export default RecentList;