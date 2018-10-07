import React, { Component } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';


class ProductosItem extends Component {

    render() {
        var product = this.props.product
        var image = product.thumbnail.replace("-I", "-O")
        var price = product.price
        
        if (price) {
            price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        var style_h4 = {
            color: 'green',
        }

        return (
            <Col xs={6} md={4} className="text-center">
                <Thumbnail src={image}>
                    <h3><strong>{product.title}</strong></h3>
                    <h4 style={style_h4}><strong>$ {price}</strong></h4>
                    <p><strong>Sold: </strong> {product.sold_quantity}</p>
                </Thumbnail>
            </Col>
        );
    }

}

export default ProductosItem;