import { ReactNode } from "react";

export type ModalProviderProps = {
  children: ReactNode;
};

export type ModalAttributes = {
  handleModal: (visible: boolean, content?: ReactNode) => void;
  isVisible: boolean;
  content?: ReactNode;
};
