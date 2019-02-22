import React from 'react';
import PropTypes from 'prop-types'; //
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initValue}
    console.log(`enter ${props.caption} constructor`)
  }
  onClickIncrementButton=()=>{
    //this.setState({count:this.state.count+1})
    this.onUpdate(true);
  }
  onClickCrementButton=()=>{
    //this.setState({count:this.state.count-1})
    this.onUpdate(false);
  }
  onUpdate=(isIncrement)=>{
    const previousValue=this.state.count;
    let newValue=isIncrement?previousValue+1:previousValue-1;
    this.setState({count:newValue});
    this.props.onCounterUpdate(newValue,previousValue);
  }
  componentWillReceiveProps(){
    console.log(`enter ${this.props.caption} componentWillReceiveProps`)
  }
  shouldComponentUpdate(nextProps,nextState){
    return nextProps.caption!==this.props.caption ||
    nextState.count!==this.state.count
  }
  componentWillMount(){
    console.log(`enter ${this.props.caption} componentWillMount`)
  }
  componentDidMount(){
    console.log(`enter ${this.props.caption} componentDidMount`)
  }
  render() {
    console.log(`enter ${this.props.caption} render`)
    const { caption } = this.props;
    return (
      <div>
        <button onClick={this.onClickIncrementButton}>+</button>
        <button onClick={this.onClickCrementButton}>-</button>
        <span>{caption} count:{this.state.count}</span>
      </div>
    )
  }

  static propTypes={
    caption:PropTypes.string.isRequired,
    initValue:PropTypes.number,
    onCounterUpdate:PropTypes.func
  }
  static defaultProps={
    initValue: 0,
    onCounterUpdate:(f)=>f
  }
}
export default Counter;