import React from "react";
import "./modalWindow.scss";
import { animated, config, useTransition } from "@react-spring/web";

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
  const scrollWidth = window.innerWidth - document.body.clientWidth + "px";
  const transition = useTransition(modalIsOpen, {
    from: {
      backgroundColor: "transparent",
      backdropFilter: "blur(0px)",
    },
    enter: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      backdropFilter: "blur(20px)",
    },
    config: config.gentle,
  });

  if (!modalIsOpen) {
    document.body.style.paddingRight = "0";
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
    return null;
  }

  //чтобы сайт не двигался из за появления полосы прокрутки
  document.body.style.paddingRight = scrollWidth;
  document.body.style.overflow = "hidden";

  return (
    <>
      {transition((style, movie) => (
        <animated.div
          style={style}
          className={modalIsOpen ? "modalWindow active" : "modalWindow"}
          onClick={() => setModalIsOpen(false)}
        >
          <div
            className={modalIsOpen ? "modalContent active" : "modalContent"}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </animated.div>
      ))}
    </>
  );
};

export default ModalWindow;
