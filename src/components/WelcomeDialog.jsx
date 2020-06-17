import React, { Component } from "react";
import FancyBorder from "./FancyBorder";

class WelcomeDialog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
      </div>
    );
  }
}

export default WelcomeDialog;
