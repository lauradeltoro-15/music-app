import React, { ReactNode } from "react";

const useModal = () => {
  const [isVisible, setVisible] = React.useState(false);
  const [content, setModalContent] = React.useState<ReactNode>(null);

  const handleModal = (visible: boolean, content: ReactNode = null) => {
    setVisible(visible);
    setModalContent(content);
  };

  return { handleModal, isVisible, content };
};

export default useModal;