import React, { Component } from 'react';


class Clock extends Component {
    // constructor(props){ props do not use any case.so we can neglect the 
    //constructor
    //     super(props);
    //     this.
    state={
            date: new Date(),
            locale:"bn-BD"
        };
    
    componentDidMount(){
        this.clockTimer=setInterval(()=>this.tick(),1000);    
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer)
    }
    handleElement=()=>{
       this.setState({
           locale:'en-US'
       })
    };
    tick(){
        this.setState({
           date:new Date(),
        })
    }
    render() { 
        const {date,locale}=this.state;
        return(   
            <div>
            <h1 className='heading'>
                <span className='text'>{date.toLocaleTimeString(locale)}
                </span>
            </h1>
            <button onClick={this.handleElement}>click me</button>
            </div>);
    }
}
 
export default Clock;