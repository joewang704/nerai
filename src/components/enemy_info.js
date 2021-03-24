import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: white;
  padding: 24px;
  h1 {
    font-size: 16px;
  }
`;

const EnemyBar = styled.div`
  position: relative;
  width: calc(100% - 48px);
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 1px solid #666;
`;

const Health = styled.div`
  ${({ percent }) => ({
    width: `${Math.floor(percent * 100)}%`,
  })}
  background-color: red;
  position: absolute;
  height: 100%;
  top: 0;
`;

const Text = styled.div`
  z-index: 2;
  position: relative;
`;

const EnemyInfo = () => {
  const { state } = useContext(GameContext);

  const { enemies, currentEnemyIdx } = state;
  const enemy = enemies[currentEnemyIdx];

  return (
    <Container>
      <h1>{enemy.name}, Damage: {enemy.damage}, XP Gained on Kill: {enemy.xp}</h1>
      <EnemyBar>
        <Text>{enemy.hp} / {enemy.maxHP}</Text>
        <Health percent={enemy.hp / enemy.maxHP} />
      </EnemyBar>
    </Container>
  );
};
export default EnemyInfo;