import React, { Component } from 'react';
import '../sass/layout.scss';

class Store extends Component {
    state = {}
    componentDidMount = () => {
        const gameGrid = document.querySelector('.game-grid');
        //const imgPath = `game${game.id}`;
        /*const html = this.props.games.map(game =>
            `
            <div className="game-in-shop">
                <img className='game-box-img' src="game1.jpg">
                <h4>${game.name}</h4>
                <p>${game.description}</p>
                <span><img src="coins.png">${game.price}</span>
                <button>Add to Basket</button>
            </div>
            `
        );
        gameGrid.innerHTML = html.join('');*/
    }

    render() {
        //console.log(this.props.games);
        return (
            <div id="store">
                <div className="game-grid">
                    {this.props.games.map(game => (
                        <div key={game.id} className="game-in-shop">
                            <img className='game-box-img' src="game1.jpg"></img>
                            <div className='info'>
                                <h4>{game.name}</h4>
                                <p>{game.description}</p>
                                <span><img className='coins-img' src="coins.png" />{game.price}</span>
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