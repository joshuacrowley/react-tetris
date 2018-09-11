import React from "react";
import PropTypes from "prop-types";
// import PauseMenu from './pause-menu';
import Gameboard from "./gameboard";
import ScoreStore from "../stores/score-store";
import GameStore from "../stores/game-store";
import HeldPiece from "./held-piece";
import PieceQueue from "./piece-queue";
import Controls from "./controls";
import TurnStack from "./turn-stack";

function getScore() {
  return {
    points: ScoreStore.getPoints(),
    linesCleared: ScoreStore.getLinesCleared(),
    turns: ScoreStore.getTurns()
  };
}

let _timerInterval = null;

export default class Tetris extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    gameType: PropTypes.oneOf(["FREEPLAY", "LIMITED_TURNS", "FROZEN"])
      .isRequired,
    turnAmount: PropTypes.number,
    time: PropTypes.number,
    moveConstraint: PropTypes.array
  };

  constructor(props) {
    super(props);
    let scores = getScore();
    scores.time = props.time * 1000;
    this.state = scores;
  }

  componentWillMount() {
    ScoreStore.addChangeListener(this._onChange);

    GameStore.setGameType(this.props.gameType);

    if (this.props.time) {
      _timerInterval = setInterval(() => {
        if (this.state.time > 0) {
          this.setState({ time: this.state.time - 1000 });
        } else {
          GameStore.pause();
        }
      }, 1000);
    }

    if (this.props.gameType === "LIMITED_TURNS") {
      ScoreStore.setTurns(this.props.turnAmount);
      ScoreStore.resetTurns();
    }

    if (this.props.gameType === "FREEZE") {
      GameStore.pause();
      console.log("FREEZE");
    }
  }

  componentWillUnmount() {
    ScoreStore.removeChangeListener(this._onChange);
    clearInterval(_timerInterval);
  }

  _onChange = () => {
    this.setState(getScore());
  };

  render() {
    const { points, linesCleared, turns, time } = this.state;
    const { moveConstraint } = this.props;

    return this.props.children({
      HeldPiece,
      Gameboard,
      PieceQueue,
      points,
      linesCleared,
      Controls,
      TurnStack,
      turns,
      time,
      moveConstraint
    });
  }
}
