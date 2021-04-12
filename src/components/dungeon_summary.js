import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';

const Container = styled.div`
  padding: 24px;
`;

const ItemsList = styled.div`
  display: flex;
  img {
    margin-right: 24px;
  }
`;

const DungeonList = () => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <Container>
      <h1>{state.dungeon.success ? `${state.dungeon.name} completed! ✅` : `${state.dungeon.name} failed`}</h1>
      {state.dungeon.leveledUp && <h1>Leveled Up! 🎉</h1>}
      XP Gained: {state.collectedXP}
      <br />
      Items Found: {state.collectedItems.length ? 
        <ItemsList>
          {state.collectedItems.map(item => {
            return <img src={item.img} />
          })}
        </ItemsList>
        : 'None'}
      <br />
      <br />
      <button onClick={() => {
        dispatch({
          type: 'returnToHomeScreen',
        });
      }}>Return to Dungeon List</button>
    </Container>
  );
}

export default DungeonList;

