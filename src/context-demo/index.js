import React, { Component } from 'react';
import SimpleClock from './SimpleClock';
import AnalogClock from './AnalogClock';

const FirstChild = ({ now }) => (
  <div>
    <SimpleClock time={now} />
  </div>
);

const SecondChild = ({ now }) => (
  <div>
    <AnalogClock time={now} />
  </div>
);

class ContextDemo extends Component {
  state = { now: new Date() };

  componentDidMount() {
    setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  render() {
    const { now } = this.state;

    return (
      <div>
        <h2>Using Context</h2>
        <FirstChild now={now} />
        <SecondChild now={now} />
      </div>
    );
  }
}

export default ContextDemo;
