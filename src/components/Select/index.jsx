import { Select, Input } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './styles.scss';
const { Option } = Select;
const DisplayContainer = ({ title, value }) => {
    return (
        <span className="select-container" dir="ltr" data-select2-id="2">
            <label>{title} </label>
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

function SelectCustom({ title, options, onHandleChange, value, disabled }) {
    const [currentValue, setCurrentValue] = useState();
    const [valueSearch, setValueSearch] = useState('');


    const [items, setItems] = useState([]);
    const inputRef = useRef(null);
    const dispatch = useDispatch()
    // const area_from = useSelector(state => state.listsearch.area.area_from)
    // const area_to = useSelector(state => state.listsearch.area.area_to)
    // const category_id = useSelector(state => state.listsearch.category_id)
    // const district_id = useSelector(state => state.listsearch.district_id)
    // const price_from = useSelector(state => state.listsearch.price.price_from)
    // const price_to = useSelector(state => state.listsearch.price.price_to)
    // const province_id = useSelector(state => state.listsearch.province_id)


    const handleChange = (value, id) => {
        setCurrentValue(value);
        if (onHandleChange)
            onHandleChange(value, id);
        // if (callApi)
        //     callApi(id.key)
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
        if (!value)
            setCurrentValue(null)
        else {
            setCurrentValue(value.name)
        }
    }, [value])

    const history = useHistory();

    const detailHome = useSelector(state => state.detailhome.detailHome)
    useEffect(() => {
        if (valueSearch === '') {
            setItems(options);
        }
    })
    useEffect(() => {
        setItems(options?.filter(item => item.name?.toLowerCase().includes(valueSearch.toLowerCase())));
    }, [valueSearch])


    const checkTypeSelect = () => {
        if (history.location.pathname === '/dang-bai' || history.location.pathname === `/chinh-sua/${detailHome.id}`)
            return ''
        else if (title == "Mức giá" || title == "Diện tích" || title == "Thể loại") {
            return <Option value="Tất cả" key="-1">
                Tất cả
            </Option>
        }
    };
    return (
        <div>
            <Select
                className="selection-container"
                disabled={disabled}
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

                {/* <Option value="Tất cả" key="-1">
                    Tất cả
                </Option> */}
                {checkTypeSelect()}
                {items.map((item, index) => {
                    return (<Option value={item.name} key={item.id}>
                        {item.name}
                        <DisplayItem value={item.name} lastchild={index == items.length - 1 ? 'last-child' : ''} />
                    </Option>)
                })}
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
        </div >
    );
}

export default SelectCustom;