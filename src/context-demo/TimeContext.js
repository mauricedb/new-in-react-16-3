import React, { Component, createContext } from 'react';

const TimeContext = createContext();

export class TimeProvider extends Component {
  state = { now: new Date(), paused: false };

  componentDidMount() {
    setInterval(() => {
      const { paused } = this.state;
      if (!paused) {
        this.setState({ now: new Date() });
      }
    }, 1000);
  }

  pause = () => {
    this.setState({ paused: true });
  };
  render() {
    const { now } = this.state;
    const { children } = this.props;

    return (
      <TimeContext.Provider value={{ now, pause: this.pause }}>
        {children}
      </TimeContext.Provider>
    );
  }
}

export class TimeConsumer extends Component {
  render() {
    const { children } = this.props;
    return <TimeContext.Consumer>{now => children(now)}</TimeContext.Consumer>;
  }
}
