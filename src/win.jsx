import React from "react";
import { render } from "react-dom";

export class Win extends React.Component {
  render() {
    return (
      <div className="last-screen-container">
        <div className="last-screen">
          <span>&#x272E;</span>
          <h1>Congrats!</h1>
        </div>
      </div>
    );
  }
}
