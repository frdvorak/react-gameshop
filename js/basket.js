import React, { Component } from 'react';
import '../sass/layout.scss';

class Basket extends Component {
    state = {
        inBasket: false,
    }

    render() {
        return (
            <div id="basket">
                <h1>Basket</h1>
                <div className='empty-basket'>
                    {this.props.basketContent.length === 0 ? `No items` : ''}
                </div>
                <div className="games-in-basket">
                    <div onClick={this.props.leaveBasket} className="go-back-button">Go back</div>

                    {this.props.basketContent.map(game => (
                        <div key={game.id} className="game-in-basket">
                            <img className='game-box-img' src={game.image}></img>
                            <div className='info'>
                                <h4>{game.name}</h4>
                                <span className='price'><img className='coins-img' src="./assets/coins.png" />{game.price} Gil</span>
                            </div>
                            <div onClick={() => this.props.removeFromBasket(game)} ><img className='remove-from-basket-button' src='./assets/bin.png' /></div>
                        </div>
                    ))}
                </div>
                <h2 className='basket-total'>Total:<span className="sum">{this.props.basketTotal > 0 ? ` ${this.props.basketTotal} Gil` : ''}</span></h2>
                <div
                    onClick={this.props.basketContent.length === 0 ? undefined : this.props.enterBasket}
                    className="continue-button"
                    style={{ backgroundColor: this.props.basketContent.length === 0 ? '#246B3F' : 'black' }}
                >Continue</div>
            </div >
        );
    }
}

export default Basket;