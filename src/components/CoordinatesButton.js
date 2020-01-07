// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {

  onClickHandler = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const array = [x, y];
    // const cooor = {
    //   mouseCoordinates: array
    // };
    console.log(this.props.onReceiveCoordinates);
    return this.props.onReceiveCoordinates(array);
    // const coor = this.props.onReceiveCoordinates(coor);
    // console.log(coor)
  }

  render() {
    return (
      <div>
        <button
          onClick={this.onClickHandler}
        >
          button
        </button>
      </div>
    );
  }
}

export default CoordinatesButton
