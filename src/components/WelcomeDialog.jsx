import React, { Component } from "react";
import FancyBorder from "./FancyBorder";

class WelcomeDialog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <FancyBorder color="blue">
          <h1 className="Dialog-title">Welcome</h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
        </FancyBorder>
      </div>
    );
  }
}

export default WelcomeDialog;
