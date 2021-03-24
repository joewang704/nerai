import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';

const Container = styled.div`
`;

const DUNGEON_1_INFO = {
  enemies: [
    {
      name: 'Slime',
      hp: 100,
      maxHP: 100,
      damage: 10,
      xp: 5,
    },
    {
      name: 'Slime',
      hp: 100,
      maxHP: 100,
      damage: 10,
      xp: 5,
    },
    {
      name: 'Slime',
      hp: 100,
      maxHP: 100,
      damage: 10,
      xp: 5,
    },
    {
      name: 'Slime Boss',
      hp: 1000,
      maxHP: 1000,
      damage: 100,
      xp: 10,
    },
  ]
};

const DungeonList = ({ openGameScreen }) => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <Container>
      <button onClick={() => {
        dispatch({
          type: 'startGame',
          payload: DUNGEON_1_INFO,
        });
        openGameScreen();
      }}>Dungeon 1</button>
    </Container>
  );
}

export default DungeonList;
