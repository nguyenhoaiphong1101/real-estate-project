import { Select, Input } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
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

function SelectCustom({ title, value }) {
    const [items, setItems] = useState(value);
    const [currentValue, setCurrentValue] = useState();
    const [valueSearch, setValueSearch] = useState('');
    const inputRef = useRef(null);
    const handleChange = (value) => {
        setCurrentValue(value)
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
        setItems(value.filter(item => item.value.toLowerCase().includes(valueSearch.toLowerCase())));
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
                        <Option value={item.value} key={item.key}  >
                            <DisplayItem value={item.value} lastchild={index == items.length - 1 ? 'last-child' : ''} />
                        </Option>
                    );
                })}
            </Select>
        </div>
    );
}

export default SelectCustom;