import React from 'react';
import {Context} from '../../Context';

const ItemView = () => {
    let [order, setOrder] = React.useContext(Context).order;
    return(
        <div className="item-view">
            <h1 className="section-title">{order.activeItem.name}</h1>
        </div>
    );
}


export default ItemView;