import React from 'react';
import './Main.scss';
import {Context} from '../../Context';

import FeaturedView from '../FeaturedView/FeaturedView';

const Main = () => {
    const [state] = React.useContext(Context).widget;
    return (
        <main className="main">
            {state.activeView === 'featured' && <FeaturedView />}
        </main>
    );
}

export default Main;