import "./styles.scss"
import React, { useState, useRef, useEffect } from 'react';
import { Select } from 'antd';

function SelectExtra(props) {
    const [currentValue, setCurrentValue] = useState("");
    const handleChange = (value) => {
        setCurrentValue(value)
    };
    return (
        <Select onChange={handleChange} className={`${props.className}`} name={props.name} value={currentValue}>
            {props.listdata.map((item, index) => {
                return (
                    <Select.Option value={item.value} key={item.key}  >
                        {item.value}
                    </Select.Option>
                );
            })}
        </Select>
    );
}

export default SelectExtra;