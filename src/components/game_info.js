import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';
import { COLORS } from '../data/constants';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 116px;
  background-color: #333;
  color: white;
  padding: 12px 24px 24px;
  h1 {
    font-size: 16px;
  }
`;

const Text = styled.div`
  z-index: 2;
  position: relative;
`;

const GameInfo = ({ timeRemaining }) => {
  const { state } = useContext(GameContext);

  return (
    <Container>
      <h1>Time Left: {timeRemaining}</h1>
      <h1>Current Score: {state.currentScore} / {state.goalScore}</h1>
    </Container>
  );
};

export default GameInfo;