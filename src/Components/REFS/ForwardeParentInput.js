import React, { Component } from "react";
import ForwardeInput from "./forwardeInput";

class ForwardeParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <ForwardeInput ref={this.inputRef} name="Hello Akash Gupta" />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default ForwardeParentInput;
