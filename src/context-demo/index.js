import React, { Component } from 'react';
import SimpleClock from './SimpleClock';
import AnalogClock from './AnalogClock';
import { TimeProvider, TimeConsumer } from './TimeContext';

const FirstChild = () => (
  <div>
    <TimeConsumer>{({ now }) => <SimpleClock time={now} />}</TimeConsumer>
  </div>
);

const SecondChild = () => (
  <div>
    <TimeConsumer>{({ now }) => <AnalogClock time={now} />}</TimeConsumer>
  </div>
);

class ContextDemo extends Component {
  render() {
    return (
      <div>
        <TimeProvider>
          <h2>Using Context</h2>
          <FirstChild />
          <SecondChild />
          <TimeConsumer>
            {({ pause }) => <button onClick={pause}>Pause</button>}
          </TimeConsumer>
        </TimeProvider>
      </div>
    );
  }
}

export default ContextDemo;
