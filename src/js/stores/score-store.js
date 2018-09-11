import _ from "lodash";
import AppConstants from "../constants/app-constants";
import BoardStore from "./board-store";
import EventEmitter from "../modules/event-emitter";

const { events } = AppConstants;

let points = 0;
let linesCleared = 0;
let turnsLimit = 0;
let turns = 0;
let playType = null;

const ScoreStore = _.extend(
  {
    getPoints() {
      return points;
    },

    getTurns() {
      return turns;
    },

    setTurns(amount) {
      turnsLimit = amount;
      this.emitChange();
    },

    resetTurns() {
      turns = turnsLimit;
      this.emitChange();
    },

    getLinesCleared() {
      return linesCleared;
    },

    addPoints(additional) {
      points += additional;
      this.emitChange();
    },
    removeTurn() {
      if (turns > 0) {
        turns -= 1;
        this.emitChange();
      }
    }
  },
  EventEmitter
);

const pointsPerLine = 100;
BoardStore.on(events.LINE_CLEARED, additionalLines => {
  linesCleared += additionalLines;

  // what's this called?
  if (additionalLines === 4) {
    ScoreStore.addPoints(pointsPerLine * 10);
  } else {
    ScoreStore.addPoints(additionalLines * pointsPerLine);
  }
});

export default ScoreStore;
