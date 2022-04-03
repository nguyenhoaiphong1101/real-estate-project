import React from 'react';
import './styles.scss';

function Button({ value, className, icon, onClick, disabled, style }) {
    return (
        <button style={style} onClick={onClick} disabled={disabled} className={`button ${className}`}>{value}
            {icon === undefined ? "" : <i className={icon}></i>}
        </button>
    );
}

export default Button;