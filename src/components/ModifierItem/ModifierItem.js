import React from 'react';
import _ from 'lodash';
import './ModifierItem.scss';
import {Context} from '../../contexts/Context';


const ModifierItem = (props) => {
    let [widget, setWidget] = React.useContext(Context).widget;
    return(
        <div className="modifier-item">
            <h2 className="modifier-info">{props.option.name}</h2>
            {props.option.price !== 0 && <span className="modifier-price">${props.option.price}</span>}
            <div className="modifier-input">
                <input
                    type="radio"
                    name={props.group}
                    value={props.option.name}
                    onChange={()=> {
                            setWidget({...widget, activeItem: 
                                {...widget.activeItem, selected_modifiers: _.unionBy([props], widget.activeItem.selected_modifiers, 'group')}
                            });

                        }
                    }
                    
                />
            </div>
        </div>
    );
}

export default ModifierItem;