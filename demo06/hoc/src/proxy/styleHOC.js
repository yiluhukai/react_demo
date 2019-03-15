import React from 'react';
import Test from '../test'
const styleHOC = function(WappedConponent,style){
    return class HOCComponent extends React.Component{
      render(){
        return (<div style={style}>
                  <WappedConponent {...this.props}/>
                </div> 
        )  
      }
    }
}


export default styleHOC(Test,{color:"green"})