import React from 'react';
import './Header.scss';
import MealTimeLogo from '../svg/MealTimeLogo';
import IconChevronDown from '../svg/IconChevronDown';
import Select from 'react-dropdown-select';
import {Context} from '../../Context';

const Header = () => {
    let [widget, setWidget] = React.useContext(Context).widget;
    let [restaurant, setRestaurant] = React.useContext(Context).restaurant;
    let [order, setOrder] = React.useContext(Context).order;
    return(
        <header className="header">
            <div className="header-top">
                <div className="logo-wrapper">
                    <MealTimeLogo />
                </div>
                <button className="button button-icon" onClick={()=>setWidget({...widget, open: false})}>
                    <IconChevronDown />
                </button>
            </div>
            <div className="header-middle">
                <p>Welcome to {restaurant.name} online ordering! Place an order for pickup below!</p>
            </div>
            <div className="header-location-select">
                <Select
                    values={restaurant.location}
                    options={restaurant.locations}
                    dropdownGap={0}
                    onChange={(location)=> setRestaurant({...restaurant, location: location})}
                />
            </div>
        </header>
    );
}

export default Header;