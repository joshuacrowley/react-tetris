import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import styled from "styled-components";
import Tetris from "../src/js/components/tetris";
import "./index.css";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Tetris", module)
  .add("Freeplay", () => <GamePanel gameType="FREEPLAY" />)
  .add("Limited turns", () => <GamePanel gameType="LIMITED" turnAmount={5} />);

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
`;

const LeftHalf = styled.div`
  display: inline-block;
  width: 50%;
`;

const RightHalf = LeftHalf.extend`
  text-align: right;
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

const GamePanel = turnAmount => (
  <Container>
    <Tetris>
      {({
        HeldPiece,
        Gameboard,
        PieceQueue,
        points,
        linesCleared,
        Controls,
        turnAmount
      }) => (
        <div>
          <Score>
            <LeftHalf>
              <p>
                points<br />
                <Digits>{points}</Digits>
              </p>
            </LeftHalf>
            <RightHalf>
              <p>
                lines<br />
                <Digits>{linesCleared}</Digits>
              </p>
            </RightHalf>
          </Score>

          <LeftColumn>
            <HeldPiece />
          </LeftColumn>

          <MiddleColumn>
            <Gameboard />
          </MiddleColumn>

          <RightColumn>
            <PieceQueue />
          </RightColumn>
          <Controls turns={2} />
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
