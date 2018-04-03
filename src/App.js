import React, { Component } from 'react';
import './App.css';

// import UsingRefs from './using-refs';
// import ForwardRef from './forward-ref';
// import ContextDemo from './context-demo';
import ComponentLifecycleChanges from './component-lifecycle';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UsingRefs /> */}
        {/* <ForwardRef /> */}
        {/* <ContextDemo /> */}
        <ComponentLifecycleChanges />
      </div>
    );
  }
}

export default App;
