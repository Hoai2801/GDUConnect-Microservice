import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="bg-[#f0f2f5]">
      <Navbar />
      <div className="w-full pl-[290px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
