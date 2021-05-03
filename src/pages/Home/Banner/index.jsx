import React, { useState } from 'react';
import { Carousel, Select } from 'antd';
import './styles.scss';
import { Row, Col } from 'antd';
import Button from '../../../components/Button';
import SelectCustom from '../../../components/Select/index';


const location = [
    {
        key: -1,
        value: 'Any Location'
    },
    {
        key: 2,
        value: 'California'
    },
    {
        key: 3,
        value: 'Lawndale'
    },
    {
        key: 4,
        value: 'Stroudsburg'
    },
    {
        key: 5,
        value: 'West Roxbury'
    },
    {
        key: 6,
        value: 'Willingboro'
    },
]

const status = [
    {
        key: -1,
        value: 'Any Status'
    },
    {
        key: 2,
        value: 'For Rent'
    },
    {
        key: 3,
        value: 'Featured'
    },
    {
        key: 4,
        value: 'For Sale'
    },
    {
        key: 5,
        value: 'Sold'
    },
    {
        key: 6,
        value: 'Special Offer'
    },
]

const price = [
    {
        key: -1,
        value: 'Any Range'
    },
    {
        key: 2,
        value: '$60k - $80k'
    },
    {
        key: 3,
        value: '$80k - $100k'
    },
    {
        key: 4,
        value: '$100k - $120k'
    },
    {
        key: 5,
        value: '$120k - $140k'
    },
    {
        key: 6,
        value: '$140k - $160k'
    },
]

const beds = [
    {
        key: -1,
        value: 'Any Amount'
    },
    {
        key: 2,
        value: '1'
    },
    {
        key: 3,
        value: '2'
    },
    {
        key: 4,
        value: '3'
    },
    {
        key: 5,
        value: '4'
    },
    {
        key: 6,
        value: '5+'
    },
]

const bathrooms = [
    {
        key: -1,
        value: 'Any Amount'
    },
    {
        key: 2,
        value: '1'
    },
    {
        key: 3,
        value: '2'
    },
    {
        key: 4,
        value: '3'
    },
    {
        key: 5,
        value: '4'
    },
    {
        key: 6,
        value: '5+'
    },
]

const types = [
    {
        key: -1,
        value: 'Any Types'
    },
    {
        key: 2,
        value: 'House'
    },
    {
        key: 3,
        value: 'Apartment'
    },
    {
        key: 4,
        value: 'Condo'
    },
    {
        key: 5,
        value: 'Townhome'
    },
    {
        key: 6,
        value: 'Villa'
    },
]

const diameters = [
    {
        key: -1,
        value: 'Any Ranges'
    },
    {
        key: 2,
        value: 'Within 2 miles'
    },
    {
        key: 3,
        value: 'Within 4 miles'
    },
    {
        key: 4,
        value: 'Within 6 miles'
    },
    {
        key: 5,
        value: 'Within 8 miles'
    },
    {
        key: 6,
        value: 'Within 8+ miles'
    },
]



function Banner() {
    const [active, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!active);
    }
    return (
        <div className="banner-home">
            <div className="container">
                <div className="banner-item">
                    <div className="banner-inner">
                        <div className="banner-text">
                            <h1 className="title text-white">Find Your Ideal Home Today</h1>
                            <p className="subtitle text-white">
                                Thousands of people have their flats up for grabs. Don't miss your chance to grab your
                                own house today. </p>
                        </div>
                        <div className="acr-filter-form">
                            <form>
                                <Row>
                                    <Col span={6} className="item-form">
                                        <div className="form-group acr-custom-select">
                                            <SelectCustom title="Location" value={location} />
                                        </div>
                                    </Col>
                                    <Col span={6} className="item-form">
                                        <div className="form-group acr-custom-select">
                                            <SelectCustom title="Status" value={status} />
                                        </div>
                                    </Col>
                                    <Col span={8} className="item-form">
                                        <div className="form-group acr-custom-select">
                                            <SelectCustom title="Price Range" value={price} />
                                        </div>
                                    </Col>
                                    <Col className="submit-btn" span={4}>
                                        <div className="form-group">
                                            <Button className="btn-custom" value="Search listings" />
                                        </div>
                                    </Col>
                                </Row>
                                <div className={`advanced-search d-block ${active ? 'active' : ''}`}>
                                    <Row >
                                        <Col span={6} className="item-form">
                                            <div className="acr-custom-select form-group">
                                                <SelectCustom title="Beds" value={beds} />
                                            </div>
                                        </Col>
                                        <Col span={6} className="item-form">
                                            <div className="acr-custom-select form-group">
                                                <SelectCustom title="Bathrooms" value={bathrooms} />
                                            </div>
                                        </Col>
                                        <Col span={6} className="item-form">
                                            <div className="acr-custom-select form-group">
                                                <SelectCustom title="Type" value={types} />
                                            </div>
                                        </Col>
                                        <Col span={6} className="item-form">
                                            <div className="acr-custom-select form-group">
                                                <SelectCustom title="Diameter" value={diameters} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </form>
                            <div className={`advanced-search-trigger semi-circle ${active ? 'active' : ''}`} onClick={handleToggle}>
                                <i className="fas fa-chevron-down">
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner;