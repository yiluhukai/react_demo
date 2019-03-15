import React from 'react';
const LogginUser = "mock user";
class AddUserProps extends React.Component{
  render(){
    const user = LogginUser;
    return this.props.children(user);
  }
}

//use 
<AddUserProps>
  {
    (user) => <div>{user}</div>
  }
</AddUserProps>