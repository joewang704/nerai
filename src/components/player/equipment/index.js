import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from '../../app';

import { COLORS } from '../../../data/constants';

const ITEM_SIZE = 50;

const Container = styled.div`
  padding: 24px;
`;

const Item = styled.div`
  width: ${ITEM_SIZE}px;
  height: ${ITEM_SIZE}px;
  background-color: ${COLORS.omSand};
  border-radius: 4px;
  border: 1px solid ${COLORS.metallicGray};
  display: inline-block;
  margin-left: 8px;
  margin-bottom: 8px;
`;

const Hat = styled(Item)`
`;

const Earrings = styled(Item)`
`;

const Cape = styled(Item)`
`;

const Body = styled(Item)`
`;

const Hands = styled(Item)`
`;

const Weapon = styled(Item)`
`;

const Legs = styled(Item)`
`;

const Shoes = styled(Item)`
`;

const Equipment = () => {
  const { state } = useContext(GameContext);

  return (
    <Container>
      <h3>Equipment</h3>
      <Earrings></Earrings>
      <Hat></Hat>
      <Cape></Cape>
      <br />
      <Hands></Hands>
      <Body></Body>
      <Weapon></Weapon>
      <br />
      <Legs></Legs>
      <Shoes></Shoes>
    </Container>
  );
}

export default Equipment;
