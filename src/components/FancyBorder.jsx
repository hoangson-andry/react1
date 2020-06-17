import React, { Component } from "react";

class FancyBorder extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return <div style={{ background: "blue" }}>{this.props.content}</div>;
  }
}

export default FancyBorder;
