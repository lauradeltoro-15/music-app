import React from "react";
import { ModalAttributes, ModalProviderProps } from "./models";
import useModal from "./useModal";

const ModalContext = React.createContext<ModalAttributes | null>(null);
const { Provider } = ModalContext;

const ModalProvider = ({ children }: ModalProviderProps) => {
  const { handleModal, isVisible, content } = useModal();

  return (
    <Provider value={{ handleModal, isVisible, content }}>{children}</Provider>
  );
};

export { ModalContext, ModalProvider };
