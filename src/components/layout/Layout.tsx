import React, { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import SplashScreen from "../splashScreen/SplashScreen";
import Header from "../header/Header";

const Layout = memo(() => {
  return (
    <>
      <Header />
      <div className="main">
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
});

export default Layout;
