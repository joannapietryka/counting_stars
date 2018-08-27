import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export class Upgrade extends React.Component {
  constructor(props) {
    super();
  }
  showInfo() {
    const infoBox = document.querySelector(".info-box");
    infoBox.classList.add("visible");
  }
  hideInfo() {
    const infoBox = document.querySelector(".info-box");
    infoBox.classList.remove("visible");
  }
  render() {
    return (
      <div className="container-upgrade">
        {this.props.clicks > this.props.limits.firstUpgrade ? (
          <p className="instruction">
            Get upgrade:
            <span
              className="info"
              onMouseOver={this.showInfo}
              onMouseLeave={this.hideInfo}
            >
              ?
            </span>
            <span className="info-box">
              Select the update and click button to use it.<br />
              You can use them many times.
            </span>
          </p>
        ) : (
          <p className="instruction">Upgrades coming...</p>
        )}
        <div
          className={
            this.props.clicks > this.props.limits.firstUpgrade
              ? "upgrade show"
              : "upgrade hide"
          }
        >
          {this.props.clicks > this.props.limits.firstUpgrade ? (
            <div
              className="upgrade-box"
              onClick={() => this.props.unlockExtraPoints()}
            >
              <span id="extra"> &#x272E;</span>
              <p>
                extra 20 points<br />
                for a click
              </p>
            </div>
          ) : (
            ""
          )}
          {this.props.clicks > this.props.limits.secondUpgrade ? (
            <div
              className="upgrade-box"
              onClick={() => this.props.unlockAutoClick()}
            >
              <span id="auto"> &#x272E;</span>
              <p>
                autoclick <br />for 30 sec
              </p>
            </div>
          ) : (
            ""
          )}
          {this.props.clicks > this.props.limits.thirdUpgrade ? (
            <div
              className="upgrade-box"
              onClick={() => this.props.unlockAutoAndDoubleClick()}
            >
              <span id="double"> &#x272E;</span>
              <p>
                auto-doubleclick <br /> for 30 sec
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
Upgrade.propTypes = {
  clicks: PropTypes.number,
  unlockExtraPoints: PropTypes.func,
  unlockAutoClick: PropTypes.func,
  unlockAutoAndDoubleClick: PropTypes.func
};
