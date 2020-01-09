// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {

    eventHandler = (event) => {
        let x = event.clientX
        let y = event.clientY
        let coordinate = [x, y]
        this.props.onReceiveCoordinates(coordinate)
    }

    render() {
        return (
            <button onClick = {this.eventHandler}>Click Me!</button>
        )
    }
}

export default CoordinatesButton
