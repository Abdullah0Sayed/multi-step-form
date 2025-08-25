import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/layouts/Navbar";
// import Footer from "../components/layouts/Footer";

const Rootlayout = () => {
  return (
    <div className={`min-h-screen max-w-full`}>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Rootlayout;
