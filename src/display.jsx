import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Upgrade } from "./upgrade.jsx";

export class Display extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="results-container">
        <p className="instruction">Results:</p>
        <div className="results">
          <p>
            You've counted <span>{this.props.clicks}</span> stars
          </p>
          <div className="level-box">
            <p>
              Game Level <br />
              &#x2736; <span>{this.props.level}</span> &#x2736;
            </p>
          </div>
        </div>
        <Upgrade
          clicks={this.props.clicks}
          limits={this.props.limits}
          unlockExtraPoints={() => this.props.unlockExtraPoints()}
          unlockAutoClick={() => this.props.unlockAutoClick()}
          unlockAutoAndDoubleClick={() => this.props.unlockAutoAndDoubleClick()}
        />
      </div>
    );
  }
}
Display.propTypes = {
  clicks: PropTypes.number,
  level: PropTypes.number,
  unlockExtraPoints: PropTypes.func,
  unlockAutoClick: PropTypes.func,
  unlockAutoAndDoubleClick: PropTypes.func
};
