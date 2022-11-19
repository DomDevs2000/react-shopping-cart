import React, {useContext, useEffect} from 'react';
import {StoreContext} from '../context/StoreContext'

export const Store = (props) => {
    const addToBasket = props.addToBasket
    const store = useContext(StoreContext)
    const games = store.games
    const cart = store.cart

    const gamesInCart = cart.map((game)=> {
        return game.id
    })
    console.log(gamesInCart);


    return (
        <>
            <div className="grid-container">{games.map((game) => {
                const isInCart = gamesInCart.includes(game.id)


                return (

                    <div className="game-card" key={game.id}>
                        <div>
                        <h2>{game.title}</h2>
                        <img src={game.image} alt=''></img>
                        <p>{game.description}</p>
                        <p>{game.price} Gil</p>
                        <button className="game-card-btn" disabled={isInCart} onClick={() => addToBasket(game)}>Add to Basket</button>
                        </div>
                    </div>
                );
            })}</div>
        </>
    )
}
