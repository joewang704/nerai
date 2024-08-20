import { createPortal } from "react-dom";
import styled from '@emotion/styled';

const Background = styled.div`
  background-color: black;
  opacity: .4;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
  padding: 24px;
  border-radius: 4px;
  opacity: 1;
`;

export const Modal = ({ children, close }) => {
  return (
    <>
      {createPortal(
        <>
        <Container>
          {children}
        </Container>
        <Background onClick={close}></Background>
        </>, document.body)}
    </>
  )
}