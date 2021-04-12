import React, { useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import styled from '@emotion/styled';

import DungeonList from './dungeon_list';
import DungeonSummary from './dungeon_summary';
import SensitivityInput from './sensitivity_input';
import Game from './game';

import { useGameReducer } from '../hooks/game';
import { savePlayer, saveSensitivity } from '../utils/localStorage';

const Container = styled.div`
`;

export const GameContext = React.createContext();

const App = () => {
  const [state, dispatch] = useGameReducer();
  const gameScreen = useFullScreenHandle();

  useEffect(() => {
    const { sensitivity, player } = state;
    if (sensitivity) {
      saveSensitivity(sensitivity);
    }
    if (player) {
      savePlayer(JSON.stringify(player));
    }
  }, [state.sensitivity, state.player]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <Container>
        {state.status === 'INITIAL' &&
          <>
            <DungeonList openGameScreen={gameScreen.enter} />
            <SensitivityInput />
          </>
        }
        <FullScreen handle={gameScreen}>
          {state.status === 'RUNNING' && gameScreen.active && <Game screenHandle={gameScreen}/>}
        </FullScreen>
        {state.status === 'COMPLETED' && <DungeonSummary />}
      </Container>
    </GameContext.Provider>
  );
}

export default App;
