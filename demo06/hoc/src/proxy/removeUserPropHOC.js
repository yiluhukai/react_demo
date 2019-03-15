import React from 'react';
import Test from '../test';

function removeUserProp(WappedComponent) {
  return function newRender(props) {
    const { user, ...otherProps } = props;
    console.log(otherProps)
    return <WappedComponent {...otherProps} />
  }
}


export default removeUserProp(Test);

