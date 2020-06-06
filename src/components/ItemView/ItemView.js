import React from 'react';
import './ItemView.scss';
import {Context} from '../../contexts/Context';

import ModifierGroup from '../ModifierGroup/ModifierGroup';

const ItemView = () => {
    let [widget, setWidget] = React.useContext(Context).widget;
    let [restaurant, setRestaurant] = React.useContext(Context).restaurant;
    return(
        <div className="item-view">
            <div className="item-header">
                <div className="left">
                    <h1 className="section-title">{widget.activeItem.name}</h1>
                    {!!widget.activeItem.description && <p className="item-info">{widget.activeItem.description}</p>}
                </div>
                <div className="right">
                    <span className="item-price">{widget.activeItem.base_price}</span>
                    <p>{`${widget.activeItem.calories.min} - ${widget.activeItem.calories.max}`}<strong>cal</strong></p>
                </div>
            </div>
            {widget.activeItem.modifiers.map((modifier, index) => {
                return (
                    <ModifierGroup key={index} name={modifier} options={restaurant.item_modifiers.filter((mod) => mod.name === modifier)[0].options}/>
                );
            })}
        </div>
    );
}


export default ItemView;