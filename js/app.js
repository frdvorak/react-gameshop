import React, { Component } from 'react';
import Header from './header';
import Store from './store';
import Basket from './basket';
import '../sass/layout.scss';
import { getGames } from './gameData';

class App extends Component {
    state = {
        // pull list of available games from gameData.js file:
        games: getGames(),
        // items in the basket:
        basket: [],
        // total price of items in the basket:
        basketTotal: 0,
    };

    addToBasket = (game) => {
        // make temporary copy of the basket array:
        let basket = [...this.state.basket];
        // only add new game to the basket if it's not in there already:
        if (basket.indexOf(game) === -1) {
            basket.push(game);
            // calculate total price:
            var basketTotal = this.state.basketTotal + game.price;
        } else {
            var basketTotal = this.state.basketTotal;
        }
        // show total price
        document.querySelector('.basket-total').style.display = 'block';
        this.setState({ basket, basketTotal });
    };

    removeFromBasket = (game) => {
        let basket = [...this.state.basket];
        // remove the clicked item from the basket and show the remanining ones:
        basket = basket.filter(elem => elem !== game)
        // calculate total price:
        let basketTotal = this.state.basketTotal - game.price;
        // hide total price if the basket is empty:
        if (basket.length === 0) {
            document.querySelector('.basket-total').style.display = 'none';
        }
        this.setState({ basket, basketTotal })
    };

    // enter the Checkout Step (click 'continue' button):
    enterBasket = () => {
        document.querySelector('#basket').classList.add('open');
        document.querySelector('#basket>h1').style.display = 'none';
        document.querySelector('.game-grid').style.display = 'none';
        document.querySelector('.continue-button').style.display = 'none';
        document.querySelector('.go-back-button ').style.display = 'block';
    };

    // go back to the Store Step (click 'go-back' button):
    leaveBasket = () => {
        document.querySelector('#basket').classList.remove('open');
        document.querySelector('#basket>h1').style.display = 'block';
        document.querySelector('.game-grid').style.display = 'grid';
        document.querySelector('.continue-button').style.display = 'block';
        document.querySelector('.go-back-button ').style.display = 'none';
    }

    render() {
        return (
            <div id="wrapper">
                <Header />
                <div id="container">
                    <Store
                        games={this.state.games}
                        addToBasket={this.addToBasket}
                        basketContent={this.state.basket}
                    />
                    <Basket
                        games={this.state.games}
                        basketContent={this.state.basket}
                        removeFromBasket={this.removeFromBasket}
                        basketTotal={this.state.basketTotal}
                        enterBasket={this.enterBasket}
                        leaveBasket={this.leaveBasket}
                    />
                </div>
            </div>
        );
    }
}

export default App;