import React, { Suspense } from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="menuContainer">
          <Navbar />
        </div>
        <Suspense fallback={<h1>...loading</h1>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
