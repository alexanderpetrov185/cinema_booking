import React, { useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import ModalWindow from "../modalWindow/ModalWindow";
import { useAppSelector } from "../../redux/hooks/redux";
import Profile from "../profile/Profile";
import AuthForm from "./authForm/AuthForm";
import { ReactComponent as Logo } from "../../static/icons/logo.svg";
import { ReactComponent as ProfileIcon } from "../../static/icons/profile.svg";
import Navigation from "./navigation/Navigation";
import BurgerMenu from "./burgerMenu/BurgerMenu";

const Header = () => {
  const [navigationActive, setMenuActive] = React.useState(false);
  const { isLoggedIn } = useAppSelector((state) => state.userReducer);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  let { pathname } = useLocation();
  const scrollWidth = window.innerWidth - document.body.clientWidth + "px";

  return (
    <div
      className={"header"}
      style={{
        position: pathname !== "/" ? "sticky" : "fixed",
        width: authModalOpen ? `calc(100% - ${scrollWidth})` : "100%",
      }}
    >
      <div className={"headerContainer"}>
        <Link to={"/"}>
          <Logo className="logo" />
        </Link>
        <Navigation navigationActive={navigationActive} />
        {isLoggedIn ? (
          <Profile />
        ) : (
          <button
            className={"buttonStandard"}
            type={"submit"}
            onClick={() => setAuthModalOpen(true)}
          >
            <ProfileIcon className={"profileIcon"} />
            <span>Войти</span>
          </button>
        )}
        <BurgerMenu
          setMenuActive={setMenuActive}
          navigationActive={navigationActive}
        />
        <ModalWindow
          modalIsOpen={authModalOpen}
          setModalIsOpen={setAuthModalOpen}
        >
          <AuthForm setModalIsOpen={setAuthModalOpen} />
        </ModalWindow>
      </div>
    </div>
  );
};

export default Header;
