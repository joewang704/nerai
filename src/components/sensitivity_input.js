import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';

const Container = styled.div`
  padding: 24px;
`;

const SensitivityInput = () => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <Container>
      <br />
      <span>Current Sensitivity: {state.sensitivity}</span>
      <br />
      <br />
      <input 
        type="number"
        step="0.01"
        value={state.sensitivity} onChange={(event) =>
          dispatch({ type: 'setSensitivity', payload: { sensitivity: event.target.value } })
        }
      />
    </Container>
  );
};
export default SensitivityInput;
