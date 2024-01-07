import React from "react";
import styles from "./burgerMenu.module.scss";

const BurgerMenu = ({
  burgerActive,
  setBurgerActive,
}: {
  burgerActive: boolean;
  setBurgerActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={styles.burgerMenu}
      onClick={() => setBurgerActive(!burgerActive)}
    >
      <span />
    </div>
  );
};

export default BurgerMenu;
