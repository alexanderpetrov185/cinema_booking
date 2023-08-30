import React from 'react';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Prices from "./pages/prices/Prices";
import Repertoire from "./pages/repertoire/Repertoire";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Help from "./pages/help/Help";
import "./styles/global.scss"
import Schedule from "./pages/schedule/Schedule";

function App() {
    const Layout = () => {
        return (
            <div className="main">
                <div className="container">
                    <div className="menuContainer">
                        <Navbar/>
                    </div>
                    <div className="contentContainer">
                        <Outlet/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
                {
                    path: "/schedule",
                    element: <Schedule/>,
                },
                {
                    path: "/about",
                    element: <About/>,
                },
                {
                    path: "/gallery",
                    element: <Gallery/>,
                },
                {
                    path: "/prices",
                    element: <Prices/>,
                },
                {
                    path: "/repertoire",
                    element: <Repertoire/>,
                },
                {
                    path: "/help",
                    element: <Help/>,
                },
            ]
        },
        {
            path: "/login",
            element: <Login/>
        },
    ]);

    return <RouterProvider router={router}/>;
}

export default App;
