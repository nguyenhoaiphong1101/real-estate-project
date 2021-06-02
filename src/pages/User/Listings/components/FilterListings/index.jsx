import React, { useEffect } from 'react';
import "./styles.scss"
import SelectCustom from '../../../../../components/Select/index';
import ButtonSubmit from '../../../../../components/Button';
import { Collapse } from 'antd';
import { loadCountry, loadProvince } from '../../../../../actions/search';
import { useDispatch, useSelector } from 'react-redux';

const { Panel } = Collapse;


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
                            <SelectCustom title="Đường phố" value={types} />
                        </div>
                        <div className="form-group acr-custom-select">
                            <SelectCustom title="Giá tiền" value={price} />
                        </div>
                        <div className="form-group acr-custom-select">
                            <SelectCustom title="Diện tích" value={beds} />
                        </div>
                        <div className="form-group acr-custom-select">
                            <SelectCustom title="Hướng nhà" value={bathrooms} />
                        </div>

                        <ButtonSubmit value="Áp dụng" className="submit" />
                    </form>
                </div>

            </Panel>

        </Collapse>
    );
}

export default FilterListings;