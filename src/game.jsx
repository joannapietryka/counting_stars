import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./button.jsx";
import { Display } from "./display.jsx";
import { Win } from "./win.jsx";

export class Game extends React.Component {
  constructor(props) {
    super();
    this.state = {
      clicks: 0,
      level: 1,
      breakingPoints: 10,
      extraPoints: false,
      autoClick: false,
      autoAndDoubleClick: false,
      disabled: false
    };
    this.limits = {
      firstUpgrade: 50,
      secondUpgrade: 100,
      thirdUpgrade: 300,
      endOfGame: 1000
    };
  }

  countClicks() {
    const button = document.querySelector("button");
    if (
      this.state.clicks >= this.limits.firstUpgrade &&
      this.state.extraPoints === true
    ) {
      this.setState({
        clicks: this.state.clicks + 20,
        extraPoints: false
      });
      button.classList.remove("upgrade-mode");
    } else if (
      this.state.clicks >= this.limits.secondUpgrade &&
      this.state.autoClick === true
    ) {
      const autoClickInterval = setInterval(() => {
        this.setState({
          clicks: this.state.clicks + 1,
          disabled: true
        });
      }, 1000);
      setTimeout(() => {
        clearInterval(autoClickInterval);
        this.setState({
          disabled: false,
          extraPoints: false,
          autoClick: false,
          autoAndDoubleClick: false
        });
        button.classList.remove("upgrade-mode");
      }, 30000);
    } else if (
      this.state.clicks >= this.limits.thirdUpgrade &&
      this.state.autoAndDoubleClick === true
    ) {
      const autoAndDoubleClickInterval = setInterval(() => {
        this.setState({
          clicks: this.state.clicks + 2,
          disabled: true
        });
      }, 1000);
      setTimeout(() => {
        clearInterval(autoAndDoubleClickInterval);
        this.setState({
          disabled: false,
          extraPoints: false,
          autoClick: false,
          autoAndDoubleClick: false
        });
        button.classList.remove("upgrade-mode");
      }, 30000);
    } else {
      this.setState({
        clicks: this.state.clicks + 1
      });
    }
    if (this.state.clicks + 1 >= this.state.breakingPoints) {
      this.setState({
        level: this.state.level + 1,
        breakingPoints: this.state.breakingPoints * 2
      });
      return;
    }
  }
  unlockExtraPoints() {
    this.setState({
      extraPoints: true,
      autoClick: false,
      autoAndDoubleClick: false
    });
    const button = document.querySelector("button");
    if (this.state.disabled === false) {
      button.classList.add("upgrade-mode");
    }
  }
  unlockAutoClick() {
    this.setState({
      autoClick: true,
      extraPoints: false,
      autoAndDoubleClick: false
    });
    const button = document.querySelector("button");
    if (this.state.disabled === false) {
      button.classList.add("upgrade-mode");
    }
  }
  unlockAutoAndDoubleClick() {
    this.setState({
      autoAndDoubleClick: true,
      extraPoints: false,
      autoClick: false
    });
    const button = document.querySelector("button");
    if (this.state.disabled === false) {
      button.classList.add("upgrade-mode");
    }
  }
  render() {
    return (
      <div>
        {this.state.clicks < this.limits.endOfGame ? (
          <div className="main-container">
            <Button
              countClicks={() => this.countClicks()}
              clicks={this.state.clicks}
              disabled={this.state.disabled}
            />
            <Display
              clicks={this.state.clicks}
              level={this.state.level}
              limits={this.limits}
              unlockExtraPoints={() => this.unlockExtraPoints()}
              unlockAutoClick={() => this.unlockAutoClick()}
              unlockAutoAndDoubleClick={() => this.unlockAutoAndDoubleClick()}
            />
          </div>
        ) : (
          <Win />
        )}
      </div>
    );
  }
}
