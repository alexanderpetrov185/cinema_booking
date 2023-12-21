import React, { useCallback, useMemo, useState } from "react";
import "./header.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import ModalWindow from "../modalWindow/ModalWindow";
import { useAppSelector } from "../../redux/hooks/redux";
import Profile from "../profile/Profile";
import AuthForm from "../authForm/AuthForm";
import { ReactComponent as Logo } from "../../static/icons/logo.svg";
import { ReactComponent as ProfileIcon } from "../../static/icons/profile.svg";

const Header = () => {
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

  const { isLoggedIn } = useAppSelector((state) => state.userReducer);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [navigationActive, setMenuActive] = React.useState(false);

  const modalOpen = useCallback((state: boolean) => {
    setAuthModalOpen(state);
  }, []);

  let { pathname } = useLocation();

  return (
    <div
      className={"header"}
      style={{
        position: pathname !== "/" ? "sticky" : "fixed",
      }}
    >
      <Link to={"/"}>
        <Logo className="logo" />
      </Link>
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
      {isLoggedIn ? (
        <Profile modalOpen={modalOpen} />
      ) : (
        <div className={"buttonsBlock"}>
          <button
            className={"buttonStandard"}
            type={"submit"}
            onClick={() => setAuthModalOpen(true)}
          >
            <ProfileIcon className={"profileIcon"} />
            <span>Войти</span>
          </button>
          <div
            className="burgerIcon"
            onClick={() => setMenuActive(!navigationActive)}
          >
            <span />
          </div>
          <ModalWindow
            modalIsOpen={authModalOpen}
            setModalIsOpen={setAuthModalOpen}
          >
            <AuthForm setModalIsOpen={setAuthModalOpen} />
          </ModalWindow>
        </div>
      )}
    </div>
  );
};

export default Header;
