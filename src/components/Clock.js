import React, { Component } from 'react';
import Button from './Button';

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
    handleElement=(locale)=>{
       this.setState({
          locale,
       })
    };
    tick(){
        this.setState({
           date:new Date(),
        })
    }
    render() { 
        console.log('clock component rendered')
        const {date,locale}=this.state;
        //destructuring 
        return(   
            <div>
            <h1 className='heading'>
                <span className='text'>{date.toLocaleTimeString(locale)}
                </span>
            </h1> 
            <Button change={this.handleElement} locale='en-US'/>
             
             {/* we can use .bind method for send parameter instead of arrow function. */}
            </div>);
    }
}
 
export default Clock;