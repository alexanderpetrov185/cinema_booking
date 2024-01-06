import React, { lazy, useRef, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { checkAuth, fetchMoviesData } from "./redux/reducers/actionCreators";
import { useAppDispatch } from "./redux/hooks/redux";
import AppPreloader from "./components/preLoaders/appPreloader/AppPreloader";
import "./styles/global.scss";

import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Prices = lazy(() => import("./pages/prices/Prices"));
const Repertoire = lazy(() => import("./pages/repertoire/Repertoire"));
const Help = lazy(() => import("./pages/help/Help"));
const PageNotFound = lazy(() => import("./pages/pageNotFound/PageNotFound"));

const date = new Date().toLocaleDateString("en-CA");

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isFirstLoadingRef = useRef(true);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("token")) {
        dispatch(checkAuth());
      }
      dispatch(fetchMoviesData(date, isFirstLoadingRef.current));
      setIsLoading(false);
      isFirstLoadingRef.current = false;
    }, 500);
  }, []);

  if (isLoading) {
    return <AppPreloader />;
  }

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
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
