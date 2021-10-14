
import React, { Component } from 'react'
import withCounter from './withCounter'

class Hovercounter extends Component {
    
    render() {
        const {count,handleIncrement}=this.props

        return <h2 onMouseOver={handleIncrement}>Hovered {count} time</h2>
           
        
    }
}

export default withCounter( Hovercounter)
