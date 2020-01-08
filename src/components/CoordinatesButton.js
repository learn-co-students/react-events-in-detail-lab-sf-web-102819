// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component{
    constructor(props){
        super()
        this.state={

        }
    }

    handleClick =(event)=> {
        let arr = [ event.clientX, event.clientY]
        this.props.onReceiveCoordinates(arr)
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default CoordinatesButton