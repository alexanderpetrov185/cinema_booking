import React from 'react';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Prices from "./pages/prices/Prices";
import Repertoire from "./pages/repertoire/Repertoire";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
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
    ]);

    return <RouterProvider router={router}/>;
}

export default App;
