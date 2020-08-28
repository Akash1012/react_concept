import React, { Component } from "react";
import FocusInput from "./focusInput";

class Input extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  //   akash = () => {
  //     this.props.gupta();
  //   };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/* <button onClick={this.akash}>opopop click</button> */}
      </div>
    );
  }
}

export default Input;
