
import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    render() {
        const {count,handleIncrement}=this.props
        return (
          
            <button onClick={handleIncrement}>Click {count} times</button>
            
        )
    }
}

export default withCounter(ClickCounter)
