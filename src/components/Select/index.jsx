import { Select, Input } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProvince } from '../../actions/search';

import { searchCity } from '../../api/searchApi';
import Button from '../Button';
import './styles.scss';
const { Option } = Select;
const DisplayContainer = ({ title, value }) => {
    return (
        <span className="select-container" dir="ltr" data-select2-id="2">
            <label>{title}: </label>
            <span className="selection">
                <span className="select-value">
                    {value}
                </span>
            </span>
        </span>
    );
};

const DisplayItem = ({ value, lastchild }) => {
    return (
        <div className={`item-wrapper ${lastchild}`}>
            <span className="item-value">{value}</span>
        </div>
    );
};

function SelectCustom({ title, value, currentCountry }) {
    const [items, setItems] = useState(value);
    const [currentValue, setCurrentValue] = useState();
    const [valueSearch, setValueSearch] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch()
    const handleChange = (value, id) => {
        setCurrentValue(value);
        console.log(id.key);
        dispatch(loadProvince(id.key));
    };
    const preventEvent = (e) => {
        e.stopPropagation();
        e.preventDefault();
        inputRef.current.focus();
    };
    const onTodoChange = (value) => {
        setValueSearch(value);
    };

    useEffect(() => {
        if (valueSearch === '') {
            setItems(value);
        }
    })

    useEffect(() => {
        setItems(value.filter(item => item.name.toLowerCase().includes(valueSearch.toLowerCase())));
    }, [valueSearch])
    return (
        <div>
            <Select
                className="selection-container"
                onChange={handleChange}
                defaultValue={<DisplayContainer />}
                value={<DisplayContainer value={currentValue} title={title} />}
            >
                <Option className="input-wrapper" key=''>
                    <Input placeholder="Search"
                        value={valueSearch}
                        ref={inputRef}
                        onChange={e => onTodoChange(e.target.value)}
                        onClick={preventEvent}
                    />
                </Option>
                {items.map((item, index) => {
                    return (
                        <Option value={item.name} key={item.id} >
                            <DisplayItem value={item.name} lastchild={index == items.length - 1 ? 'last-child' : ''} />
                        </Option>
                    );
                })}
            </Select>
        </div>
    );
}

export default SelectCustom;