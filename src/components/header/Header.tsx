import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link, useLocation } from "react-router-dom";
import ModalWindow from "../modalWindow/ModalWindow";
import { useAppSelector } from "../../redux/hooks/redux";
import Profile from "../profile/Profile";
import AuthForm from "./authForm/AuthForm";
import { ReactComponent as Logo } from "../../static/icons/logo.svg";
import { ReactComponent as Search } from "../../static/icons/search.svg";
import { ReactComponent as Notifications } from "../../static/icons/notifications.svg";
import { ReactComponent as ProfileIcon } from "../../static/icons/profile.svg";
import Navigation from "./navigation/Navigation";
import BurgerMenu from "../burgerMenu/BurgerMenu";

const Header = () => {
  const [burgerActive, setBurgerActive] = React.useState(false);
  const { isLoggedIn } = useAppSelector((state) => state.userReducer);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  let { pathname } = useLocation();
  const scrollWidth = window.innerWidth - document.body.clientWidth + "px";

  return (
    <>
      <div
        className={styles.header}
        style={{
          position: pathname !== "/" ? "sticky" : "fixed",
          width: authModalOpen ? `calc(100% - ${scrollWidth})` : "100%",
        }}
      >
        <div className={styles.headerContainer}>
          <Link to={"/"} className={styles.logo}>
            <Logo />
          </Link>
          <Navigation
            burgerActive={burgerActive}
            setBurgerActive={setBurgerActive}
          />
          <div className={styles.icons}>
            <button>
              <Search />
            </button>
            <button>
              <Notifications />
            </button>
            {isLoggedIn ? (
              <Profile />
            ) : (
              <button
                className={styles.authButton}
                type={"submit"}
                onClick={() => setAuthModalOpen(true)}
              >
                <ProfileIcon />
                <span>Войти</span>
              </button>
            )}
          </div>
          <BurgerMenu
            setBurgerActive={setBurgerActive}
            burgerActive={burgerActive}
          />
        </div>
      </div>
      <ModalWindow
        modalIsOpen={authModalOpen}
        setModalIsOpen={setAuthModalOpen}
      >
        <AuthForm setModalIsOpen={setAuthModalOpen} />
      </ModalWindow>
    </>
  );
};

export default Header;
