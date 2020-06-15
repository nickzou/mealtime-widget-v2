import React from 'react';
import './ButtonLarge.scss';

const ButtonLarge = props => {
    return(
        <button className={`button button-large ${props.classes} ${!!props.split && 'split'}`} disabled={props.disabled} onClick={props.clickFunction}>
            {props.icon}
            <span className="text">{props.text}</span>
            <span className="price">${props.price}</span>
        </button>
    );
}

export default ButtonLarge;