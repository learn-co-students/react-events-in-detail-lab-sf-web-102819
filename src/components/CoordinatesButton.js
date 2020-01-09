// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  constructor(props) {
    super();
  }

  handleMouseCoordinates = e => {
    // console.log(`X: ${e.screenX}, Y: ${e.screenY}`)
    this.props.onReceiveCoordinates([e.screenX, e.screenY]);
  };

  render() {
    return (
      <div>
        <h1>from CoordinatesButton:</h1>
        <button onClick={this.handleMouseCoordinates}>Log Mouse Coordinates</button>
      </div>
    );
  }
}

export default CoordinatesButton;
