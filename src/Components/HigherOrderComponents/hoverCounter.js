import React, { Component } from "react";
import withCounters from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOutCapture={incrementCount}>Hovered {count} times</h2>
      </div>
    );
  }
}

export default withCounters(HoverCounter, 10);
