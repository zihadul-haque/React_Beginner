
import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:''
            
        }
        
        this.handleUsernmaeChange=this.handleUsernmaeChange.bind(this)
    };

    handleUsernmaeChange =(event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handleChangeComment=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
   
    handleSubmit =(event)=>{
        const { username,comment}=this.state
        alert(`${username}${comment}`)
        event.preventDeafault()
    }
    render() {
        const { username,comment}=this.state
        return (
           <form onSubmit={this.handleSubmit}>
               <div>
                   <label >username:</label>
                   <input type="text" 
                    value={username} 
                    onChange={this.handleUsernameChange}/>
               </div>
               <div >
                   <label >comments</label>
                   <textarea
                    value={comment}
                    onChange={this.handleChangeComment}></textarea>
               </div>
               <button type="submit">Submit</button>
           </form>
        )
    }
}

export default Form
