import {Navbar} from "./components/Navbar";
import {Store} from "./components/Store";
import {Basket} from "./components/Basket";
import React from "react";

export const StorePage = (props) => {
    const {addToBasket, removeFromBasket} = props;
    return (
        <div className="store-page">
            <Navbar/>
            <Store addToBasket={addToBasket}></Store>
            <Basket removeFromBasket={removeFromBasket}></Basket>
        </div>
    )
}