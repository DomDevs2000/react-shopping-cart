import React, {useContext} from 'react';
import {StoreContext} from '../context/StoreContext'
import {Link} from "react-router-dom";

export const Basket = (props) => {
    const removeFromBasket = props.removeFromBasket
    const store = useContext(StoreContext)
    const cart = store.cart

    const totalPrice = cart.reduce((acc, game) => {
        acc += game.price
        return acc
    }, 0)
    return (

        <div className="basket">
            <h2>Basket</h2>
            <ul>{cart.map((game) => (
                <li key={game.id}>
                    <img src={game.image} alt="" height={50}/>
                    <span>{game.title}</span>
                    <p className="game-price"><img src="assets/coins.png" alt="" height={15}/>{game.price} Gil
                    </p>
                    <button className="basket-remove" onClick={() => removeFromBasket(game)}>
                        <img src="assets/bin.png"
                             alt="remove game"
                             height={20}/>
                    </button>
                </li>
            ))}</ul>
            {cart.length === 0 && <h3 className='basket-no-items'>No Items</h3>}
            {cart.length > 0 && <strong className="total-price">Total <span>{totalPrice}</span></strong>}
            <Link to={'/checkout'}>
                <button className={`basket-continue-btn ${cart.length === 0 ? "disabled" : ""}`}
                        disabled={cart.length == 0}>Continue
                </button>
            </Link>
        </div>
    )
}