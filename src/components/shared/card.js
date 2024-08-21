import styled from '@emotion/styled';

import { TIERS } from "../../data/targets";

const Container = styled.div`
  padding: 4px;
  border: 3px solid #eee;
  border-radius: 4px;
`;

export const Card = ({ tier }) => {
  return (
    <Container style={{ borderColor: TIERS[tier] }}>
      N/A
    </Container>
  )
}

const OptionContainer = styled.div`
  padding: 4px;
  border: 3px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  hover {
    opacity: .6;
  }
`;

export const CardOption = ({ tier, onClick, selected }) => {
  const color = TIERS[tier];
  return (
    <OptionContainer style={{ borderColor: color, borderWidth: selected ? '5px' : '3px', fontWeight: selected ? 'bold' : 'normal' }} onClick={onClick}>
      Effect: None
    </OptionContainer>
  )
}