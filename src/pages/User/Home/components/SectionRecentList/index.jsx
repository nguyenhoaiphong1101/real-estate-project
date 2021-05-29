import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import './styles.scss';
import ThumbnailPrimary from '../../../../../components/Thumbnail/ThumbnailPrimary';
import ThumbnailExtra from '../../../../../components/Thumbnail/ThumbnailExtra';
import { useDispatch, useSelector } from 'react-redux';
import { loadListLatestNew } from '../../../../../actions/latestnew';

function SectionRecentList() {



    const listLatestNew = useSelector(state => state.latestnew.listLastetNew);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadListLatestNew());
        console.log(listLatestNew[0]);
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
                            <ThumbnailPrimary listLatestNew={listLatestNew[2]} />
                        </div>
                        <div className="item">
                            <ThumbnailPrimary listLatestNew={listLatestNew[3]} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    );
}

export default SectionRecentList;