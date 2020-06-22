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
    const viewCart = () => {
        setWidget({...widget, activeView: 'cart', previousView: widget.activeView, currentOrderStep: 3});
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
            {widget.activeView !== 'item' && order.items.length > 0 && <ButtonLarge
                classes={'light footer-button'}
                split={true}
                text={'view cart'}
                price={order.items.reduce((acc, curr) => {
                    return acc + curr.selected_modifiers.reduce((a, c) => {
                        return a + c.option.price;
                    }, curr.base_price);
                }, 0).toFixed(2)}
                icon={<IconCart />}
                clickFunction={viewCart}
            />}
            <div className="signature">Powered by Mealtime</div>
        </footer>
    );
}

export default Footer;