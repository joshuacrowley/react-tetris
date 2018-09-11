import React from "react";
import BoxRotate from "./box-rotate";
import AppActions from "../actions/app-actions";

function piece() {
  return {
    piece: PieceStore.getPieceData().heldPiece
  };
}

class TurnStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turns: 0
    };
  }

  turns(amount) {
    for (var i = 0; i < amount; i++) {
      AppActions.flipCounterclockwise();
      console.log(amount);
    }
    AppActions.hardDrop();
  }

  render() {
    return (
      <div>
        <div onClick={() => this.turns(0)}>
          <BoxRotate number={0} />
        </div>
        <div onClick={() => this.turns(1)}>
          <BoxRotate number={1} />
        </div>
        <div onClick={() => this.turns(2)}>
          <BoxRotate number={2} onClick={() => this.turns(2)} />
        </div>
        <div onClick={() => this.turns(3)}>
          <BoxRotate number={3} onClick={() => this.turns(3)} />
        </div>
      </div>
    );
  }
}

export default TurnStack;
