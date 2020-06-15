import React from 'react';
import './Main.scss';
import {Context} from '../../contexts/Context';

import FeaturedView from '../FeaturedView/FeaturedView';
import ItemView from '../ItemView/ItemView';
import CartView from '../CartView/CartView';

const Main = () => {
    const [widget] = React.useContext(Context).widget;
    return (
        <main className="main">
            {widget.activeView === 'featured' && <FeaturedView />}
            {widget.activeView === 'item' && <ItemView />}
            {widget.activeView === 'cart' && <CartView />}
        </main>
    );
}

export default Main;