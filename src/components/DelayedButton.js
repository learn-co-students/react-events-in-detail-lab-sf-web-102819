import React, { Component } from 'react'

class DelayedButton extends Component {

    handleThis = (event) =>{
        event.persist();

        window.setTimeout(() =>{
            this.props.onDelayedClick(event);
        }, this.props.delay);
    }
    render() {
        return (
            <button onClick = {this.handleThis}>
                
            </button>
        )
    }
}

export default DelayedButton


