import React from 'react';
import Test from '../test';
// const removeUserProps = (WappedComponent)=>{
//   return class NewConponent extends WappedComponent{
//     render() {
//       const elements = super.render();
//       // const {user, ...otherProps} = this.props;
//       const otherProps ={...this.props,foo:"foo"}
//       return React.cloneElement(elements, otherProps, elements.props.children)
//     }
//   }
// }
function removeUserProp(WrappedComponent) {
  return class NewComponent extends WrappedComponent {
    render() {
      const elements = super.render();
      const {user, ...otherProps} = this.props;
      console.log('##', elements);
      return React.cloneElement(elements, otherProps, elements.props.children);
    }
  };
}
export default removeUserProp(Test)