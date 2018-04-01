import React, { Component, createRef } from 'react';

class UsingRefs extends Component {
  inputRef = createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <h2>Using Refs</h2>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default UsingRefs;
