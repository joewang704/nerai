import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #333;
  color: white;
  padding: 12px 24px 24px;
  display: flex;
  h1 {
    margin-right: 48px;
  }
`;

const GameInfo = ({ timeRemaining }) => {
  const { state } = useContext(GameContext);

  return (
    <Container>
      <h1>Level {state.level}</h1>
      <h1>Current Score: {state.currentScore} / {state.goalScore}</h1>
      <h1>Time Left: {timeRemaining}</h1>
    </Container>
  );
};

export default GameInfo;