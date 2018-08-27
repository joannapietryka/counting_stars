import React from "react";
import { render } from "react-dom";
import { Game } from "./game.jsx";

import "../style/styles.scss";

class App extends React.Component {
  render() {
    return <Game />;
  }
}

render(<App />, document.getElementById("app"));
