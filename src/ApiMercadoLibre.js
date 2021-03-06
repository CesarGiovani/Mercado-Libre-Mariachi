import React, { Component } from 'react';

const urlForItem = item =>
    `https://api.mercadolibre.com/sites/MCO/search?q=${item}`

export default class MercadoLibreAPI extends Component {


    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false
        }
    }

    componentDidMount() {
        fetch(urlForItem(this.props.item))
            .then(response => {
                if (!response.ok) {
                    throw Error("Conexion Fallida")
                }
                return response
            })
            .then(d => d.json())
            .then(d => {
                this.setState({
                    itemsData: d.results
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }



    render() {
        if (this.state.requestFailed) return <p>Fallo!</p>
        if (!this.state.itemsData) return <p>Cargando...</p>

        var items = [];
        this.state.itemsData.forEach(function(product) {
            items.push(<p key={product.id}>{product.title}</p>)
        });

        return (
            <div>
                {items}
            </div>
        )
    }
}
