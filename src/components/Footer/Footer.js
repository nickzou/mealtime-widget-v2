import React from 'react';
import './Footer.scss';
import {Context} from '../../contexts/Context';

import ButtonLarge from '../ButtonLarge/ButtonLarge';
import IconCart from '../svg/IconCart';

const clickFunc = () => {
    return console.log('this thing has been clicked');
}

const Footer = () => {
    let [widget, setWidget] = React.useContext(Context).widget;
    return(
        <footer className="footer">
            {widget.activeView === 'item' && <ButtonLarge
                classes={'light footer-button'}
                split={true}
                text={'add to order'}
                price={widget.activeItemPrice}
                icon={<IconCart />}
                clickFunction={clickFunc}
            />}
            <div className="signature">Powered by Mealtime</div>
        </footer>
    );
}

export default Footer;