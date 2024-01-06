import React from "react";
import styles from "./buttonClose.module.scss";

type ButtonProps = {
  onClick: () => void;
};

const ButtonClose = ({ onClick }: ButtonProps) => {
  return (
    <button type={"button"} className={styles.buttonClose} onClick={onClick}>
      X
    </button>
  );
};

export default ButtonClose;
