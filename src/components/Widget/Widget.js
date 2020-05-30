import React from 'react';
import './Widget.scss';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Widget = () => {
    return(
        <div className="mealtime-widget">
            <Header/>
            <Main />
            <Footer />
        </div>
    );
};

export default Widget;