import React, { Component } from "react";
import ReactDOM from "react-dom";

class Portals extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <h1>Portals</h1>
      </div>,
      document.getElementById("portal-root")
    );
  }
}

export default Portals;
