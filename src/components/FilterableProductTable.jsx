import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
  },
];

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      filtered: data,
    };
  }
  checkedBox = (e) => {
    let filterChecked = e.target.checked;
    this.setState({ check: filterChecked });
  };

  filterdProduct = (e) => {
    let filterContent = e.target.value;
    let filteredProduct = [];
    filteredProduct = data.filter((data) => {
      return (
        data.name.toLowerCase().indexOf(filterContent.toLowerCase()) !== -1
      );
    });

    if (this.state.filtered == null) filteredProduct = data;
    if (this.state.check == true) {
      let filteredProductOnCheck = [];
      filteredProductOnCheck = filteredProduct.filter((data) => {
        return data.stocked == true;
      });
      this.setState({ filtered: filteredProductOnCheck });
    } else {
      this.setState({ filtered: filteredProduct });
    }
    console.log(filteredProduct);
  };

  componentWillUpdate() {}
  render() {
    return (
      <div className="filterable-product-table">
        <SearchBar
          filteredProduct={(e) => this.filterdProduct(e)}
          checkedBox={(e) => {
            this.checkedBox(e);
          }}
        />
        <ProductTable data={this.state.filtered} />
      </div>
    );
  }
}

export default FilterableProductTable;
