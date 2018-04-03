import React, { Component, StrictMode } from 'react';

class SimpleClock extends Component {
  state = {
    message: ''
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      message: `The time is: ${nextProps.now.toLocaleString()}`
    };
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     message: `The time is: ${nextProps.now.toLocaleString()}`
  //   });
  // }

  render() {
    const { message } = this.state;

    return <div>{message}</div>;
  }
}

class WithStrictMode extends Component {
  state = { now: new Date() };

  componentDidMount() {
    setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  render() {
    const { now } = this.state;

    return (
      <div>
        <StrictMode>
          <h2>StrictMode Component</h2>
          <SimpleClock now={now} />
        </StrictMode>
      </div>
    );
  }
}

export default WithStrictMode;
