//提供context的Provider组件
import React from 'react';
import PropTypes from 'prop-types';
class Provider extends React.Component{
    getChildContext(){
      return {
        store:this.props.store
      }
    }
    
    render(){
      return this.props.children;
    }
    static propTypes={
      store: PropTypes.object.isRequired
    }

    static childContextTypes={
      store: PropTypes.object
    }
}

export default Provider;