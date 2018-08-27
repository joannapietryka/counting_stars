import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export class Button extends React.Component {
  constructor(props) {
    super();
    this.state = {
      classes: "button"
    };
  }
  addActive() {
    this.setState({
      classes: "button acvite"
    });
  }
  removeActive() {
    this.setState({
      classes: "button"
    });
  }
  addStar() {
    const stars = [
      "\u2605",
      "\u2606",
      "\u2721",
      "\u2726",
      "\u2727",
      "\u272B",
      "\u272B",
      "\u272C",
      "\u272D",
      "\u272E",
      "\u272F",
      "\u2730",
      "\u2734",
      "\u2735",
      "\u2736",
      "\u2737",
      "\u2738"
    ];
    let random = Math.floor(Math.random() * stars.length);
    const forId = "star-";
    let num = this.props.clicks + 1;
    const sky = document.querySelector(".sky");
    const star = document.createElement("span");
    star.classList.add("blinking");
    star.id = forId + num;
    star.innerText = stars[random];
    sky.appendChild(star);
  }
  render() {
    return (
      <div className="container">
        <div className="sky">
          <h1> Counting stars *</h1>
          <button
            disabled={this.props.disabled}
            className={this.state.classes}
            onClick={() => {
              this.props.countClicks();
              this.addStar();
            }}
            onMouseDown={() => this.addActive()}
            onMouseUp={() => this.removeActive()}
          >
            <p>{this.props.clicks}</p>
            <p className="instruction">Click me!</p>
          </button>
        </div>
      </div>
    );
  }
}
Button.propTypes = {
  clicks: PropTypes.number,
  countClicks: PropTypes.func,
  disabled: PropTypes.bool
};
