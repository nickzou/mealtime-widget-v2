import React from 'react';
import './Main.scss';
import {Context} from '../../Context';

import FeaturedView from '../FeaturedView/FeaturedView';
import ItemView from '../ItemView/ItemView';

const Main = () => {
    const [state] = React.useContext(Context).widget;
    return (
        <main className="main">
            {state.activeView === 'featured' && <FeaturedView />}
            {state.activeView === 'item' && <ItemView />}
        </main>
    );
}

export default Main;