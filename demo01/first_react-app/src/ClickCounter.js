import React, { Component } from 'react';


class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  onClickButton = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div style={{textAlign:"center",paddingTop:"15px"}} >
        <button onClick={this.onClickButton}>Click Me</button>
        <div>
          ClickCount:{this.state.count}
        </div>
      </div>
    );
  }
}

export default ClickCounter;
