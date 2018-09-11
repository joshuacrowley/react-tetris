import React from "react";
import PropTypes from "prop-types";
import key from "keymaster";
import AppActions from "../actions/app-actions";
import GameStore from "../stores/game-store";
import ScoreStore from "../stores/score-store";
import AppConstants from "../constants/app-constants";
import DetectShift from "../modules/detect-shift";

const { states } = AppConstants;

function gameBoard() {
  return {
    gameBoard: GameStore.getGameBoard()
  };
}
export default class Controls extends React.Component {
  static propTypes = {
    turnLimit: PropTypes.number,
    moveConstraint: PropTypes.array
  };

  static defaultProps = {
    moveConstraint: []
  };

  constructor(props) {
    super(props);

    this.state = {
      turns: ScoreStore.getTurns()
    };
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
        <button onClick={() => AppActions.flipCounterclockwise()}>
          Turn counter clockwise{" "}
        </button>
        {this.props.moveConstraint[0] != "FLIP_CLOCKWISE" && (
          <button onClick={() => AppActions.flipClockwise()}>
            Turn clockwise{" "}
          </button>
        )}
        <p>{this.props.turns} rotations completed</p>
      </div>
    );
  }
}
