import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { GameContext } from './app';
import { getXPToLevel } from '../hooks/game';
import { COLORS } from '../data/constants';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 116px;
  background-color: #333;
  color: white;
  padding: 12px 24px 24px;
  h1 {
    font-size: 16px;
  }
`;

const HealthContainer = styled.div`
  position: relative;
  width: calc(100% - 48px);
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${COLORS.metallicGray};
  margin-bottom: 4px;
`;

const Health = styled.div`
  ${({ percent }) => ({
    width: `${Math.floor(percent * 100)}%`,
  })}
  background-color: ${COLORS.darkRed};
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
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${COLORS.metallicGray};
`;

const XPBar = styled.div`
  ${({ percent }) => ({
    width: `${Math.floor(percent * 100)}%`,
  })}
  background-color: ${COLORS.darkYellow};
  position: absolute;
  height: 100%;
  top: 0;
`;


const PlayerInfo = () => {
  const { state } = useContext(GameContext);
  const { player } = state;
  const maxXP = getXPToLevel(player.level);

  return (
    <Container>
      <h1>Player, Level: {player.level}</h1>
      <HealthContainer>
        <Text>HP ({player.hp} / {player.maxHP})</Text>
        <Health percent={player.hp / player.maxHP} />
      </HealthContainer>
      <XPContainer>
        <Text>XP ({player.xp} / {maxXP})</Text>
        <XPBar percent={player.xp / maxXP} />
      </XPContainer>
    </Container>
  );
};

export default PlayerInfo;