import { Col, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import ButtonCustom from '../../../../../components/Button';
import SelectCustom from '../../../../../components/Select/index';
import './styles.scss';
import { Tabs } from 'antd';
import { loadCountry, loadProvince } from '../../../../../actions/search';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;


const location = [
    {
        id: -1,
        name: 'Any Location'
    },
    {
        id: 2,
        name: 'California'
    },
    {
        id: 3,
        name: 'Lawndale'
    },
    {
        id: 4,
        name: 'Stroudsburg'
    },
    {
        id: 5,
        name: 'West Roxbury'
    },
    {
        id: 6,
        name: 'Willingboro'
    },
]

const status = [
    {
        id: -1,
        name: 'Any Status'
    },
    {
        id: 2,
        name: 'For Rent'
    },
    {
        id: 3,
        name: 'Featured'
    },
    {
        id: 4,
        name: 'For Sale'
    },
    {
        id: 5,
        name: 'Sold'
    },
    {
        id: 6,
        name: 'Special Offer'
    },
]

const price = [
    {
        id: -1,
        name: 'Any Range'
    },
    {
        id: 2,
        name: '$60k - $80k'
    },
    {
        id: 3,
        name: '$80k - $100k'
    },
    {
        id: 4,
        name: '$100k - $120k'
    },
    {
        id: 5,
        name: '$120k - $140k'
    },
    {
        id: 6,
        name: '$140k - $160k'
    },
]

const beds = [
    {
        id: -1,
        name: 'Any Amount'
    },
    {
        id: 2,
        name: '1'
    },
    {
        id: 3,
        name: '2'
    },
    {
        id: 4,
        name: '3'
    },
    {
        id: 5,
        name: '4'
    },
    {
        id: 6,
        name: '5+'
    },
]

const bathrooms = [
    {
        id: -1,
        name: 'Any Amount'
    },
    {
        id: 2,
        name: '1'
    },
    {
        id: 3,
        name: '2'
    },
    {
        id: 4,
        name: '3'
    },
    {
        id: 5,
        name: '4'
    },
    {
        id: 6,
        name: '5+'
    },
]

const types = [
    {
        id: -1,
        name: 'Any Types'
    },
    {
        id: 2,
        name: 'House'
    },
    {
        id: 3,
        name: 'Apartment'
    },
    {
        id: 4,
        name: 'Condo'
    },
    {
        id: 5,
        name: 'Townhome'
    },
    {
        id: 6,
        name: 'Villa'
    },
]

const diameters = [
    {
        id: -1,
        name: 'Any Ranges'
    },
    {
        id: 2,
        name: 'Within 2 miles'
    },
    {
        id: 3,
        name: 'Within 4 miles'
    },
    {
        id: 4,
        name: 'Within 6 miles'
    },
    {
        id: 5,
        name: 'Within 8 miles'
    },
    {
        id: 6,
        name: 'Within 8+ miles'
    },
]



function Banner() {

    const [valueSearchType, setValueSearchType] = useState('Tất cả nhà đất')

    function handleMenuClick(e) {
        setValueSearchType(e.key);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="Tất cả nhà đất" >
                Tất cả nhà đất
          </Menu.Item>
            <Menu.Item key="Nhà thuê" >
                Nhà thuê
          </Menu.Item>
            <Menu.Item key="Nhà mua" >
                Nhà mua
          </Menu.Item>
        </Menu>
    );

    const onSearch = value => console.log(value);

    const [active, setActive] = useState(true);
    const handleToggle = () => {
        setActive(!active);
    }

    const listCountry = useSelector(state => state.search.country);
    const listProvince = useSelector(state => state.search.province);


    const dispatch = useDispatch();

    const getProvice = (id) => {
        dispatch(loadProvince(id))
    }


    useEffect(() => {
        dispatch(loadCountry());
    }, [])



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
                            <Tabs defaultActiveKey="1" className="pl-12">
                                <TabPane tab="NHÀ ĐẤT BÁN" key="1" >
                                </TabPane>
                                <TabPane tab="NHÀ ĐẤT CHO THUÊ" key="2">
                                </TabPane>
                            </Tabs>
                            <div className="seach-type-real">
                                <Dropdown overlay={menu} className="dropdown-search">
                                    <Button>
                                        {valueSearchType} <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Input.Search className="input-search" placeholder="Tìm kiếm địa điểm, khu vực" onSearch={onSearch} enterButton='Tìm kiếm    ' />
                            </div>
                            <form>
                                <Row>

                                    <Col span={12} className="item-form">
                                        <div className="form-group acr-custom-select">
                                            <SelectCustom title="Thành Phố" value={listCountry} callApi={getProvice} />
                                        </div>
                                    </Col>

                                    <Col span={12} className="item-form">
                                        <div className="acr-custom-select form-group">
                                            <SelectCustom title="Quận/Huyện" value={listProvince} />
                                        </div>
                                    </Col>
                                </Row>
                                <div className={`advanced-search d-block ${active == true ? 'active' : ''}`}>
                                    <Row >

                                        <Col span={8} className="item-form">
                                            <div className="acr-custom-select form-group">
                                                <SelectCustom title="Mức giá" value={price} />
                                            </div>
                                        </Col>

                                        <Col span={8} className="item-form">
                                            <div className="acr-custom-select form-group">
                                                <SelectCustom title="Diện tích" value={diameters} />
                                            </div>
                                        </Col>

                                        <Col span={8} className="item-form">
                                            <div className="acr-custom-select form-group">
                                                <SelectCustom title="Thể loại" value={diameters} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </form>
                            <div className={`advanced-search-trigger semi-circle ${active == true ? '' : 'active'}`} onClick={handleToggle}>
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