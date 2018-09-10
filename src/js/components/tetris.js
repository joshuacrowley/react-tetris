import React from "react";
import PropTypes from "prop-types";
// import PauseMenu from './pause-menu';
import Gameboard from "./gameboard";
import ScoreStore from "../stores/score-store";
import HeldPiece from "./held-piece";
import PieceQueue from "./piece-queue";
import Controls from "./controls";

function getScore() {
  return {
    points: ScoreStore.getPoints(),
    linesCleared: ScoreStore.getLinesCleared()
  };
}

export default class Tetris extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    gameType: PropTypes.oneOf(["FREEPLAY", "LIMITED", "FROZEN"]).isRequired,
    turnAmount: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = getScore();
  }

  componentWillMount() {
    ScoreStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ScoreStore.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState(getScore());
  };

  render() {
    const { points, linesCleared } = this.state;
    const { gameType, turnAmount } = this.props;

    return this.props.children({
      HeldPiece,
      Gameboard,
      PieceQueue,
      points,
      linesCleared,
      Controls,
      turnAmount,
      gameType
    });
  }
}
