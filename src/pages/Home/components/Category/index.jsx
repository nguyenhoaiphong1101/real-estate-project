import React from 'react';
import './styles.scss'
import { Row, Col } from 'antd'


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
    return (
        <div className="category-section">
            <div className="container">
                <div className="title-category">
                    <h5>Thể loại</h5>
                    <h2>Tìm kiếm theo thể loại</h2>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col span={8} className="category">
                                <div className="category-item">
                                    <a href=""><img src={item.url} alt="#" /></a>
                                    <div className="category-item-body">
                                        <h5><a>{item.name}</a></h5>
                                        <span>{item.totalListing}</span>
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