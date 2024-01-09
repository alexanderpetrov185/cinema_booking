import React from "react";
import styles from "./dropDownMenu.module.scss";

type Props = {
  isDropDownOpen: boolean;
  children?: React.ReactNode;
};

const DropDownMenu: React.FC<Props> = ({ isDropDownOpen, children }: Props) => {
  return (
    <div
      className={
        isDropDownOpen ? `${styles.dropDown} ${styles.active}` : styles.dropDown
      }
    >
      <div className={styles.dropDownContent}>{children}</div>
    </div>
  );
};

export default DropDownMenu;
