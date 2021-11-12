import React from 'react';
import "./styles.scss"

function ItemCompare(props) {
    return (
        <div className="item-compare">
            <i class="icon fas fa-times"></i>
            <img className="img" src={props.item.src}></img>
            <p className="title">{props.item.title}</p>
        </div>
    );
}

export default ItemCompare;