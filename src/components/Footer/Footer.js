import React from 'react';
import './Footer.scss';
import {Context} from '../../contexts/Context';

import ButtonLarge from '../ButtonLarge/ButtonLarge';
import IconCart from '../svg/IconCart';

import getModifierPrice from '../../functions/getModifierPrice';

const Footer = () => {
    let [widget, setWidget] = React.useContext(Context).widget;
    let [order, setOrder] = React.useContext(Context).order;
    const addToCart = () => {
        setWidget({...widget, activeView: 'featured', previousView: widget.activeView});
        setOrder({...order, items: [...order.items, widget.activeItem]});
    }
    return(
        <footer className="footer">
            {widget.activeView === 'item' && <ButtonLarge
                classes={'light footer-button'}
                split={true}
                text={'add to order'}
                price={(widget.activeItemBasePrice + getModifierPrice(widget.activeItem.selected_modifiers)).toFixed(2)}
                icon={<IconCart />}
                disabled={widget.activeView === 'item' && widget.activeItem.selected_modifiers.length < widget.activeItem.modifiers.length}
                clickFunction={addToCart}
            />}
            <div className="signature">Powered by Mealtime</div>
        </footer>
    );
}

export default Footer;