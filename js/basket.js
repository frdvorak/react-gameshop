import React, { Component } from 'react';
import '../sass/layout.scss';

class Basket extends Component {
    state = {}
    render() {
        return (
            <div id="basket">
                <div className="game-grid">
                    {this.props.basketContent.map(game => (

                        <h4>{game.name}</h4>

                    ))}
                </div>
            </div>
        );
    }
}

export default Basket;