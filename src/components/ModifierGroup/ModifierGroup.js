import React from 'react';
import ModifierItem from '../ModifierItem/ModifierItem';

const ModifierGroup = (props, index) => {
    return(
        <form className="modifier-group">
            <h1 className="section-title">{props.name}</h1>
            {props.options.map((option, index) => {
                return <ModifierItem
                    key={index}
                    group={props.name}
                    option={option}
                />
            })}
        </form>
    );
};

export default ModifierGroup;