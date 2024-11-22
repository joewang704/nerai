import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { GameContext } from './app';
import { getUpgradeDescription } from '../data/targets';
import { ROUND_TIME } from '../data/constants';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
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

const TimeProgress = styled.progress`
  position: absolute;
  top: 140px;
  height: 5px;
  width: 100%;
`

const GameInfo = ({ timeRemaining }) => {
  const { state } = useContext(GameContext);

  const upgradeDescriptions = Object.entries(state.upgrades)
    .filter(([_, level]) => level > 0)
    .map(([name, level]) => getUpgradeDescription({ name, level }))
    .join(', ');

  const scoreStyles = state.currentScore >= state.goalScore ? {
    path: {
      stroke: 'green',
      strokeLinecap: 'butt',
    },
    text: {
      fill: 'green',
      fontWeight: 'bold',
    },
  } : {
    path: {
      stroke: 'green',
      strokeLinecap: 'butt',
    },
    text: {
      fill: 'white',
      fontWeight: 'bold',
    },
  };
  console.log(timeRemaining)
  console.log(Math.round(100*timeRemaining)/100)
  console.log(ROUND_TIME)
  console.log(typeof timeRemaining)

  return (
    <>
      <Container style={{ padding: '16px' }}>
        <Left>
          <h1>Level {state.level}</h1>
        </Left>
        <Right>
          <h1>{timeRemaining?.toFixed(2)}</h1>
          <p>Upgrades</p>
          <p>{upgradeDescriptions}</p>
        </Right>
        <Center>
          <div style={{ height: 100, width: 100 }}>
            <CircularProgressbar
              value={state.currentScore / state.goalScore}
              maxValue={1}
              text={state.currentScore + ' / ' + state.goalScore}
              styles={scoreStyles}
            />
          </div>
        </Center>
      </Container>
      <TimeProgress value={timeRemaining} max={ROUND_TIME} />
    </>
  );
};

export default GameInfo;