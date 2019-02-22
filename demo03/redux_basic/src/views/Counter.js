import React, { Component } from 'react';
import {increment,decrement} from '../Actions'
import store from '../Store';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.onChange=this.onChange.bind(this);
    this.state = this.getOwnState();
  }

  getOwnState() {
    return { value:store.getState()[this.props.caption] }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value);
  }
  onChange(){
    //callback
    this.setState({value:1});
    this.setState(this.getOwnState())
  }
  componentDidMount(){
    //监听store的改变，并同步数据
    store.subscribe(this.onChange);
  }

  componentWillUnmount(){
    //取消对store的监听
    store.unsubscribe(this.onChange);
  }

  //派发action
  onClickIncrementButton() {
    store.dispatch(increment(this.props.caption))
  }
  //派发action
  onClickDecrementButton() {
    store.dispatch(decrement(this.props.caption))
  }

  render() {
    const { caption } = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.value}</span>
      </div>
    );
  }
}

export default Counter;