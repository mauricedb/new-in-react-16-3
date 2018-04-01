import React, { Component } from 'react';
import './App.css';

// import UsingRefs from './using-refs';
// import ForwardRef from './forward-ref';
import ContextDemo from './context-demo';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UsingRefs /> */}
        {/* <ForwardRef /> */}
        <ContextDemo />
      </div>
    );
  }
}

export default App;
