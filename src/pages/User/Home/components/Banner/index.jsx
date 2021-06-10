import { Col, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import ButtonCustom from '../../../../../components/Button';
import SelectCustom from '../../../../../components/Select/index';
import './styles.scss';
import { Tabs } from 'antd';
import { loadCountry, loadProvince } from '../../../../../actions/search';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { loadListCategory } from '../../../../../actions/category';
import { loadListFilter } from '../../../../../actions/listfilter';
import { useHistory } from 'react-router';

const { TabPane } = Tabs;



const price = [
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

    const listCategory = useSelector(state => state.category.listCategory)

    const [valueSearchType, setValueSearchType] = useState(0)

    const dispatch = useDispatch();

    const history = useHistory();

    const onSearch = value => console.log(value);

    const [active, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!active);
    }

    const getProvice = (id) => {
        dispatch(loadProvince(id));
    }


    const [valueCategory, setValueCategory] = useState({ id: null, name: '' });
    const [valueCountry, setValueCountry] = useState({ id: null, name: '' });
    const [valueProvince, setValueProvince] = useState({ id: null, name: '' });
    const [valuePrice, setValuePrice] = useState({ id: null, name: '' });
    const [valueArea, setValueArea] = useState({ id: null, name: '' });

    useEffect(() => {
        if (valueCountry.id)
            getProvice(valueCountry.id);
    }, [valueCountry]);

    const changeValueCategory = (value, id) => {
        setValueCategory({ id: id.key, name: value });
    }
    const changeValueCountry = (value, id) => {
        setValueCountry({ id: id.key, name: value });

    }
    const changeValuePrice = (value, id) => {
        let data = price.filter(el => el.id == id.key);
        setValuePrice({ id: id.key, name: value, from: data[0]?.from, to: data[0]?.to });
    }
    const changeValueProvince = (value, id) => {
        setValueProvince({ id: id.key, name: value });
    }
    const changeValueArea = (value, id) => {

        let data = acreage.filter(el => el.id == id.key);

        setValueArea({ from: data[0]?.from, to: data[0]?.to });
    }

    const listCountry = useSelector(state => state.search.country);
    const listProvince = useSelector(state => state.search.province);
    const [typeAparment, setTypeAparment] = useState('1');

    const onChangeType = (value) => {
        setTypeAparment(value);
    }

    useEffect(() => {
        dispatch(loadCountry());
        dispatch(loadListCategory())
    }, [])

    const valueSearch = () => {

        dispatch(loadListFilter(valueCategory, valueCountry, valueProvince, valuePrice, valueArea));
        if (typeAparment == "1") {
            history.push('/nha-dat-ban', { from: '/' });
        }
        else {
            history.push('/nha-dat-thue', { from: '/' });
        }
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
                            <Tabs defaultActiveKey="1" className="pl-12" onChange={(e) => onChangeType(e)}>
                                <TabPane tab="NHÀ ĐẤT BÁN" key="1" >
                                </TabPane>
                                <TabPane tab="NHÀ ĐẤT CHO THUÊ" key="2">
                                </TabPane>
                            </Tabs>
                            <div className="search-type-real">
                                <Row>
                                    <Col span={6}>
                                        <SelectCustom title="Thể loại" onHandleChange={changeValueCategory} options={listCategory} />
                                    </Col>
                                    <Col span={14}>
                                        <Input className="input" placeholder="Tìm kiếm địa điểm, khu vực" onSearch={onSearch} />
                                    </Col>
                                    <Col span={4} onClick={() => valueSearch()}>
                                        <ButtonCustom value="Tìm kiếm" className="btn-search" />
                                    </Col>
                                </Row>


                            </div>
                            <form>
                                <Row>

                                    <Col span={12} className="item-form">
                                        <div className="form-group acr-custom-select">
                                            <SelectCustom title="Thành phố" onHandleChange={changeValueCountry} options={listCountry} />
                                        </div>
                                    </Col>

                                    <Col span={12} className="item-form">
                                        <div className="acr-custom-select form-group">
                                            <SelectCustom title="Quận huyện" onHandleChange={changeValueProvince} options={listProvince} />
                                        </div>
                                    </Col>
                                </Row>
                                <div className={`advanced-search d-block ${active == true ? 'active' : ''}`}>
                                    <Row >

                                        <Col span={12} className="item-form">
                                            <div className="acr-custom-select form-group">
                                                <SelectCustom title="Mức giá" onHandleChange={changeValuePrice} options={price} />
                                            </div>
                                        </Col>

                                        <Col span={12} className="item-form">
                                            <div className="acr-custom-select form-group">
                                                <SelectCustom title="Diện tích" onHandleChange={changeValueArea} options={acreage} />
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