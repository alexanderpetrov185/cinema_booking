import React from 'react';
import "./navbar.scss"
import {Link} from "react-router-dom";

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
    return (
        <div className="navbar">
            <div className="logo">
                <Link to={"/"}>
                    <img src="/assets/images/cinemas_logo.png" alt="cinema_logo"/>
                </Link>
            </div>
            <div className="menu">
                {menu.map((item => (
                    <div className="item" key={item.id}>
                        <Link to={item.url} key={item.id}>
                            <span className="menuItem">{item.title}</span>
                        </Link>
                    </div>)))
                }
            </div>
            <div className="icons">
                <img src="/assets/icons/search.svg" alt="search_icon" className="searchIcon"/>
                <img src="/assets/icons/profile.svg" alt="profile_icon" className="profileIcon"/>
            </div>
        </div>
    );
};

export default Navbar;