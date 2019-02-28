import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import store from '../Store';

class SummaryContainer extends Component {

  constructor(props,context) {
    super(props,context);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      sum: this.getOwnState()
    }
  }
  getOwnState() {
    const state = this.context.store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key))
        sum += state[key];
    }
    return sum;
  }
  componentDidMount() {
    this.context.store.subscribe(this.onUpdate);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onUpdate);
  }

  onUpdate() {
    this.setState({
      sum: this.getOwnState()
    })
  }

  render() {
    return (<Summary sum={this.state.sum}/>);
  }

  static contextTypes={
    store:PropTypes.object
  }
}

export default SummaryContainer;

function Summary({sum}){
  return (
    <div>Total Count: {sum}</div>
  )
}

