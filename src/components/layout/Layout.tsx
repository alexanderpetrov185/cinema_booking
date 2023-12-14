import React, { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "../../styles/variebles.scss";
import PreLoader from "../preLoader/PreLoader";

const Layout = memo(() => {
  return (
    <>
      <Header />
      <div className="main">
        <Suspense fallback={<PreLoader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
});

export default Layout;
