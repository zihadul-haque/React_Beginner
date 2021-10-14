import React, { Component } from 'react';

class Button extends Component {
    // eslint-disable-next-line no-useless-constructor
    shouldComponentUpdate(nextProps){
        const {change:currentChange,locale:currentLocale}=this.props;
        const {change:nextChange,locale:nextLocale}=nextProps;
        if(currentChange=== nextChange && currentLocale ===nextLocale){
            return false;
        }
        return true;
    }
    
        
    render() {
        console.log('Button compnonent rendered')
        const {change,locale}=this.props; 
        return(
         // eslint-disable-next-line no-unreachable
         <div>
             <button type="button"
             onClick={()=>change(locale)}>Change to English </button>
         </div>
        )
    }
}
 
export default Button;