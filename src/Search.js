import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
  constructor(props) {
    super(props)
    this.createAjax = this.createAjax.bind(this)
  }
  render() {
    return (
      <form id="Search" className="Search">
        <input ref="query" onChange={this.createAjax} type="search" placeholder="Buscar articulo..." />
      </form>
    )
  }
  createAjax() {
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    var URL = 'https://api.mercadolibre.com/sites/MCO/search?q=' + query;
    this.props.search(URL)
  }
}
export default Search;
