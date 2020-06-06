import React from 'react';
import './MenuItem.scss';
import {Context} from '../../contexts/Context';

const MenuItem = props => {
    let [widget, setWidget] = React.useContext(Context).widget;

    return(
        <div className="menu-item">
            <div className="left">
                <h2 className="item-title">{props.item.name}</h2>
                <p className="item-description">{props.item.description}</p>
            </div>
            <div className="right">
                <span className="item-price">{props.item.base_price}</span>
                <p>{props.calories} <strong>cal</strong></p>
                <button className="button button-small blue" onClick={()=> setWidget({...widget, activeView: 'item', activeItem: props.item})}>add</button>
            </div>
        </div>
    );
}

export default MenuItem;