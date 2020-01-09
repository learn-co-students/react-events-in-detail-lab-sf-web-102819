// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {
    delayFunction = (event) => {
        event.persist();
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }
    render() {
        return (
            <button onClick={this.delayFunction}>Delay Button</button>
        )
    }
}

export default DelayedButton
