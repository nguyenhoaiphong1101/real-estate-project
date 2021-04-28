import React, { useState } from 'react';
import './styles.scss';

function Button({ value, className, icon }) {
    return (
        <button className={`button ${className}`}>{value}
            <i className={icon}></i>
        </button>
    );
}

export default Button;