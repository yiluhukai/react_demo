import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
let nextTodoId = 0;
export class AddTodo extends React.Component {
  constructor(){
    super(...arguments)
    this.state={
      value:""
    }
  }
  onSubmit = (ev) => {
    ev.preventDefault();
    // const input = this.input;
    // if (!input.value.trim()) {
    //   //内容为空
    //   return;
    // } else {
    //   //不为空 
    //   this.props.onAdd(input.value);
    //   //清空数据
    //   input.value = '';
    // }
    const input = this.state.value;
    if(!input){
      return
    }
    this.props.onAdd(input);
    this.setState({value:""})
  }
  // refInput = (node) => {
  //   return this.input = node;
  // }

  //监听input的变化
  onInputChange=(event)=>{
    this.setState({
      value:event.target.value
    })
  }
  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          {/* <input className="new-todo" ref={this.refInput} />
          //替换ref */}
          <input className="new-todo" onChange={this.onInputChange} value={this.state.value}/>
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onAdd(text) {
      dispatch(actions.addTodo(text,nextTodoId++));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)