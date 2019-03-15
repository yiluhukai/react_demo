import React, { Component } from 'react';
import './App.css';
import NoUser from './proxy/removeUserPropHOC';
import RefsHOC from  './proxy/refsHOC';
import AddPoops from './proxy/AddNewpropsHOC';
import StyleHOC from './proxy/styleHOC';
import CountDown from './function_as_children/CountDown';
import RemoveUserProps from './inheritance/removeUserPropHOC'
class App extends Component {
  render() {
    const user = {name:"aaa",user:"hello",age:12}
    return (
      <div className="App">
          <NoUser {...user}/> 
          <AddPoops {...user}/>
          <RefsHOC {...user}/>
          <StyleHOC/>  
          <RemoveUserProps {...user}/>
          <hr/>
          <CountDown startCount={10}>
            {
              count => (<div>{count}</div>)
            }
          </CountDown> 
      </div>
    );
  }
}

export default App;
