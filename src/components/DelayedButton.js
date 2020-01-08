// Code DelayedButton Component Here
import React from 'react'
import render from 'enzyme'

class DelayedButton extends React.Component {

    handleClick = (event) => {
        event.persist();
        window.setTimeout(this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default DelayedButton