import React from "react";
import "./burgerMenu.scss";

const BurgerMenu = ({
  navigationActive,
  setMenuActive,
}: {
  navigationActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="burgerMenu"
      onClick={() => setMenuActive(!navigationActive)}
    >
      <span />
    </div>
  );
};

export default BurgerMenu;
