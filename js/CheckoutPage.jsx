import React, {useContext} from 'react';
import {Checkout} from "./components/Checkout";

export const CheckoutPage = (props) => {
    const {removeFromBasket} = props
    return (
        <>
            <div className="checkout-page">
                <Checkout removeFromBasket={removeFromBasket}/>
            </div>

        </>
    );
}