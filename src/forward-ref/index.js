import React, { Component, createRef, forwardRef } from 'react';

class SimpleInput extends Component {
  render() {
    const { theRef } = this.props;
    return <input type="text" ref={theRef} />;
  }
}

const wrap = Inner => {
  const WrappedComponent = (props, ref) => (
    <div>
      <div>Header</div>
      <Inner {...props} theRef={ref} />
      <div>Footer</div>
    </div>
  );

  return forwardRef(WrappedComponent);
};

const WrappedInput = wrap(SimpleInput);

class ForwardRef extends Component {
  inputRef = createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <h2>Using forwardRef()</h2>
        <WrappedInput ref={this.inputRef} />
      </div>
    );
  }
}

export default ForwardRef;
