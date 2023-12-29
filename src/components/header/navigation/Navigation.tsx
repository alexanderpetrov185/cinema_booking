import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = ({ navigationActive }: { navigationActive: boolean }) => {
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
    <nav className={navigationActive ? "navigation active" : "navigation"}>
      {navigation.map((link) => (
        <ul className="navLinks" key={link.id}>
          <NavLink to={link.url} key={link.id}>
            {({ isActive }) => (
              <li
                className={
                  isActive ? "navigationLink active" : "navigationLink"
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
