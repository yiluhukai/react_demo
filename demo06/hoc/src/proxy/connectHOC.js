import React from 'react';
import PropTypes from 'prop-types';
import Test from '../test';

const nothing = ()=>({})

function connect(mapStateToProps=nothing,mapDispatchToProps=nothing){
  //返回一个高阶组件
  return function(WrappedComponent){
    return class HOCComponent extends React.Component{
        constructor(){
          super(...arguments);
          this.state={};
        }
        
        onChange = ()=>{
          this.setState({})
        }

        componentDidMount(){
          this.context.store.subscribe(this.onChange)
        }
        componentWillUnmount(){
          this.context.store.unsubscribe(this.onChange)
        }

        render() {
          const store=this.context.store;
          const newProps = {
            ...this.props,
            ...mapStateToProps(store.getState(),this.props),
            ...mapDispatchToProps(store.dispatch,this.props)
          }
          return <WrappedComponent {...newProps}/>
        }

        static contextType={
            store : PropTypes.object
        }
    }
  }
} 
