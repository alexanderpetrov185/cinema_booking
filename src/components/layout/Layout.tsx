import React, { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import SplashScreen from "../splashScreen/SplashScreen";
import Header from "../header/Header";

const Layout = memo(() => {
  return (
    <div className="main">
      <div className="container">
        <div className="menuContainer">
          <Header />
        </div>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
});

export default Layout;
