import React, { Component } from 'react';
import Header from './header';
import Store from './store';
import Basket from './basket';
import '../sass/layout.scss';

class App extends Component {
    state = {}
    render() {
        return (
            <div id="app">
                <Header />
                <div id="container">
                    <Store />
                    <Basket />
                </div>

            </div>

        );
    }
}

export default App;