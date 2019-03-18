import React from 'react';
import {view as Weather} from './weather';
import CitySelector from './city_selector'

class App extends React.Component{
    render(){
      return(
      <div>
        <Weather/> 
        <CitySelector/>
      </div>)
    }
}

export default App;