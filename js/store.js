import React, { Component } from 'react';

class Store extends Component {
    render() {
        return (
            <div id="store">
                <div className="game-grid">
                    {/* Map over all the games and show in the store */}
                    {this.props.games.map(game => (
                        <div key={game.id} className="game-in-shop">
                            {/* Once a game has been added to the basket, it cannot be added again */}
                            <div className='cover'
                                style={{ zIndex: this.props.basketContent.indexOf(game) === -1 ? -100 : 100 }}
                            ></div>
                            <div className='image-wrapper'><img className='game-box-img' src={game.image}></img></div>

                            <div className='info'>
                                <img className='controller-img' src="./assets/controller.png"></img>
                                <h4>{game.name}</h4>
                                <p>{game.description}</p>
                                <span className='price'><img className='coins-img' src="./assets/coins.png" />{game.price} Gil</span>
                                <div className='add-to-basket-button' onClick={() => this.props.addToBasket(game)} >Add to Basket</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Store;