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

function bindKeyboardEvents() {
  key("down", AppActions.moveDown);
  key("left", AppActions.moveLeft);
  key("right", AppActions.moveRight);
  key("space", AppActions.hardDrop);
  key("z", AppActions.flipCounterclockwise);
  key("x", AppActions.flipClockwise);
  key("up", AppActions.flipClockwise);

  key("p", () => {
    if (GameStore.getCurrentState() === states.PLAYING) {
      AppActions.pause();
    } else {
      AppActions.resume();
    }
  });

  key("c", AppActions.hold);
  DetectShift.bind(AppActions.hold);
}

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = gameBoard();
  }

  componentWillMount() {
    GameStore.addChangeListener(this._onChange);
    bindKeyboardEvents();
    if (GameStore.getCurrentGameType() !== "FREEZE") {
      GameStore.start();
    }
  }

  _onChange = () => {
    this.setState(gameBoard());
  };

  render() {
    const rows = this.state.gameBoard.map((row, i) => {
      const blocksInRow = row.map((block, j) => {
        const classString = `game-block ${block || "block-empty"}`;
        return <td key={j} className={classString} />;
      });

      return <tr key={i}>{blocksInRow}</tr>;
    });
    return (
      <table className="game-board">
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
