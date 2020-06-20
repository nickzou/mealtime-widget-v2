import React from 'react';
import './Button.scss';

const Button = props => {
    return(
        <button className={`button ${props.classes} ${!!props.split && 'split'}`} disabled={props.disabled} onClick={props.clickFunction}>
            {props.icon}
            <span className="text">{props.text}</span>
        </button>
    );
}

export default Button;