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
    };
    addToBasket = (game) => {
        let basket = [...this.state.basket];
        basket.push(game);
        this.setState({ basket })
        console.log(basket);
    }

    render() {

        return (
            <div id="app">
                <Header />
                <div id="container">
                    <Store
                        games={this.state.games}
                        addToBasket={this.addToBasket}
                    />
                    <Basket
                        games={this.state.games}
                        basketContent={this.state.basket}
                    />
                </div>

            </div>

        );
    }
}

export default App;