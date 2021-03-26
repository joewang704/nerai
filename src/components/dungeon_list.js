import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';

const Container = styled.div`
`;

const SLIME_INFO = {
  name: 'Slime',
  hp: 100,
  maxHP: 100,
  damage: 10,
  xp: 5,
  lvl: 1,
};

const BOOGIE_INFO = {
  name: 'Boogie',
  hp: 400,
  maxHP: 400,
  damage: 40,
  xp: 50,
  lvl: 5,
};

const DUNGEON_1_INFO = {
  enemies: [
    SLIME_INFO,
    SLIME_INFO,
    SLIME_INFO,
    {
      name: 'Slime Boss',
      hp: 1000,
      maxHP: 1000,
      damage: 20,
      xp: 10,
    },
  ]
};
const DUNGEON_2_INFO = {
  enemies: [
    BOOGIE_INFO,
    BOOGIE_INFO,
    BOOGIE_INFO,
    {
      name: 'Oogie Boss',
      hp: 2000,
      maxHP: 2000,
      damage: 200,
      xp: 50,
    },
  ]
};

const DungeonList = ({ openGameScreen }) => {
  const { dispatch } = useContext(GameContext);

  return (
    <Container>
      <button onClick={() => {
        dispatch({
          type: 'startGame',
          payload: DUNGEON_1_INFO,
        });
        openGameScreen();
      }}>Dungeon 1</button>
      <button onClick={() => {
        dispatch({
          type: 'startGame',
          payload: DUNGEON_2_INFO,
        });
        openGameScreen();
      }}>Dungeon 2</button>
    </Container>
  );
}

export default DungeonList;
