import React, { Component } from 'react';

import store from '../Store';

class SummaryContainer extends Component {

  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      sum: this.getOwnState()
    }
  }
  getOwnState() {
    const state = store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key))
        sum += state[key];
    }
    return sum;
  }
  componentDidMount() {
    store.subscribe(this.onUpdate);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onUpdate);
  }

  onUpdate() {
    this.setState({
      sum: this.getOwnState()
    })
  }

  render() {
    return (<Summary sum={this.state.sum}/>);
  }
}

export default SummaryContainer;

function Summary({sum}){
  return (
    <div>Total Count: {sum}</div>
  )
}

