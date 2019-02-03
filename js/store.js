import React, { Component } from 'react';
import '../sass/layout.scss';
import Game from './game';

class Store extends Component {
    state = {}
    render() {
        return (
            <div id="store">
                <div className="game-grid">
                    <Game />
                    <Game />
                    <Game />
                    <Game />
                </div>
            </div>
        );
    }
}

export default Store;