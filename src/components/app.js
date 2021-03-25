import React from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import styled from '@emotion/styled';
import DungeonList from './dungeon_list';
import SensitivityInput from './sensitivity_input';
import Game from './game';

import { useGameReducer } from '../hooks/game';

const Container = styled.div`
`;

export const GameContext = React.createContext();

const App = () => {
  const [state, dispatch] = useGameReducer();
  const gameScreen = useFullScreenHandle();

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
        {state.status === 'COMPLETED' && <>You're a beast lol</>}
        {state.status === 'GAME_OVER' && <>You suck lol</>}
      </Container>
    </GameContext.Provider>
  );
}

export default App;
