// Code DelayedButton Component Here
import React, { Component } from "react";

class DelayedButton extends Component {
  constructor(props) {
    super();
  }

  handleDelayclick = e => {
    e.persist();
    // 1) call using an anonymous arrow function (3 args)
    // setTimeout( (e) => {
    //     this.props.onDelayedClick(e)
    // }, this.props.delay, e)

    // 2) call using an anonymous function no passing in the event as the arg (2 args)
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
    
    // 3) call three arguments without an anonymous function
    // setTimeout(this.props.onDelayedClick, this.props.delay, e);
  };

  render() {
    return (
      <div>
        <h1>from DelayedButton:</h1>
        <button onClick={this.handleDelayclick}>Delay</button>
      </div>
    );
  }
}

export default DelayedButton;
