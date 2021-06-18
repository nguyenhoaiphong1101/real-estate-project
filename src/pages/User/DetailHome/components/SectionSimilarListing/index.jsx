import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import './styles.scss';
import ThumbnailPrimary from '../../../../../components/Thumbnail/ThumbnailPrimary';
import { useDispatch, useSelector } from 'react-redux';
import { loadListRecommend } from '../../../../../actions/recommend';
function SectionSimilarListing() {

    const listRecommend = useSelector(state => state.recommend.listRecommend);
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadListRecommend({
            user_id: user.id,
            page: 1,
            size: 12,
        }));
    }, [user])

    return (
        <div className="section-similar-listing">
            <h4 className="title">Danh sách tương tự</h4>
            <div className="container-fluid wrapper">
                <div className="list-feature">
                    <Row>
                        <Col span={12}>
                            <ThumbnailPrimary listLatestNew={listRecommend[0]} />
                        </Col>
                        <Col span={12}>
                            <ThumbnailPrimary listLatestNew={listRecommend[1]} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default SectionSimilarListing;