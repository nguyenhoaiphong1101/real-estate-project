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



const price = [
    {
        id: -1,
        name: 'Tất cả'
    },
    {
        id: 2,
        name: '< 500 triệu'
    },
    {
        id: 3,
        name: '500 - 800 triệu'
    },
    {
        id: 4,
        name: '800 triệu - 1 tỷ'
    },
    {
        id: 5,
        name: '1 - 2 tỷ'
    },
    {
        id: 6,
        name: '3 - 5 tỷ'
    },
    {
        id: 7,
        name: '5 - 7 tỷ'
    },
    {
        id: 8,
        name: '7 - 10 tỷ'
    },
    {
        id: 9,
        name: '10 - 20 tỷ'
    },
    {
        id: 10,
        name: '20 - 30 tỷ'
    },
    {
        id: 11,
        name: '> 30 tỷ'
    },
]

const acreage = [
    {
        id: -1,
        name: 'Tất cả'
    },
    {
        id: 2,
        name: '<= 30 m2'
    },
    {
        id: 3,
        name: '30 - 50 m2'
    },
    {
        id: 4,
        name: '50 - 80 m2'
    },
    {
        id: 5,
        name: '80 - 100 m2'
    },
    {
        id: 6,
        name: '150 - 200 m2'
    },
    {
        id: 7,
        name: '200 - 250 m2'
    },
    {
        id: 8,
        name: '250 - 300 m2'
    },
    {
        id: 9,
        name: '300 - 500 m2'
    },
    {
        id: 9,
        name: '>= 500 m2'
    },
]



const diameters = [

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
                                                <SelectCustom title="Diện tích" value={acreage} />
                                            </div>
                                        </Col>

                                        <Col span={8} className="item-form">
                                            <div className="acr-custom-select form-group">
                                                <SelectCustom title="Dự án" value={diameters} />
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