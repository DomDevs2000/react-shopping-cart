import React, {useState, createContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from "./components/Navbar";
import {Store} from "./components/Store"
import {Basket} from './components/Basket'
import {StoreContext} from './context/StoreContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Checkout} from "./components/Checkout";


const app = document.getElementById('app');

const games = [
	{
		title: "Star Wars: Battlefront",
		description: "Immerse Yourself in the Ultimate Star Wars Experience",
		price: 300,
		image: "static/game1.jpg",
		id: 1

	},
	{
		title: "Dying Light",
		description: "Dying Light is an open world first person survival horror action-adventure video game developed by TechLand",
		price: 500,
		image: "assets/game2.jpg",
		id: 2

	},
	{
		title: "Bloodborne",
		description: "Bloodborne is an action role-playing video game developed by FromSoftware.",
		price: 9999,
		image: "assets/game3.jpg",
		id: 3

	},
	{
		title: "Evolve",
		description: "Evolve is a first-person shooter video game developed by Turtle Rock Studios",
		price: 150,
		image: "assets/game4.jpg",
		id: 4

	}
];

const App = () => {
	const [cart, setCart] = useState([])

	const addToBasket = (game) => {
		setCart([...cart, game])

	}

	const removeFromBasket = (game) => {
		setCart(cart.filter(game => game.id !== game.id))

	}
	useEffect(() => {
		const cart = window.localStorage.getItem('basket');

	}, [cart]);
	return(
		<StoreContext.Provider value={{games, cart}}>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<div className="page1">
                <Navbar/>
                <Store addToBasket={addToBasket}></Store>
                <Basket removeFromBasket={removeFromBasket}></Basket>
            </div>} />
			<Route path="/checkout" element={<Checkout />} />

		</Routes>

		</BrowserRouter>
		</StoreContext.Provider>
	)
}

ReactDOM.render((
	<>
	<App/>
	</>
), app);
