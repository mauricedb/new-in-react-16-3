import React, { Component } from 'react';
import './App.css';

// import UsingRefs from './using-refs';
import ForwardRef from './forward-ref';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UsingRefs /> */}
        <ForwardRef />
      </div>
    );
  }
}

export default App;
