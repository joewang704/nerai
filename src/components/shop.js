import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';

import { generateRandomTarget } from '../data/targets';
import { PURCHASE_CARD_PRICE } from '../data/constants';
import { Modal } from "./shared/modal";
import { Card, CardOption } from "./shared/card";
import { GameContext } from './app';

const Container = styled.div`
`;

export const Shop = () => {
  const [purchaseCardModal, setPurchaseCardModal] = useState();
  const { state, dispatch } = useContext(GameContext);

  const purchaseCard = () => {
    setPurchaseCardModal([generateRandomTarget(), generateRandomTarget(), generateRandomTarget()]);
  };

  return (
    <Container>
      <h1>Shop</h1>
      Current Gold: {state.money}
      <br />
      Current Deck: 
      <div style={{ display: 'flex'}}>
        {state.targets.map(({ tier }) => (
          <Card tier={tier} />
        ))}
      </div>
      <button onClick={purchaseCard} disabled={state.money < PURCHASE_CARD_PRICE}>Purchase Card ({PURCHASE_CARD_PRICE} gold)</button>
      <button disabled={state.money < PURCHASE_CARD_PRICE}>Remove Card (200 gold)</button>
      <br />
      <button onClick={() => dispatch({ type: 'startNextRound' })}>Next Level</button>
      <PurchaseCardModal options={purchaseCardModal} close={() => setPurchaseCardModal()} />
    </Container>
  );
}

const PurchaseCardModal = ({ options, close }) => {
  const { dispatch } = useContext(GameContext);
  const [selected, setSelected] = useState(0);

  const collect = () => {
    dispatch({ type: 'addTargets', payload: { targets: [options[selected]], spent: PURCHASE_CARD_PRICE }})
    close();
  }

  return (
    options ? <Modal close={() => {}}>
      <h1>Choose Your Card</h1>
      {options.map(({ tier }, i) => (
        <CardOption tier={tier} onClick={() => setSelected(i)} selected={selected === i} />
      ))}
      <button onClick={collect}>Collect</button>
    </Modal> : <></>
  );
}

