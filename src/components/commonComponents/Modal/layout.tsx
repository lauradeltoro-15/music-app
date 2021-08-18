import styled from "styled-components";

export const ModalBackground = styled.div`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  position: relative;
  background: white;
  height: 300px;
  width: 300px;
`;
export const CloseButton = styled.a`
  position: absolute;
  right: 30px;
  top: 10px;
  width: 10px;
  height: 10px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 20px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;
