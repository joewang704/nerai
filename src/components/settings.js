import { useEffect, useContext } from 'react';

import { Modal } from "./shared/modal";
import { Button } from "./shared/button";
import { GameContext } from './app';

import { save } from '../utils/localStorage';

export const SettingsModal = ({ isOpen, close }) => {
  const { state, dispatch } = useContext(GameContext);

  useEffect(() => {
    const { sensitivity, targetSize } = state;
    if (sensitivity) {
      save('sensitivity', sensitivity);
    }
    if (targetSize) {
      save('targetSize', targetSize);
    }
  }, [state.sensitivity, state.targetSize]);

  return (
    isOpen ? <Modal close={close}>
      <h1>Settings</h1>
      <div>
        Sensitivity: &nbsp;
        <input 
          type="number"
          step="0.01"
          value={state.sensitivity} onChange={(event) =>
            dispatch({ type: 'changeSettings', payload: { sensitivity: event.target.value } })
          }
        />
      </div>
      <div>
        Target Size (in px): &nbsp;
        <input 
          type="number"
          step="1"
          value={state.targetSize} onChange={(event) =>
            dispatch({ type: 'changeSettings', payload: { targetSize: event.target.value } })
          }
        />
      </div>
      <br />
      <Button onClick={close}>Save</Button>
    </Modal> : <></>
  );
}