import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import styled from "styled-components";
import Tetris from "../src/js/components/tetris";
import "./index.css";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Tetris", module)
  .add("Freeplay", () => <GamePanel gameType="FREEPLAY" time={30} />)
  .add("Limited rotations", () => (
    <GamePanel gameType="LIMITED_TURNS" turnAmount={5} time={30} />
  ))
  .add("No clockwise moves", () => (
    <GamePanel
      gameType="LIMITED_TURNS"
      turnAmount={5}
      time={30}
      moveConstraint={["FLIP_CLOCKWISE"]}
    />
  ))
  .add("Freeze mode", () => <GamePanel gameType="FREEZE" time={300} />);

const Container = styled.div`
  margin: 24px auto 0;
  width: 100%;
  max-width: 376px;
`;

const Score = styled.div`
  position: relative;
  font-family: monospace;
  font-size: 18px;
  color: #888;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-content: space-between;
`;

const Column = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const LeftColumn = Column.extend`
  width: 88px;
`;

const RightColumn = LeftColumn.extend`
  padding-left: 15px;
`;

const MiddleColumn = Column.extend`
  width: 200px;
`;

const GamePanel = props => (
  <Container>
    <Tetris
      turnAmount={props.turnAmount}
      gameType={props.gameType}
      time={props.time}
      moveConstraint={props.moveConstraint}
    >
      {({
        HeldPiece,
        Gameboard,
        PieceQueue,
        points,
        linesCleared,
        Controls,
        turns,
        time,
        moveConstraint,
        TurnStack
      }) => (
        <div>
          <Score>
            <div>
              <p>
                points<br />
                <Digits>{points}</Digits>
              </p>
            </div>
            <div>
              <p>
                time<br />
                <Digits>{time / 1000}</Digits>
              </p>
            </div>
            <div>
              <p>
                lines<br />
                <Digits>{linesCleared}</Digits>
              </p>
            </div>
          </Score>

          <LeftColumn>
            <HeldPiece />
            {props.gameType === "FREEZE" && <TurnStack />}
          </LeftColumn>

          <MiddleColumn>
            <Gameboard />
          </MiddleColumn>

          <RightColumn>
            <PieceQueue />
          </RightColumn>
          <Controls turns={turns} moveConstraint={moveConstraint} />
        </div>
      )}
    </Tetris>
  </Container>
);

const Digit = styled.span`
  font-family: monospace;
  padding: 1px;
  margin: 1px;
  font-size: 24px;
`;

const Digits = ({ children, count = 4 }) => {
  let str = children.toString();

  while (str.length < count) {
    str = `${0}${str}`;
  }

  return str
    .split("")
    .map((digit, index) => <Digit key={index}>{digit}</Digit>);
};
