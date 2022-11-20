import React, {useContext} from 'react'
import {StoreContext} from '../context/StoreContext'
import {Link} from "react-router-dom";

export const Checkout = (props) => {

    const removeFromBasket = props.removeFromBasket
    const store = useContext(StoreContext)
    const cart = store.cart

    const totalPrice = cart.reduce((acc, game) => {
        acc += game.price
        return acc
    }, 0)

    return (


            <div className="checkout-basket">
                <div className="checkout-basket-flex">
                    <Link to='/'>
                        <button className="checkout-basket-btn">Go Back</button>
                    </Link>
                    <ul>{cart.map((game) => (
                        <li key={game.id}>
                            <img src={game.image} alt="" height={50}/>
                            <h2>{game.title}</h2>
                            <p><img src="assets/coins.png" alt="" height={15}/>{game.price} Gil
                            </p>
                            <button className="checkout-basket-remove" onClick={() => removeFromBasket(game)}><img
                                src="assets/bin.png" alt="remove game" height={20}/></button>

                        </li>
                    ))}</ul>
                    {cart.length === 0 && <h3>No Items</h3>}
                    {cart.length > 0 && <strong className="total-price">Total <span>{totalPrice}</span></strong>}
                </div>
            </div>


    )


}