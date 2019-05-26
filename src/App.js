import React, {Component} from 'react';
import './App.css';

import Counter from "./Counter";
import Heading from "./Heading"

class App extends Component{
  render(){
    return (
      <div className="App">
        <Heading headingText="Aplikacja Counter" />
        <Counter initValue={1} />
      </div>
    );
  }
}

export default App;
