import React from "react";
import "./modalWindow.scss";

type Props = {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<boolean>;
  children?: React.ReactNode;
};

const ModalWindow: React.FC<Props> = ({
  modalIsOpen,
  setModalIsOpen,
  children,
}: Props) => {
  if (!modalIsOpen) {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "scroll !important";
    return null;
  }

  //чтобы сайт не двигался из за появления полосы прокрутки
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.width = "100%";

  return (
    <div
      className={modalIsOpen ? "modalWindow active" : "modalWindow"}
      onClick={() => setModalIsOpen(false)}
    >
      <div
        className={modalIsOpen ? "modalContent active" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
