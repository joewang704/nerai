import React, { useState } from 'react';
import styled from '@emotion/styled';

import Game from './game';
import { Shop } from './shop';
import { SettingsModal } from './settings';

import { useGameReducer } from '../hooks/game';

const Container = styled.div`
`;

export const GameContext = React.createContext();

const App = () => {
  const [state, dispatch] = useGameReducer();
  const [settings, setSettings] = useState(false);

  const startGame = () => {
    dispatch({ type: 'startGame' });
  }
  const returnHome = () => {
    dispatch({ type: 'returnToHomeScreen' });
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
        {state.status === 'SHOP' && <Shop />}
        {state.status === 'COMPLETED' && 
          <>
            Game Over
            <button onClick={startGame}>Play Again</button>
            <button onClick={returnHome}>Return Home</button>
          </>}
      </Container>
    </GameContext.Provider>
  );
}

export default App;
