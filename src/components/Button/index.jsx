import React from 'react';
import './styles.scss';

function Button({ value, className, icon, onclick }) {
    return (
        <button className={`button ${className}`}>{value}
            {icon == undefined ? "" : <i className={icon}></i>}
        </button>
    );
}

export default Button;