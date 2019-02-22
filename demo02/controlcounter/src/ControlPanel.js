import React from 'react';
import Counter from './Counter'
class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    const initValues = [1, 10, 20];
    this.state = {
      initValues,
      sum: initValues.reduce((a, b) => a + b, 0)
    };
    console.log("ControlPanel constructor")
  }

  onCounterUpdate = (newValue, oldValue) => {
    this.setState({ sum: this.state.sum + (newValue - oldValue) })
  }

  render() {
    const initValues = this.state.initValues;
    return (<div>
      <Counter caption="first" initValue={initValues[0]} onCounterUpdate={this.onCounterUpdate} />
      <Counter caption="second" initValue={initValues[1]} onCounterUpdate={this.onCounterUpdate} />
      <Counter caption="third" initValue={initValues[2]} onCounterUpdate={this.onCounterUpdate} />
      <button onClick={() => { this.forceUpdate() }}>Click Me to repaint!</button>
      <hr />
      <div>
        Total Count:{this.state.sum}
      </div>
    </div>)
  }
}
export default ControlPanel;