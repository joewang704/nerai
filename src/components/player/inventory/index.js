import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from '../../app';

import Item from './item';

const Container = styled.div`
  padding: 24px;
`;

const ItemList = styled.div`
  display: flex;
`;

const Inventory = () => {
  const { state, dispatch } = useContext(GameContext);
  console.log(state);

  return (
    <Container>
      <h3>Inventory</h3>
      <ItemList>
        {state.player.inventory.map((item, i) =>
          <Item item={item} key={i} onClick={() => dispatch({ type: 'equipItem', payload: { item } })} />)
        }
      </ItemList>
    </Container>
  );
}

export default Inventory;