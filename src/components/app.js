import React, { useState } from 'react';
import styled from '@emotion/styled';

import Game from './game';
import { SettingsModal } from './settings';

import { useGameReducer } from '../hooks/game';

const Container = styled.div`
`;

export const GameContext = React.createContext();

const App = () => {
  const [state, dispatch] = useGameReducer();
  const [settings, setSettings] = useState(false);

  const startGame = () => {
    dispatch({ type: 'startGame', payload: { timer: 60 } });
  }

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <Container>
        {state.status === 'INITIAL' &&
          <>
            <button onClick={startGame}>Start Game</button>
            <button onClick={() => setSettings(true)}>Settings</button>
            <SettingsModal isOpen={settings} close={() => setSettings(false)} />
          </>
        }
        {state.status === 'RUNNING' && <Game />}
        {state.status === 'COMPLETED' && 
          <>
            Game Over
          </>}
      </Container>
    </GameContext.Provider>
  );
}

export default App;
