import { Context, useContext } from "react";
import ReactDOM from "react-dom";
import {
  ModalBackground,
  StyledModal,
  CloseButton,
} from "./layout";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalAttributes } from "../../contexts/ModalContext/models";

const Modal = () => {
  const { content, handleModal, isVisible } = useContext(
    ModalContext as Context<ModalAttributes>
  );
  const modal = document.querySelector("#modal") as Element;

  return isVisible
    ? ReactDOM.createPortal(
        <ModalBackground>
          <StyledModal>
            <CloseButton onClick={() => handleModal(false)} />
            {content}
          </StyledModal>
        </ModalBackground>,
        modal
      )
    : null;
};

export default Modal;
