import React from 'react';
const styles={textAlign:"center",border:"1px solid red"}
export default class Test extends React.Component {
  render() {
    return (<div style={styles}>
        User:{this.props.user};
        Name:{this.props.name};
        Age:{this.props.age}
        Foo:{this.props.foo}
      </div>
    )
  }
}
