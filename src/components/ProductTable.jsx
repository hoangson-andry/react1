import React, { Component } from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    let row = [];
    let lastCategory = null;
    this.props.data.forEach((data) => {
      if (data.category !== lastCategory) {
        row.push(
          <ProductCategoryRow category={data.category} key={data.category} />
        );
      }
      row.push(<ProductRow name={data.name} key={data.name} />);
      lastCategory = data.category;
    });
    return <div className="product-table">{row}</div>;
  }
}

export default ProductTable;
