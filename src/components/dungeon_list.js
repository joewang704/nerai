import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';

const Container = styled.div`
  display: flex;
`;

const DungeonContainer = styled.div`
  background-color: #eee;
  margin: 24px;
  padding: 24px;
  padding-top: 8px;
  border-radius: 4px;
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

const SLIME_FARM = {
  name: 'Slime Farm',
  enemies: [
    SLIME_INFO,
    SLIME_INFO,
    SLIME_INFO,
    SLIME_INFO,
    SLIME_INFO,
    SLIME_INFO,
    SLIME_INFO,
    SLIME_INFO,
    SLIME_INFO,
    SLIME_INFO,
  ],
  timer: 9999,
  lvl: 1,
};

const BOOGIE_FARM = {
  name: 'Boogie Farm',
  enemies: [
    BOOGIE_INFO,
    BOOGIE_INFO,
    BOOGIE_INFO,
    BOOGIE_INFO,
    BOOGIE_INFO,
    BOOGIE_INFO,
    BOOGIE_INFO,
    BOOGIE_INFO,
    BOOGIE_INFO,
    BOOGIE_INFO,
  ],
  timer: 9999,
  lvl: 5,
};

const SLIME_DUNGEON = {
  name: 'Slime Dungeon',
  enemies: [
    SLIME_INFO,
    SLIME_INFO,
    SLIME_INFO,
    {
      name: 'Slime Boss',
      hp: 500,
      maxHP: 500,
      damage: 20,
      xp: 10,
      lvl: 1,
    },
  ],
  timer: 60,
  lvl: 1,
};

const BOOGIE_DUNGEON = {
  name: 'Boogie Dungeon',
  enemies: [
    BOOGIE_INFO,
    BOOGIE_INFO,
    BOOGIE_INFO,
    {
      name: 'Oogie Boss',
      hp: 1500,
      maxHP: 1500,
      damage: 200,
      xp: 50,
      lvl: 5,
    },
  ],
  timer: 60,
  lvl: 5,
};

const DUNGEONS = [
  SLIME_FARM,
  SLIME_DUNGEON,
  BOOGIE_FARM,
  BOOGIE_DUNGEON,
]

const DungeonList = ({ openGameScreen }) => {
  const { dispatch } = useContext(GameContext);

  return (
    <Container>
      {DUNGEONS.map(dungeon => (
        <DungeonContainer>
          <h3>{dungeon.name}</h3>
          <div>Level: {dungeon.lvl}</div>
          <div>Items: TBD</div>
          <button onClick={() => {
            dispatch({
              type: 'startGame',
              payload: dungeon,
            });
            openGameScreen();
          }}>Start</button>
        </DungeonContainer>
      ))}
    </Container>
  );
}

export default DungeonList;
