import React, { Component } from 'react';
import ProductosItem from './ProductosItem';
import { Grid, Row } from 'react-bootstrap';


class ListaProductos extends Component {


    render() {
        var resultItems = this.props.itemsData.map(function (product) {
            return <ProductosItem key={product.id} product={product} />
        });
        return (
            <Grid>
                <Row>
                    {resultItems}
                </Row>
            </Grid>
        );
    }

}
export default ListaProductos;