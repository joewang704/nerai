import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';
import { COLORS } from '../data/constants';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #333;
  color: white;
  padding: 24px;
  display: flex;
  h1 {
    font-size: 16px;
  }
`;

const EnemyContainer = styled.div`
  width: 50%;
`;

const EnemyBar = styled.div`
  position: relative;
  width: calc(100% - 48px);
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${COLORS.metallicGray};
`;

const Health = styled.div`
  ${({ percent }) => ({
    width: `${Math.floor(percent * 100)}%`,
  })}
  background-color: ${COLORS.darkRed};
  position: absolute;
  height: 100%;
  top: 0;
`;

const Text = styled.div`
  z-index: 2;
  position: relative;
`;

const DungeonContainer = styled.div`
  width: 50%;
`;

const EnemyInfo = ({ timeRemaining }) => {
  const { state } = useContext(GameContext);

  const { enemies, currentEnemyIdx } = state;
  const enemy = enemies[currentEnemyIdx];

  return (
    <Container>
      <EnemyContainer>
        <h1>{enemy.name}, Damage: {enemy.damage}, XP Gained on Kill: {enemy.xp}</h1>
        <EnemyBar>
          <Text>{enemy.hp} / {enemy.maxHP}</Text>
          <Health percent={enemy.hp / enemy.maxHP} />
        </EnemyBar>
      </EnemyContainer>
      <DungeonContainer>
        <h1>{state.dungeon.name}</h1>
        <div>Floor {state.currentEnemyIdx + 1} / {state.enemies.length}</div>
        <div>Time Remaining: {timeRemaining}</div>
        <div>Acquired Items: {state.collectedItems.length}</div>
      </DungeonContainer>
    </Container>
  );
};
export default EnemyInfo;