import React from 'react';
import Test  from '../test'; 

const refHoc = function (WappedComponent){
  
  return class HOCComponnet extends React.Component{
    linkRef = (node) => {
      this.__root = node;
      //WappedComponent===node
      console.log(node);
    }
    getDisplayName =()=>{
      return WappedComponent.displayName||WappedComponent.displayName||"Component"
    }
    static displayName(){
      return `Ref${this.getDisplayName()}`
    }
    render(){
      const props = {...this.props,ref : this.linkRef}
      return (
        <WappedComponent {...props}></WappedComponent> 
      )
    }
  }
}

export default refHoc(Test);

