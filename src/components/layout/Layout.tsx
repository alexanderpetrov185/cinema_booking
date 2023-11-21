import React, { memo, Suspense } from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import SplashScreen from "../splashScreen/SplashScreen";

const Layout = memo(() => {
  return (
    <div className="main">
      <div className="container">
        <div className="menuContainer">
          <Navbar />
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
