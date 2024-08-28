import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';
import { getUpgradeDescription } from '../data/targets';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  color: white;
`;

const Left = styled.div`
  float: left;
`

const Right = styled.div`
  float: right;
`

const Center = styled.div`
  margin: 0 auto;
  width: 100px;
`

const GameInfo = ({ timeRemaining }) => {
  const { state } = useContext(GameContext);

  const upgradeDescriptions = Object.entries(state.upgrades)
    .filter(([_, level]) => level > 0)
    .map(([name, level]) => getUpgradeDescription({ name, level }))
    .join(', ');

  return (
    <Container>
      <Left>
        <h1>Level {state.level}</h1>
        <h1>Score: {state.currentScore} / {state.goalScore}</h1>
      </Left>
      <Right>
        <p>Upgrades</p>
        <p>{upgradeDescriptions}</p>
      </Right>
      <Center>
        <h1>{timeRemaining}</h1>
      </Center>
    </Container>
  );
};

export default GameInfo;