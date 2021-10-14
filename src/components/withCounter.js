import React from 'react'

const withCounter=wrappedComponent=>{
    class withCounter extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count:0
            }
        }
        handleIncrement=()=>{
            this.setState(prevState=>{
                return {count:prevState.count+1}
            })
        }
        render() {
            
            return <wrappedComponent count={this.state.count} handleIncrement={this.state.handleIncrement}/>
        }
    }
    return withCounter
}
export default withCounter
