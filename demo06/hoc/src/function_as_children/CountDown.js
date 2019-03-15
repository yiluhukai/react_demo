import React from 'react';

class CountDown extends React.Component{
  constructor(){
    super(...arguments);
    this.state={count:this.props.startCount}
  }
  render(){
    return this.props.children(this.state.count)
  }
  shouldComponentUpdate(nextProps,nextState){
    return nextState.count !== this.state.count;
  }
  componentDidMount(){
    this.intervalHandle = setInterval(()=>{
        const newState = this.state.count - 1;
        if(newState>=0){
          this.setState({count:newState})
        } else{
          clearInterval(this.intervalHandle);
        }
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.intervalHandle);
  }
}

export default CountDown;