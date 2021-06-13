import React, { useEffect } from 'react';
import './styles.scss'
import { List } from 'antd';
import ThumbnailDetailRecommend from '../../../components/Thumbnail/ThumbnailDetailRecommend';
import { useDispatch, useSelector } from 'react-redux';
import { loadListRecommend } from '../../../actions/recommend';

function Recommend(props) {

    const listRecommend = useSelector(state => state.recommend.listRecommend);
    const totalItem = useSelector(state => state.recommend.totalItem);
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
        <div className="section-recommend">
            <div className="sub-header">
                <div className="container">
                    <div className="subheader-inner">
                        <h1 className="title">Danh sách phù hợp</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a>
                                        <i className="fas fa-home"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Danh sách phù hợp
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="recommend-title">
                <div className="container">
                    <h2>Tất cả danh sách phù hợp với bạn</h2>
                </div>
                <List className="grid-home container"
                    grid={{ gutter: 16, column: 4, row: 3 }}
                    pagination={{
                        onChange: page => { dispatch(loadListRecommend({
                            user_id: user.id,
                            page: page,
                            size: 12,
                        }));
                        },
                        pageSize: 12,
                        total: totalItem,
                    }}
                    dataSource={listRecommend}
                    renderItem={item => (
                        <List.Item className="item"
                            key={item.id}
                        >
                            <ThumbnailDetailRecommend list={item} />
                        </List.Item>
                    )}
                >
                </List>
            </div>
        </div>
    );
}

export default Recommend;