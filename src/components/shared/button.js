import React from 'react';
import styled from '@emotion/styled';

const colorMap = {
  red: ['hsl(340deg 100% 32%)', 'hsl(345deg 100% 47%)'],
  green: ['hsl(107deg 100% 25%)', 'hsl(107deg 100% 35%)'],
  pink: ['hsl(333deg 100% 70%)', 'hsl(333deg 100% 78%)'],
};
const DEFAULT_COLOR = 'pink';

const Container = styled.button`
  background: hsl(340deg 100% 32%);
  ${({ btnColor }) => ({ background: colorMap[btnColor ?? DEFAULT_COLOR][0] })}
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;

  .front {
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    ${({ btnColor }) => ({ background: colorMap[btnColor ?? DEFAULT_COLOR][1] })}
    color: white;
    transform: translateY(-6px);
  }

  &:disabled {
    opacity: .4;
    cursor: default;
  }

  &:hover {
  &:hover:not(:disabled) {
    filter: brightness(110%);
  }
  &:hover:not(:disabled) .front {
    transform: translateY(-6px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  &:active:not(:disabled) .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const Button = ({ children, ...props }) => (
  <Container {...props}>
    <span class="front">
      {children}
    </span>
  </Container>
);
