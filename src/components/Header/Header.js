import React from 'react';
import './Header.scss';
import MealTimeLogo from '../svg/MealTimeLogo';
import Button from '../Button/Button';
import IconChevronDown from '../svg/IconChevronDown';
import IconChevronLeft from '../svg/IconChevronLeft';
import ProgressBar from '../ProgressBar/ProgressBar';
import Select from 'react-dropdown-select';
import {Context} from '../../contexts/Context';

const Header = () => {
    let [widget, setWidget] = React.useContext(Context).widget;
    let [restaurant, setRestaurant] = React.useContext(Context).restaurant;

    let back = () => {
        setWidget({...widget, activeView: widget.previousView, previousView: widget.activeView});
    };
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
                {widget.activeView === 'featured' && <div className="header-middle"><p>Welcome to {restaurant.name} online ordering! Place an order for pickup below!</p></div>}
                {widget.activeView !== 'featured' && <div className="header-middle text-align-right"><Button classes={'button-small pill indigo'} split={true} icon={<IconChevronLeft />} text={'back'} clickFunction={back}/></div>}
            {!!widget.open && widget.activeView === 'featured' && 
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