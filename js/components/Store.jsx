import React, {useContext, useEffect} from 'react';
import {StoreContext} from '../context/StoreContext'

export const Store = (props) => {
    const addToBasket = props.addToBasket
    const store = useContext(StoreContext)
    const games = store.games
    const cart = store.cart

    const gamesInCart = cart.map((game) => {
        return game.id
    })


    return (
        <>

            <div className="grid-container">{games.map((game) => {
                const isInCart = gamesInCart.includes(game.id)

                return (

                    <div className="game-card" key={game.id}>
                        <div className="game-image"><img src={game.image} alt=''/></div>
                        <div className="game-content">
                            <h2>{game.title}</h2>
                            <p className="game-description">{game.description}</p>
                            <p className="game-price"><img src="assets/coins.png" alt="" height={15}/>{game.price} Gil
                            </p>
                            <div className="cta-container">
                                <button className="game-card-btn" disabled={isInCart}
                                        onClick={() => addToBasket(game)}>Add
                                    to Basket
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}</div>
        </>
    )
}
