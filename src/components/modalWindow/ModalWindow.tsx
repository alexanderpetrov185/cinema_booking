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
    document.body.style.overflow = "auto";
    return null;
  }

  //чтобы сайт не двигался из за появления полосы прокрутки
  document.body.style.marginRight = "calc(-1 * (100vw - 100%))";
  document.body.style.overflow = "hidden";

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
