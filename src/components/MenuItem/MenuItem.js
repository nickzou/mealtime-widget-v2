import React from 'react';
import './MenuItem.scss';
import {Context} from '../../contexts/Context';

const MenuItem = props => {
    let [widget, setWidget] = React.useContext(Context).widget;

    return(
        <div className="menu-item">
            <div className="left">
                <h2 className="item-title">{props.item.name}</h2>
                <p className="item-description">{props.item.description}</p>
            </div>
            <div className="right">
                <span className="item-price">${props.price}</span>
                <p>{props.calories} <strong>cal</strong></p>
                {!!props.addButton && <button className="button button-small blue" onClick={()=> {
                        setWidget({...widget, activeView: 'item', previousView: widget.activeView, activeItem: props.item, activeItemBasePrice: props.item.base_price, currentOrderStep: 2});
                    }}>add</button>}
            </div>
            {!!props.under && <div className="under">
                    {props.underContent}
                </div>
            }
        </div>
    );
}

export default MenuItem;