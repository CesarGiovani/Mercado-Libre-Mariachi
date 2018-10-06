import React, { Component } from 'react';
import Search from './Search';
import Navigation from './Navigation';


class NavBar extends Component {
    render() {
        return (
            <header className="App-header" >
                <img src="http://4.bp.blogspot.com/-I5aipg4UF18/UksR7KQHTMI/AAAAAAAAAxg/4624KS9u7rY/s1600/mercadolibrelogo.png" alingn="left" width="70" height="70"></img>
                <Search />
                <Navigation />
            </header>
        )
    }
}

export default NavBar;