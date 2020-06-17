import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form>
          <input
            onChange={(data) => this.props.filteredProduct(data)}
            type="text"
            placeholder="search.."
          />
          <input
            onClick={(data) => this.props.checkedBox(data)}
            type="checkbox"
          />
          Only show products in stock
        </form>
      </div>
    );
  }
}

export default SearchBar;
