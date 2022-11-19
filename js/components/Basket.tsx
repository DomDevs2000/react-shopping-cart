import React, {useContext, useEffect} from 'react';
import {StoreContext} from '../context/StoreContext'

export const Basket = (props) => {
    const removeFromBasket = props.removeFromBasket
    const store = useContext(StoreContext)
    const cart = store.cart

    return (
        <div className="basket">

            <h1>Basket</h1>
            <ul>{cart.map((game) => (
                <li key={game.id}>
                    <h2>{game.title}</h2>
                    <p>{game.price} Gil</p>
                    <button onClick={() => removeFromBasket(game)}>Remove</button>
                </li>
            ))}</ul>
            <h3>No Items</h3>
            <a href={'/checkout'}><button>Continue</button></a>
        </div>
    )
}