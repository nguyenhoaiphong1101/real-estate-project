import React, { useEffect } from 'react';
import "./styles.scss"
import SelectCustom from '../../../../../components/Select/index';
import ButtonSubmit from '../../../../../components/Button';
import { Collapse } from 'antd';
import { loadCountry, loadProvince } from '../../../../../actions/search';
import { useDispatch, useSelector } from 'react-redux';

const { Panel } = Collapse;


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

function FilterListings(props) {

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
        <Collapse defaultActiveKey={['1']} className="collapse collapse-filter">
            <Panel header={<h5 className="title">Lọc theo danh sách</h5>} key="1">
                <div className="filter-listings">
                    <form className="filter-listings-form">
                        <div className="form-group acr-custom-select">
                            <SelectCustom title="Thành phố" value={listCountry} callApi={getProvice} />
                        </div>
                        <div className="form-group acr-custom-select">
                            <SelectCustom title="Quận huyện" value={listProvince} />
                        </div>

                        <div className="form-group acr-custom-select">
                            <SelectCustom title="Mức giá" value={price} />
                        </div>
                        <div className="form-group acr-custom-select">
                            <SelectCustom title="Diện tích" value={acreage} />
                        </div>
                        <div className="form-group acr-custom-select">
                            <SelectCustom title="Dự án" value={diameters} />
                        </div>

                        <ButtonSubmit value="Áp dụng" className="submit" />
                    </form>
                </div>

            </Panel>

        </Collapse>
    );
}

export default FilterListings;