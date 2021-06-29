import React, { useEffect } from 'react';
import './styles.scss'
import { Row, Col } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { loadListCategory } from '../../../../../actions/category';
import { useHistory } from 'react-router';
import { loadListFilter } from '../../../../../actions/listfilter';
import background from '../../../../../assets/images/Category/1.jpg';



const items = [
    {
        key: 1,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/1.jpg',
        name: 'Thương mại',
        totalListing: '90 danh sách'
    },
    {
        key: 2,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/2.jpg',
        name: 'Khu dân cư',
        totalListing: '433 danh sách'
    },
    {
        key: 3,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/3.jpg',
        name: 'Biệt thự',
        totalListing: '221 danh sách'
    },
    {
        key: 4,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/4.jpg',
        name: 'Căn hộ',
        totalListing: '185 danh sách'
    },
    {
        key: 5,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/5.jpg',
        name: 'Nhà gần biển',
        totalListing: '230 danh sách'
    },
    {
        key: 6,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/6.jpg',
        name: 'Nhà lầu',
        totalListing: '365 danh sách'
    },
]


function Category(props) {

    const listCategory = useSelector(state => state.category.listCategory)
    const dispatch = useDispatch();
    const history = useHistory();

    const valueSearch = (value) => {
        dispatch(loadListFilter(value, null, null, null, null));
        history.push('/nha-dat-ban', { from: '/' });
    }


    return (
        <div className="category-section">
            <div className="container">
                <div className="title-category">
                    <h5>Thể loại</h5>
                    <h2>Tìm kiếm theo thể loại</h2>
                </div>
                <Row gutter={[16, 16]}>
                    {listCategory.map((item, index) => {
                        if (index < 6) return (
                            <Col key={item.id} span={8} className="category" onClick={() => valueSearch(item)}>
                                <div className="category-item" >
                                    {/* <a><img src="http://androthemes.com/themes/react/acres/assets/img/categories/3.jpg" alt="#" /></a> */}
                                    <div className={`recomend-img recomend-img-${index}`}></div>
                                    <div className="category-item-body">
                                        <h5><a>{item.name}</a></h5>
                                        <span>({item.totalItem})</span>
                                    </div>
                                </div>

                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default Category;