import React, { Component } from 'react';

class Header extends Component {
    state = {}
    render() {
        return (
            <div id="header">
                <div className='contact'>
                    <img src='./assets/telephone.png' />
                    <span>1337 1337 1337</span>
                    <img src='./assets/flag.png' />
                    <span>Try another Castle</span>
                </div>
                <img className='logo' src='./assets/logo.png' />
            </div>
        );
    }
}

export default Header;