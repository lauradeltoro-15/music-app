import { ReactNode, useState } from "react";

const useModal = () => {
  const [isVisible, setVisible] = useState(false);
  const [content, setModalContent] = useState<ReactNode>(null);

  const handleModal = (visible: boolean, content: ReactNode = null) => {
    setVisible(visible);
    setModalContent(content);
  };

  return { handleModal, isVisible, content };
};

export default useModal;