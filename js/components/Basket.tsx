import React, {useContext, useEffect} from 'react';
import {StoreContext} from '../context/StoreContext'

export const Basket = (props) => {
    const removeFromBasket = props.removeFromBasket
    const store = useContext(StoreContext)
    const cart = store.cart

    const totalPrice = cart.reduce((acc,game)=> {
        acc += game.price
        return acc
    }, 0)
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

            {cart.length == 0 &&  <h3>No Items</h3>  }

            {cart.length > 0   &&  <p>Total:{totalPrice}</p>  }

            <a href={'/checkout'}>
                <button disabled={cart.length==0}>Continue</button>
            </a>
        </div>
    )
}