import React from 'react';
import './Header.scss';
import MealTimeLogo from '../svg/MealTimeLogo';
import IconChevronDown from '../svg/IconChevronDown';
import ProgressBar from '../ProgressBar/ProgressBar';
import Select from 'react-dropdown-select';
import {Context} from '../../contexts/Context';

const Header = () => {
    let [widget, setWidget] = React.useContext(Context).widget;
    let [restaurant, setRestaurant] = React.useContext(Context).restaurant;
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
            {!!widget.open && widget.activeView !== 'item' && 
                <div className="header-location-select">
                    <Select
                        values={restaurant.location}
                        options={restaurant.locations}
                        dropdownGap={0}
                        onChange={(location)=> setRestaurant({...restaurant, location: location})}
                    />
                </div>
            }
            {!!widget.open && widget.activeView !== 'featured' &&
                <ProgressBar
                    currentStep={widget.currentOrderStep}
                    steps={widget.orderSteps}
                />
            }
        </header>
    );
}

export default Header;