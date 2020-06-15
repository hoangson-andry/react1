import React, { Component } from "react";

class FancyBorder extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={"FancyBorder FancyBorder-" + this.props.color}
        style={{ background: this.props.color }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FancyBorder;
