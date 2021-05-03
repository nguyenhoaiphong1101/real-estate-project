import React from 'react';
import './styles.scss'
import { Row, Col } from 'antd'


const items = [
    {
        key: 1,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/1.jpg',
        name: 'Commercial',
        totalListing: '90 Listings'
    },
    {
        key: 2,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/2.jpg',
        name: 'Residential',
        totalListing: '433 Listings'
    },
    {
        key: 3,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/3.jpg',
        name: 'Villas',
        totalListing: '221 Listings'
    },
    {
        key: 4,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/4.jpg',
        name: 'Apartments',
        totalListing: '185 Listings'
    },
    {
        key: 5,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/5.jpg',
        name: 'Beach House',
        totalListing: '230 Listings'
    },
    {
        key: 6,
        url: 'http://androthemes.com/themes/react/acres/assets/img/categories/6.jpg',
        name: 'Duplex',
        totalListing: '365 Listings'
    },
]


function Category(props) {
    return (
        <div className="category-section">
            <div className="container">
                <div className="title-category">
                    <h5>Categories</h5>
                    <h2>Browse By Category</h2>
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