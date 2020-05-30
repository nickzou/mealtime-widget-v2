import React from 'react';
import './MenuItem.scss';
import {Context} from '../../Context';

const MenuItem = props => {
    return(
        <div className="menu-item">
            <div className="left">
                <h2 className="item-title">{props.name}</h2>
                <p className="item-description">{props.description}</p>
            </div>
            <div className="right">
                <p>{props.price}</p>
                <p>{props.calories} cal</p>
            </div>
        </div>
    );
}

export default MenuItem;