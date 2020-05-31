import React from 'react';
import './ItemView.scss';
import {Context} from '../../Context';

const ItemView = () => {
    let [order, setOrder] = React.useContext(Context).order;
    let [restaurant, setRestaurant] = React.useContext(Context).restaurant;
    return(
        <div className="item-view">
            <div className="item-header">
                <div className="left">
                    <h1 className="section-title">{order.activeItem.name}</h1>
                    {!!order.activeItem.description && <p className="item-info">{order.activeItem.description}</p>}
                </div>
                <div className="right">
                    <span className="item-price">{order.activeItem.base_price}</span>
                    <p>{`${order.activeItem.calories.min} - ${order.activeItem.calories.max}`}<strong>cal</strong></p>
                </div>
            </div>
            {order.activeItem.modifiers.map((modifier, index) => {
                return (
                    <div key={index}>
                        <h1 className="section-title">{modifier}</h1>
                        {restaurant.item_modifiers.filter((mod) => mod.name === modifier)[0].options.map((option, index) => {
                            return(<div key={index}>{option.name}</div>);
                        })}
                    </div>
                );
            })}
        </div>
    );
}


export default ItemView;