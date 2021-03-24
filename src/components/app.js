import React from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import styled from '@emotion/styled';
import DungeonList from './dungeon_list';
import Game from './game';

import { useGameReducer } from '../hooks/game';
import { usePlayerReducer } from '../hooks/player';

const Container = styled.div`
`;

export const GameContext = React.createContext();
export const PlayerContext = React.createContext();

const App = () => {
  const [state, dispatch] = useGameReducer();
  const [playerState, playerDispatch] = usePlayerReducer();
  const gameScreen = useFullScreenHandle();

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <PlayerContext.Provider value={{ playerState, playerDispatch }}>
        <Container>
          {state.status === 'INITIAL' && <DungeonList openGameScreen={gameScreen.enter} />}
          <FullScreen handle={gameScreen}>
            {state.status === 'RUNNING' && gameScreen.active && <Game screenHandle={gameScreen}/>}
          </FullScreen>
        </Container>
      </PlayerContext.Provider>
    </GameContext.Provider>
  );
}

export default App;
