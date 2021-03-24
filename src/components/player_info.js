import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';
import { getXPToLevel } from '../hooks/player';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background-color: white;
  padding: 24px;
  h1 {
    font-size: 16px;
  }
`;

const HealthContainer = styled.div`
  position: relative;
  width: calc(100% - 48px);
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 1px solid #666;
`;

const Health = styled.div`
  ${({ percent }) => ({
    width: `${Math.floor(percent * 100)}%`,
  })}
  background-color: red;
  position: absolute;
  height: 100%;
  top: 0;
`;

const Text = styled.div`
  z-index: 2;
  position: relative;
`;

const XPContainer = styled.div`
  position: relative;
  width: calc(100% - 48px);
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #666;
`;

const XPBar = styled.div`
  ${({ percent }) => ({
    width: `${Math.floor(percent * 100)}%`,
  })}
  background-color: yellow;
  position: absolute;
  height: 100%;
  top: 0;
`;

const XPText = styled.div`
  z-index: 2;
  position: relative;
`;


const PlayerInfo = () => {
  // const { playerState: player } = useContext(PlayerContext);
  const { state } = useContext(GameContext);
  const { player } = state;
  const maxXP = getXPToLevel(player.level);

  return (
    <Container>
      <h1>Player, Level: {player.level}, Damage: {player.damage}</h1>
      <HealthContainer>
        <Text>{player.hp} / {player.maxHP}</Text>
        <Health percent={player.hp / player.maxHP} />
      </HealthContainer>
      <XPContainer>
        <Text>{player.xp} / {maxXP}</Text>
        <XPBar percent={player.xp / maxXP} />
      </XPContainer>
    </Container>
  );
};

export default PlayerInfo;