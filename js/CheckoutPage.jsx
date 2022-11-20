import React from 'react';
import {Checkout} from "./components/Checkout";
import {Navbar} from "./components/Navbar";

export const CheckoutPage = (props) => {
    const {removeFromBasket} = props
    return (
        <>
            <div className="checkout-page">
                <div>
                    <Navbar></Navbar>
                    <Checkout removeFromBasket={removeFromBasket}/>
                </div>
            </div>
        </>
    );
}