import React from 'react';
import Test from '../test';


const AddNewPopps = function(WappedComponent,newProps){
  return function(props){
      return <WappedComponent {...props} {...newProps}/>
  }
}
export default AddNewPopps(Test,{foo:"foo"})