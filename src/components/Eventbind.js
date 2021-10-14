import React, { Component } from 'react';

class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }
    
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({message:"good bye"})
    // clickHandler =() =>{
    //     this.setState({
    //         message:'Good bye'
    //     }
    // )
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default Eventbind;
