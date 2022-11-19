import React, {useContext, useEffect} from 'react';
import {StoreContext} from '../context/StoreContext'

export const Store = (props) => {
    const addToBasket = props.addToBasket
    const store = useContext(StoreContext)
    const games = store.games

    return (
        <>
            <div>{games.map((game) => (
                <div key={game.id}>
                    <h2>{game.title}</h2>
                    <img src={game.image} alt=''></img>
                    <p>{game.description}</p>
                    <p>{game.price} Gil</p>
                    <button onClick={() => addToBasket(game)}>Add to Basket</button>
                </div>

            ))}</div>
        </>
    )
}