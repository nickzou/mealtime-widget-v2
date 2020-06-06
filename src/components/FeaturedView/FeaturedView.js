import React from 'react';
import './FeaturedView.scss';
import {Context} from '../../contexts/Context';

import MenuItem from '../MenuItem/MenuItem';

const FeaturedView = () => {
    const menu_items = React.useContext(Context).restaurant[0].menu_items;
    return(
        <div className="featured-view">
        <h1 className="section-title">Featured Items</h1>
            {!!menu_items && menu_items.map((item,index) => {if(!!item.featured) {
                return <MenuItem 
                    key={index}
                    item={item}
                    calories={`${item.calories.min} - ${item.calories.max}`}
                />}})}
        </div>
    );
}

export default FeaturedView;