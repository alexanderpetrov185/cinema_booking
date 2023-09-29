import React, {useState} from 'react';
import "./navbar.scss"
import {Link, NavLink} from "react-router-dom";
import ModalWindow from "../modalWindow/ModalWindow";

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
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset !== 0);
        return () => (window.onscroll = null);
    };

    console.log(isScrolled)


    return (
        <div className={isScrolled ? "navbar active" : "navbar"}>
            <div className="logo">
                <Link to={"/"}>
                    <img src="/assets/images/cinemas_logo.png" alt="cinema_logo"/>
                </Link>
            </div>
            <div className="menu">
                {menu.map((item => (
                    <div className="item" key={item.id}>
                        <NavLink to={item.url} key={item.id}>
                            {({isActive, isPending}) => (
                                <span className={isActive ? "menuItemActive" : "menuItem"}>{item.title}</span>
                            )}
                        </NavLink>
                    </div>)))
                }
            </div>
            <button className={"buttonStandard"} type={"submit"} onClick={() => setModalIsOpen(true)}>Войти</button>
            <ModalWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias, culpa, cum
                    cupiditate dicta facilis illum modi quam quas qui quo quod repudiandae rerum sapiente, soluta
                    unde vel velit.</p>
            </ModalWindow>
            {/*<img src="/assets/icons/profile.svg" alt="profile_icon" className="profileIcon"/>*/}
        </div>
    );
};

export default Navbar;