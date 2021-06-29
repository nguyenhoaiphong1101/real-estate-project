import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import './styles.scss';
import ThumbnailPrimary from '../../../../../components/Thumbnail/ThumbnailPrimary';
import { useDispatch, useSelector } from 'react-redux';
import { loadListRecommend } from '../../../../../actions/recommend';
import { loadListSimilar } from '../../../../../actions/similar';
function SectionSimilarListing(props) {

    const listSimilar = useSelector(state => state.similar.listSimilar);
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadListSimilar({
            user_id: user.id,
            page: 1,
            size: 12,
        }));
    }, [user])

    return (
        listSimilar.length <= 1 ? ''
        :
        <div className="section-similar-listing">
            <h4 className="title">Danh sách tương tự</h4>
            <div className="container-fluid wrapper">
                <div className="list-feature">
                    <Row>
                        <Col span={12}>
                            <ThumbnailPrimary listLatestNew={listSimilar[0]} isRender={props.isRender} />
                        </Col>
                        <Col span={12}>
                            <ThumbnailPrimary listLatestNew={listSimilar[1]} isRender={props.isRender} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default SectionSimilarListing;