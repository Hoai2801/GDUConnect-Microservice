// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";
import React from "react";
import Sidebar from "../components/Sidebar";
function OpenSideBar() {
  const blurbg = document.querySelector(".blurbg");
  blurbg.classList.remove("hidden");
  blurbg.classList.toggle("activeblur");
  document.querySelector(".sidebar-home").classList.toggle("active");
}
function User() {
  // const token = Cookies.get("token");
  // const decoded = jwtDecode(token);

  // console.log(decoded);
  // if (!decoded.sub)
  return (
    <>
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 -960 960 960"
          width="30"
          onClick={OpenSideBar}
          style={{ fill: "#9ca3af" }}
          className="cursor-pointer menu-nav hidden"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        <a href="/auth" className="pl-[5px] text-[13px]">
          <button className="rounded-[20px] bg-black text-[14px] px-[10px] py-[5px] relative text-white hover:bg-white hover:text-black ring-[1px] ring-black transition duration-500">
            Đăng Nhập
          </button>
        </a>
      </div>
    </>
  );
}
function Nav() {
  return (
    <div className="navlink">
      <a href="/">Trang chủ</a>
      <a href="/room">Phòng trọ</a>
      <a href="/shop">Buôn bán</a>
      <a href="/competition">Cuộc thi</a>
    </div>
  );
}
const NavbarLogin = () => {
  return (
    <>
      <div className="navbar fixed inset-0 h-[60px] flex justify-between items-center px-[30px] bg-slate-50">
        <h1 className="logo text-[28px] italic font-black">
          <a href="/">
            <span>GDU</span>Connect
          </a>
        </h1>
        <div className="flex" style={{ alignItems: "center" }}>
          <div className="middle-section flex justify-between">
            <Nav />
          </div>
          <div className="right-section flex items-center justify-end">
            <User />
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};
export default NavbarLogin;
