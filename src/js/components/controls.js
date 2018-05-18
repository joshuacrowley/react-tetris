import React from "react";
import key from "keymaster";
import AppActions from "../actions/app-actions";
import GameStore from "../stores/game-store";
import AppConstants from "../constants/app-constants";
import DetectShift from "../modules/detect-shift";

const { states } = AppConstants;

function gameBoard() {
  return {
    gameBoard: GameStore.getGameBoard()
  };
}
export default class Controls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      turns: 3
    };
  }

  changeDirection(direction) {
    if (this.state.turns !== 0) {
      if (direction === "flipCounterclockwise") {
        this.setState({ turns: this.state.turns - 1 });
        AppActions.flipCounterclockwise();
      } else {
        this.setState({ turns: this.state.turns - 1 });
        AppActions.flipClockwise();
      }
    }
  }

  togglePause() {
    if (GameStore.getCurrentState() === states.PLAYING) {
      AppActions.pause();
    } else {
      AppActions.resume();
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.togglePause()}>Pause</button>
        <button onClick={() => this.changeDirection("flipCounterclockwise")}>
          Turn Right{" "}
        </button>
        <button onClick={() => this.changeDirection("flipClockwise")}>
          Turn left{" "}
        </button>
        <p>{this.state.turns} rotations left</p>
      </div>
    );
  }
}
