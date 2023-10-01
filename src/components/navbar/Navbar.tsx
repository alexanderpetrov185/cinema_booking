import React, {useState} from 'react';
import "./navbar.scss"
import {Link, NavLink} from "react-router-dom";
import ModalWindow from "../modalWindow/ModalWindow";
import LoginForm from "../authFroms/loginForm/LoginForm";
import {useAppSelector} from "../../redux/hooks/redux";
import Profile from "../profile/Profile";

const menu = [
    {
        id: 1,
        title: "Расписание",
        url: "/schedule",
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
]

const Navbar = () => {
    const {isLoggedIn} = useAppSelector(state => state.userReducer)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modalOpen = (state: boolean) => {
        setModalIsOpen(state)
    }

    return (
        <div className={"navbar"}>
            <div className="logo">
                <Link to={"/"}>
                    <img src="/assets/images/cinemas_logo.svg" alt="cinema_logo"/>
                </Link>
            </div>
            <div className="menu">
                {menu.map((item => (
                    <div className="item" key={item.id}>
                        <NavLink to={item.url} key={item.id}>
                            {({isActive}) => (
                                <span className={isActive ? "menuItemActive" : "menuItem"}>{item.title}</span>
                            )}
                        </NavLink>
                    </div>)))
                }
            </div>
            {isLoggedIn
                ? <Profile modalOpen={modalOpen}/>
                : <>
                    <button className={"buttonStandard"} type={"submit"} onClick={() => setModalIsOpen(true)}>
                        Войти
                    </button>
                    <ModalWindow modalIsOpen={modalIsOpen}
                                 setModalIsOpen={setModalIsOpen}><LoginForm/></ModalWindow>
                </>}
        </div>
    );
};

export default Navbar;
