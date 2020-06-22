import React from 'react';
import './CartView.scss';
import {Context} from '../../contexts/Context';
import MenuItem from '../MenuItem/MenuItem';
import getModifierPrice from '../../functions/getModifierPrice';
import Select from 'react-dropdown-select';

const CartView = () => {
    const [restaurant, setRestaurant] = React.useContext(Context).restaurant;
    const [order, setOrder] = React.useContext(Context).order;
    return(
        <div className="cart-view">
            <div className="cart">
                <h1 className="section-title">Order Confirmation</h1>
                {!!order.items && order.items.map((item, index) => {
                    return <MenuItem
                        key={index}
                        item={item}
                        calories={`${item.calories.min} - ${item.calories.max}`}
                        price={(item.base_price + getModifierPrice(item.selected_modifiers)).toFixed(2)}
                        under={true}
                        underContent={<ul className="item-modifiers-list">
                            {item.modifiers.map((i, idx) => {
                                console.log(i);
                                return item.selected_modifiers.map((j, jdx) => {
                                    if(j.group === i) {
                                        return <li key={jdx}><strong>{j.group}:</strong> {j.option.name}</li>;
                                    }
                                })
                            })}
                            </ul>}
                    />
                })}
            </div>
            <div className="totals">
                <div className="cart-location-select">
                    <Select
                        values={restaurant.location}
                        options={restaurant.locations}
                        dropdownGap={0}
                        onChange={(location)=> setRestaurant({...restaurant, location: location})}
                    />
                </div>
            </div>
        </div>
    )
}

export default CartView;