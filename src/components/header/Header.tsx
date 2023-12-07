import React, { useCallback, useMemo, useState } from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import ModalWindow from "../modalWindow/ModalWindow";
import { useAppSelector } from "../../redux/hooks/redux";
import Profile from "../profile/Profile";
import AuthBlock from "../authBlock/AuthBlock";

const Header = () => {
  const menu = useMemo(
    () => [
      {
        id: 1,
        title: "Расписание",
        url: "/schedulePage",
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuActive, setMenuActive] = React.useState(false);

  const modalOpen = useCallback((state: boolean) => {
    setModalIsOpen(state);
  }, []);
  return (
    <div className={"header"}>
      <div className="logo">
        <Link to={"/"}>
          <img src="/assets/images/cinemas_logo.svg" alt="cinema_logo" />
        </Link>
      </div>
      <div className={menuActive ? "menu active" : "menu"}>
        {menu.map((item) => (
          <div className="item" key={item.id}>
            <NavLink to={item.url} key={item.id}>
              {({ isActive }) => (
                <span className={isActive ? "menuItemActive" : "menuItem"}>
                  {item.title}
                </span>
              )}
            </NavLink>
          </div>
        ))}
      </div>
      {isLoggedIn ? (
        <Profile modalOpen={modalOpen} />
      ) : (
        <div className={"buttonsBlock"}>
          <button
            className={"buttonStandard"}
            type={"submit"}
            onClick={() => setModalIsOpen(true)}
          >
            <svg
              width="30px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2H14C11.1716 2 9.75736 2 8.87868 2.87868C8 3.75736 8 5.17157 8 8"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 19.5C5.64298 19.5 4.46447 19.5 3.73223 18.7678C3 18.0355 3 16.857 3 14.5V9.5C3 7.14298 3 5.96447 3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                d="M6 12L15 12M15 12L12.5 14.5M15 12L12.5 9.5"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Войти</span>
          </button>
          <div
            className="burgerIcon"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span />
          </div>
          <ModalWindow
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          >
            <AuthBlock setModalIsOpen={setModalIsOpen} />
          </ModalWindow>
        </div>
      )}
    </div>
  );
};

export default Header;
