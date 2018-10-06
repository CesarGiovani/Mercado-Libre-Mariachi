import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div class="dropdown">
                <button class="dropbtn">Categorías</button>
                <div class="dropdown-content">
                    <a href="#">Tecnología</a>
                    <a href="#">Libros</a>
                    <a href="#">Supermercado</a>
                </div>
            </div>
        )
    }
}

export default Navigation;
