import React, { useEffect, useState } from 'react';
import "./styles.scss"
import SelectCustom from '../../../../../components/Select/index';
import ButtonSubmit from '../../../../../components/Button';
import { Collapse } from 'antd';
import { loadCountry, loadDistrict, loadProvince } from '../../../../../actions/search';
import { connectAdvanced, useDispatch, useSelector } from 'react-redux';
import { loadListCategory } from '../../../../../actions/category';
import { listSearch } from '../../../../../api/listsearchApi';
import { loadListSearch } from '../../../../../actions/listsearch';
import { loadListFilter } from '../../../../../actions/listfilter';
import { useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';


const { Panel } = Collapse;


const price = [
    {
        id: 2,
        name: '< 500 triệu',
        from: 0,
        to: 500000000,
    },
    {
        id: 3,
        name: '500 - 800 triệu',
        from: 500000000,
        to: 800000000,
    },
    {
        id: 4,
        name: '800 triệu - 1 tỷ',
        from: 800000000,
        to: 1000000000,
    },
    {
        id: 5,
        name: '1 - 2 tỷ',
        from: 1000000000,
        to: 2000000000,
    },
    {
        id: 6,
        name: '2 - 3 tỷ',
        from: 2000000000,
        to: 3000000000,
    },
    {
        id: 7,
        name: '3 - 5 tỷ',
        from: 3000000000,
        to: 5000000000,
    },
    {
        id: 8,
        name: '5 - 7 tỷ',
        from: 5000000000,
        to: 7000000000,
    },
    {
        id: 9,
        name: '7 - 10 tỷ',
        from: 7000000000,
        to: 10000000000,
    },
    {
        id: 10,
        name: '10 - 20 tỷ',
        from: 10000000000,
        to: 20000000000,
    },
    {
        id: 11,
        name: '20 - 30 tỷ',
        from: 20000000000,
        to: 30000000000,
    },
    {
        id: 12,
        name: '> 30 tỷ',
        from: 3000000000,
        to: -1,
    },
]

const acreage = [

    {
        id: 2,
        name: '<= 30 m2',
        from: 0,
        to: 30,
    },
    {
        id: 3,
        name: '30 - 50 m2',
        from: 30,
        to: 50,
    },
    {
        id: 4,
        name: '50 - 80 m2',
        from: 50,
        to: 80,
    },
    {
        id: 5,
        name: '80 - 100 m2',
        from: 80,
        to: 100,
    },
    {
        id: 6,
        name: '100 - 150 m2',
        from: 100,
        to: 150,
    },
    {
        id: 7,
        name: '150 - 200 m2',
        from: 150,
        to: 200,
    },
    {
        id: 8,
        name: '200 - 250 m2',
        from: 200,
        to: 250,
    },
    {
        id: 9,
        name: '250 - 300 m2',
        from: 250,
        to: 300,
    },
    {
        id: 10,
        name: '300 - 500 m2',
        from: 300,
        to: 500,
    },
    {
        id: 11,
        name: '>= 500 m2',
        from: 500,
        to: -1,
    },
]



function FilterListings(props) {

    const listDistrict = useSelector(state => state.search.district);
    const listProvince = useSelector(state => state.search.province);
    const listCategory = useSelector(state => state.category.listCategory);

    const filter = useSelector(state => state.listfilter)

    const [valueCategory, setValueCategory] = useState({ id: null, name: '' });
    const [valueDistrict, setValueDistrict] = useState({ id: null, name: '' });
    const [valueProvince, setValueProvince] = useState({ id: null, name: '' });
    const [valuePrice, setValuePrice] = useState({ id: null, name: '' });
    const [valueArea, setValueArea] = useState({ id: null, name: '' });

    const dispatch = useDispatch();

    const getDistrict = (id) => {
        dispatch(loadDistrict(id));
    }

    const location = useLocation();

    useEffect(() => {
        dispatch(loadProvince());
        dispatch(loadListCategory());
        // dispatch(loadListSearch({
        //     type_apartment: typeListing,
        // }))

        setValueCategory(filter.valueCategory);
        setValueDistrict(filter.valueDistrict);
        setValueProvince(filter.valueProvince);
        setValuePrice(filter.valuePrice);
        setValueArea(filter.valueArea);
        // valueCategory, valueCountry, valueProvince, valuePrice, valueArea
    }, [])
    useEffect(() => {
        if (location.state?.from !== '/') {
            dispatch(loadListSearch({
                type_apartment: props.typeListing === "Nhà đất bán" ? "BUY" : "RENT",
            }))
            setValueCategory(null);
            setValueDistrict(null);
            setValueProvince(null);
            setValuePrice(null);
            setValueArea(null);
            dispatch(loadProvince(0))
        }
        else {
            searchFilter(filter.valueCategory, filter.valueProvince, filter.valueDistrict, filter.valuePrice, filter.valueArea, filter.inputSearch)
        }

    }, [props.typeListing])

    useEffect(() => {
        if (valueProvince?.id)
            getDistrict(valueProvince?.id);
        setValueDistrict({});
    }, [valueProvince]);

    const changeValueCategory = (value, id) => {
        setValueCategory({ id: id.key, name: value });
    }
    const changeValueDistrict = (value, id) => {
        setValueDistrict({ id: id.key, name: value });

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
    const token = localStorage.getItem('access_token');

    const searchFilter = async (valueCategory, valueProvince, valueDistrict, valuePrice, valueArea, inputSearch) => {


        await dispatch(loadListSearch({
            type_apartment: props.typeListing === "Nhà đất bán" ? "BUY" : "RENT",
            area_from: valueArea?.from && valueArea?.id !== "-1" ? valueArea?.from : undefined,
            area_to: valueArea?.to && valueArea?.id !== "-1" && valueArea?.to !== -1 ? valueArea.to : undefined,
            category_id: valueCategory?.id && valueCategory?.id !== "-1" ? valueCategory?.id : undefined,
            district_id: valueDistrict?.id && valueDistrict?.id !== "-1" ? valueDistrict?.id : undefined,
            price_from: valuePrice?.from && valuePrice?.id !== "-1" ? valuePrice?.from : undefined,
            price_to: valuePrice?.to && valuePrice?.id !== "-1" && valuePrice?.to !== -1 ? valuePrice.to : undefined,
            province_id: valueProvince?.id && valueProvince?.id !== "-1" ? valueProvince?.id : undefined,
            search: inputSearch ? inputSearch : undefined,
            user_id: token ? jwtDecode(token).id : null,
            page: 1,
        }))
        dispatch(loadListFilter(valueCategory, valueProvince, valueDistrict, valuePrice, valueArea));
        // (page, size, area_from, area_to, category_id, district_id, price_from, price_to, province_id)
    }

    return (
        <div className="listting-filter">
            <Collapse defaultActiveKey={['1']} className="collapse collapse-filter">
                <Panel header={<h5 className="title">Lọc theo danh sách</h5>} key="1">
                    <div className="filter-listings">
                        <form className="filter-listings-form">
                            <div className="form-group acr-custom-select">
                                <SelectCustom title="Thể loại" value={valueCategory} onHandleChange={changeValueCategory} options={listCategory} />
                            </div>
                            <div className="form-group acr-custom-select">
                                <SelectCustom title="Thành phố" value={valueProvince} onHandleChange={changeValueProvince} options={listProvince} />
                            </div>
                            <div className="form-group acr-custom-select">
                                <SelectCustom title="Quận huyện" value={valueDistrict} onHandleChange={changeValueDistrict} options={listDistrict} />
                            </div>

                            <div className="form-group acr-custom-select">
                                <SelectCustom title="Mức giá" value={valuePrice} onHandleChange={changeValuePrice} options={price} />
                            </div>
                            <div className="form-group acr-custom-select">
                                <SelectCustom title="Diện tích" value={valueArea} onHandleChange={changeValueArea} options={acreage} />
                            </div>
                        </form>
                    </div>

                </Panel>
                <div onClick={() => searchFilter(valueCategory, valueProvince, valueDistrict, valuePrice, valueArea)}>
                    <ButtonSubmit value="Áp dụng" className="btn-submit" />
                </div>

            </Collapse>
        </div>

    );
}

export default FilterListings;