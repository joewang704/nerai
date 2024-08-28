import React, { useState } from 'react';
import styled from '@emotion/styled';

import Game from './game';
import { Shop } from './shop';
import { SettingsModal } from './settings';
import { Button } from './shared/button';
import { Centered } from './shared/util';

import { useGameReducer } from '../hooks/game';

const Container = styled.div`
  color: white;
`;

const StartScreen = styled(Centered)`
  font-weight: 600;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 8px;
  }
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
          <StartScreen>
            <Button onClick={startGame}>Start Game</Button>
            <Button onClick={() => setSettings(true)}>Settings</Button>
            <SettingsModal isOpen={settings} close={() => setSettings(false)} />
          </StartScreen>
        }
        {state.status === 'RUNNING' && <Game />}
        {state.status === 'SHOP' && <Shop />}
        {state.status === 'COMPLETED' && 
          <StartScreen>
            <h1>Game Over</h1>
            <p>Level Reached: {state.level}</p>
            <p>Score Reached: {state.currentScore}</p>
            <p>Goal Score: {state.goalScore}</p>
            <Button onClick={startGame}>Play Again</Button>
            <Button onClick={returnHome}>Return Home</Button>
          </StartScreen>}
      </Container>
    </GameContext.Provider>
  );
}

export default App;
