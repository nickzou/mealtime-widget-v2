import React from 'react';
import './Header.scss';
import MealTimeLogo from '../svg/MealTimeLogo';
import IconChevronDown from '../svg/IconChevronDown';
import Select from 'react-dropdown-select';
import {Context} from '../../Context';

const Header = () => {
    let [state, setState] = React.useContext(Context).widget;
    let [info] = React.useContext(Context).restaurant;
    let [order, setOrder] = React.useContext(Context).order;
    return(
        <header className="header">
            <div className="header-top">
                <div className="logo-wrapper">
                    <MealTimeLogo />
                </div>
                <button className="button button-icon" onClick={()=>setState({...state, open: false})}>
                    <IconChevronDown />
                </button>
            </div>
            <div className="header-middle">
                <p>Welcome to {info.name} online ordering! Place an order for pickup below!</p>
            </div>
            <div className="header-location-select">
                <Select
                    options={info.locations}
                    dropdownGap={0}
                    onChange={(location)=> setOrder({...order, location: location[0]})}
                />
            </div>
        </header>
    );
}

export default Header;