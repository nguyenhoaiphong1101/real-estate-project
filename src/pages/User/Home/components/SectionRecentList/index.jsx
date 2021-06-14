import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import './styles.scss';
import ThumbnailPrimary from '../../../../../components/Thumbnail/ThumbnailPrimary';
import ThumbnailExtra from '../../../../../components/Thumbnail/ThumbnailExtra';
import { useDispatch, useSelector } from 'react-redux';
import { loadListLatestNew } from '../../../../../actions/latestnew';
import jwtDecode from 'jwt-decode';

function SectionRecentList() {



    const listLatestNew = useSelector(state => state.latestnew.listLastetNew);
    const dispatch = useDispatch();

    const token = localStorage.getItem('access_token');

    useEffect(() => {
        dispatch(loadListLatestNew({
            user_id: token ? jwtDecode(token).id : null
        }));
    }, [])
    return (
        <div className="section-recent-list">
            <div className="container">
                <div className="title-wrapper">
                    <h5 className="sub-title">Tìm nhà của bạn</h5>
                    <h2 className="title">Danh sách gần nhất</h2>
                </div>
                <Row>
                    <Col span={16} className="col-left">
                        <div className="item">
                            <ThumbnailExtra listLatestNew={listLatestNew[0]}
                            />
                        </div>
                        <div className="item">
                            <ThumbnailPrimary listLatestNew={listLatestNew[1]} />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="item">
                            <ThumbnailPrimary listLatestNew={listLatestNew[2]} className="pb-10" />
                        </div>
                        <div className="item">
                            <ThumbnailPrimary listLatestNew={listLatestNew[3]} className="pb-10" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    );
}

export default SectionRecentList;