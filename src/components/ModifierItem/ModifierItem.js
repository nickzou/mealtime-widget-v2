import React from 'react';
import './ModifierItem.scss';

const ModifierItem = (props) => {
    return(
        <div className="modifier-item">
            <h2 className="modifier-info">{props.option.name}</h2>
            <span className="modifier-price">{props.option.price}</span>
            <input
                type="radio"
                name={props.group}
                value="1"
                onChange={()=> {console.log(props.group)}}
            />
        </div>
    );
}

export default ModifierItem;