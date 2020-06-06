import React from 'react';
import _ from 'lodash';
import './ModifierItem.scss';
import {Context} from '../../contexts/Context';
import replaceItem from '../../functions/replaceItem';

const ModifierItem = (props) => {
    let [widget, setWidget] = React.useContext(Context).widget;
    return(
        <div className="modifier-item">
            <h2 className="modifier-info">{props.option.name}</h2>
            <span className="modifier-price">{props.option.price}</span>
            <input
                type="radio"
                name={props.group}
                value={props.option.name}
                onChange={()=> setWidget({...widget, activeItem: 
                    {... widget.activeItem, selected_modifiers: 
                        _.unionBy([props], widget.activeItem.selected_modifiers, 'group')
                    }
                })}
                
            />
        </div>
    );
}

export default ModifierItem;