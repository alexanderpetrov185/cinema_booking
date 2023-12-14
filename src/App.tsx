import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { checkAuth } from "./redux/reducers/actionCreators";
import { useAppDispatch } from "./redux/hooks/redux";
import "./styles/global.scss";

import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Prices = lazy(() => import("./pages/prices/Prices"));
const Repertoire = lazy(() => import("./pages/repertoire/Repertoire"));
const Help = lazy(() => import("./pages/help/Help"));

function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/prices",
          element: <Prices />,
        },
        {
          path: "/repertoire",
          element: <Repertoire />,
        },
        {
          path: "/help",
          element: <Help />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
