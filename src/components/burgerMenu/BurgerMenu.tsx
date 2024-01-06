import React from "react";
import styles from "./burgerMenu.module.scss";

const BurgerMenu = ({
  navigationActive,
  setMenuActive,
}: {
  navigationActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={styles.burgerMenu}
      onClick={() => setMenuActive(!navigationActive)}
    >
      <span />
    </div>
  );
};

export default BurgerMenu;
