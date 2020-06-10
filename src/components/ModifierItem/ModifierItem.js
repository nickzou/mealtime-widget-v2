import React from 'react';
import _ from 'lodash';
import './ModifierItem.scss';
import {Context} from '../../contexts/Context';
import getModifierPrice from '../../functions/getModifierPrice';


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
                onChange={()=> {
                        setWidget({...widget, activeItem: 
                            {... widget.activeItem, selected_modifiers: 
                                _.unionBy([props], widget.activeItem.selected_modifiers, 'group')
                            }
                        });
                        setWidget({...widget, activeItemPrice: (widget.activeItemBasePrice + getModifierPrice(widget.activeItem.selected_modifiers))});
                    }
                }
                
            />
        </div>
    );
}

export default ModifierItem;