import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';
import { DUNGEONS } from '../data/dungeons';

const Container = styled.div`
  display: flex;
`;

const DungeonContainer = styled.div`
  background-color: #eee;
  margin: 24px;
  padding: 24px;
  padding-top: 8px;
  border-radius: 4px;
  height: min-content;
`;

const ItemList = styled.div`
  display: flex;
  margin-right: 24px;
`;

const DungeonList = ({ openGameScreen }) => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <Container>
      {DUNGEONS.map((dungeon, i) => {
        const { name, lvl, enemies } = dungeon;
        const items = Object.values(enemies.reduce((acc, curr) => {
          curr.drops && curr.drops.forEach(({ item }) => {
            acc[item.id] = item;
          })
          return acc;
        }, {}));
        return (
          <DungeonContainer key={i}>
            <h3>{name} {state.player.dungeonsCompleted[name] && <>✅</>}</h3>
            <div>Level: {lvl}</div>
            <div>Items: <ItemList>{items.map(({ img }) => <img src={img} />)}</ItemList></div>
            <br />
            <button onClick={() => {
              dispatch({
                type: 'startGame',
                payload: dungeon,
              });
              openGameScreen();
            }}>Start</button>
          </DungeonContainer>
        );
      })}
    </Container>
  );
}

export default DungeonList;
