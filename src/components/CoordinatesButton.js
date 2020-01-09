import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleButton = event => {
    const x = event.clientX;
    const y = event.clientY;
    this.props.onReceiveCoordinates([x, y]);
  };

  render() {
    return <button onClick={this.handleButton}>Coordinates</button>;
  }
}

export default CoordinatesButton;
