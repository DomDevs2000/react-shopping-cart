import React, {useContext} from 'react';
import {StoreContext}  from './context/StoreContext'
import {Checkout} from "./components/Checkout";

export const CheckoutPage = (props) => {
    const {removeFromBasket} = props
    return(
        <>
            <Checkout removeFromBasket={removeFromBasket}/>

        </>
    );
}