import React from 'react';
import './MenuItem.scss';
import {Context} from '../../Context';

const MenuItem = props => {
    let [state, setState] = React.useContext(Context).widget;
    let [order, setOrder] = React.useContext(Context).order;
    return(
        <div className="menu-item">
            <div className="left">
                <h2 className="item-title">{props.item.name}</h2>
                <p className="item-description">{props.item.description}</p>
            </div>
            <div className="right">
                <span class="item-price">{props.item.price}</span>
                <p>{props.calories} <strong>cal</strong></p>
                <button onClick={()=> {setState({...state, activeView: 'item'}); setOrder({...order, activeItem: props.item})}}>add</button>
            </div>
        </div>
    );
}

export default MenuItem;