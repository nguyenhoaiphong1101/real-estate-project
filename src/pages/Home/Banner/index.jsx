import React from 'react';
import { Carousel } from 'antd';
import './styles.scss';
import { Row, Col } from 'antd';


const items = [
    {
        key: 1,
        NAME: 'Iris Waston, Frederick Nebraska 20620',
        FORSALE: '$852,000',
        MORTGAGE: '$14,200/mo',
        BEDS: '3',
        BATHS: '2',
        SQFT: '2,499',
        TYPE: 'House',
        VIEW: 'City View',
        LOTSIZE: '89 Acres',
        CONDITION: 'Brand New',
        URL: 'http://androthemes.com/themes/react/acres/assets/img/banner/1.jpg'
    },
    {
        key: 2,
        NAME: 'Theodore Lowe, Azusa New York 39531',
        FORSALE: '$1,200,000',
        MORTGAGE: '$20,000/mo',
        BEDS: '4',
        BATHS: '3',
        SQFT: '3,120',
        TYPE: 'Duplex',
        VIEW: 'Forest View',
        LOTSIZE: '180 Acres',
        CONDITION: 'Brand New',
        URL: 'http://androthemes.com/themes/react/acres/assets/img/banner/2.jpg'
    },
]



function Banner() {

    return (
        <Carousel>
            {items.map(item => {
                return (
                    <div >
                        <div className="slide-img" style={{ backgroundImage: `url(${item.URL})` }}>

                        </div>
                        <div className="slide-info">
                            <div className="slide-info-left">
                                <span>FOR SALE</span>
                                <h3>{item.FORSALE}</h3>
                                <span>EST.MORTAGE</span>
                                <p>{item.MORTGAGE}</p>
                            </div>
                            <div className="slide-info-mid">
                                <h4><a href="#">{item.NAME}</a></h4>
                                <div className="slide-info-mid-properties">
                                    <p>BEDS<span>{item.BEDS}</span></p>
                                    <p>BATHS<span>{item.BATHS}</span></p>
                                    <p>SQFT<span>{item.SQFT}</span></p>
                                </div>
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore magnam praesentium, numquam nihil non quibusdam, temporibus dolor voluptates porro mollitia nobis saepe cum laborum odit consectetur repudiandae iusto assumenda quidem?</span>
                            </div>
                            <div className="slide-info-right">
                                <Row gutter={[16, 16]}>
                                    <Col span={12}>
                                        <span>TYPE</span>
                                        <p>{item.TYPE}</p>
                                    </Col>
                                    <Col span={12}>
                                        <span>VIEW</span>
                                        <p>{item.VIEW}</p>
                                    </Col>

                                    <Col span={12}>
                                        <span>LOT SIZE</span>
                                        <p>{item.LOTSIZE}</p>
                                    </Col>
                                    <Col span={12}>
                                        <span>CONDITION</span>
                                        <p>{item.CONDITION}</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Carousel >
    );
}

export default Banner;