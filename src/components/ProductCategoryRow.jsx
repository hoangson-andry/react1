import React, { Component } from "react";

class ProductCategoryRow extends Component {
  render() {
    return <div className="product-category-row">{this.props.category}</div>;
  }
}

export default ProductCategoryRow;
