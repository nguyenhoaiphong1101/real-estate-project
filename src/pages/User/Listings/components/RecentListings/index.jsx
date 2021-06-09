import React, { useEffect } from 'react';
import ThumbnailSecondary from '../../../../../components/Thumbnail/ThumbnailSecondary';
import { Collapse } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loadListLatestNew } from '../../../../../actions/latestnew';

const { Panel } = Collapse;


function RecentListings() {

    const listLatestNew = useSelector(state => state.latestnew.listLastetNew);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadListLatestNew());
    }, [])
    return (
        <Collapse defaultActiveKey={['1']} className="collapse collapse-recent">
            <Panel header={<h5 className="title">Danh sách gần đây</h5>} key="1">
                <div className="recent-listing filter-listings">
                    <div className="container-fluid wrapper">
                        {listLatestNew.map((item, index) => {
                            return <ThumbnailSecondary key={index} listLatestNew={item} />
                        })}
                    </div>
                </div>
            </Panel>

        </Collapse>
    );
}

export default RecentListings;