import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <Sidebar />
        <div className="respon ml-[288px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
