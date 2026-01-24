import React, { Component } from "react";

class Assignment902 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");

    if (prevState.count !== this.state.count) {
      console.log("Count changed from", prevState.count, "to", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("Component is unmounting");
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Assignment902;
