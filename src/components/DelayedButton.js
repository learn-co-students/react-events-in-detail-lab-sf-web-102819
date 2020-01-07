// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {

  onClickHandlerDelay = (event) => {
    event.persist()
    setTimeout(() => {
       this.props.onDelayedClick(event)
    }, this.props.delay);
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHandlerDelay}>DelayedButton</button>
      </div>
    )
  }
}

export default DelayedButton
