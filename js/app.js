import React, { Component } from 'react';
import Header from './header';
import Store from './store';
import Basket from './basket';
import '../sass/layout.scss';
import { getGames } from './gameData';

class App extends Component {
    state = {
        games: getGames(),
        basket: [],
        basketTotal: 0,
    };
    addToBasket = (game) => {
        let basket = [...this.state.basket];
        document.querySelector('.cover').style.zInder = '100';
        if (basket.indexOf(game) === -1) {
            basket.push(game);
            var basketTotal = this.state.basketTotal + game.price;
        } else {
            var basketTotal = this.state.basketTotal;
        }
        document.querySelector('.basket-total').style.display = 'block';
        this.setState({ basket, basketTotal });
    };
    removeFromBasket = (game) => {
        let basket = [...this.state.basket];
        basket = basket.filter(elem => elem !== game)
        let basketTotal = this.state.basketTotal - game.price;
        if (basket.length === 0) {
            //document.querySelector('.games-in-basket').style.display = 'none';
            document.querySelector('.basket-total').style.display = 'none';

        }
        this.setState({ basket, basketTotal })
    };
    enterBasket = () => {
        document.querySelector('#basket').classList.add('open');
        document.querySelector('#basket>h1').style.display = 'none';
        document.querySelector('.game-grid').style.display = 'none';
        document.querySelector('.continue-button').style.display = 'none';
        document.querySelector('.go-back-button ').style.display = 'block';
    };
    leaveBasket = () => {
        document.querySelector('#basket').classList.remove('open');
        document.querySelector('#basket>h1').style.display = 'block';
        document.querySelector('.game-grid').style.display = 'grid';
        document.querySelector('.continue-button').style.display = 'block';
        document.querySelector('.go-back-button ').style.display = 'none';
    }
    render() {
        return (
            <div id="app">
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