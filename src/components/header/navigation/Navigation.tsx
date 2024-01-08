import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.scss";
import ButtonClose from "../../buttonClose/ButtonClose";

type Props = {
  setBurgerActive: React.Dispatch<React.SetStateAction<boolean>>;
  burgerActive: boolean;
};

const Navigation = ({ burgerActive, setBurgerActive }: Props) => {
  const navigation = useMemo(
    () => [
      {
        id: 1,
        title: "Расписание",
        url: "/",
      },
      {
        id: 2,
        title: "Репертуар",
        url: "/repertoire",
      },
      {
        id: 3,
        title: "Цены",
        url: "/prices",
      },
      {
        id: 4,
        title: "Галерея",
        url: "/gallery",
      },
      {
        id: 5,
        title: "Справка",
        url: "/help",
      },
      {
        id: 6,
        title: "О кинотеатре",
        url: "/about",
      },
    ],
    [],
  );

  return (
    <nav
      className={
        burgerActive
          ? `${styles.navigation} ${styles.burgerActive}`
          : styles.navigation
      }
    >
      {burgerActive ? (
        <ButtonClose onClick={() => setBurgerActive(!burgerActive)} />
      ) : null}
      {navigation.map((link) => (
        <ul className={styles.navLinks} key={link.id}>
          <NavLink to={link.url} key={link.id}>
            {({ isActive }) => (
              <li
                className={
                  isActive
                    ? `${styles.navigationLink} ${styles.active}`
                    : styles.navigationLink
                }
              >
                {link.title}
              </li>
            )}
          </NavLink>
        </ul>
      ))}
    </nav>
  );
};

export default Navigation;
