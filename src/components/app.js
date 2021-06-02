import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import DungeonList from './dungeon_list';
import DungeonSummary from './dungeon_summary';
import Inventory from './player/inventory';
import Equipment from './player/equipment';
import SensitivityInput from './sensitivity_input';
import Game from './game';

import { useGameReducer } from '../hooks/game';
import { savePlayer, saveSensitivity } from '../utils/localStorage';
import PlayerInfo from './player_info';

const Container = styled.div`
`;

export const GameContext = React.createContext();

const App = () => {
  const [state, dispatch] = useGameReducer();

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
            <DungeonList openGameScreen={() => {}} />
            {/* <SensitivityInput /> */}
            <Inventory />
            <Equipment />
            <PlayerInfo />
          </>
        }
        {state.status === 'RUNNING' && <Game />}
        {state.status === 'COMPLETED' && 
          <>
            <DungeonSummary />
            <PlayerInfo />
          </>}
      </Container>
    </GameContext.Provider>
  );
}

export default App;
