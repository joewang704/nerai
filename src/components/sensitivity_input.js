import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';

const SensitivityInput = () => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <div>
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
    </div>
  );
};
export default SensitivityInput;
