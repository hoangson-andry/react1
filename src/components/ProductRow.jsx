import React, { Component } from "react";

class ProductRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="product-row">
        <div className="product-name">{this.props.name}</div>
        <div className="product-price">{this.props.price}</div>
      </div>
    );
  }
}

export default ProductRow;
