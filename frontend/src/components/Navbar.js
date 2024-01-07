// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";
import React from "react";
import { NavLink } from "react-router-dom";
function OpenMenu() {
  const blurbg = document.querySelector(".blurbg2");
  blurbg.classList.remove("hidden");
  blurbg.classList.toggle("activeblur2");
  document.querySelector(".sidebar").classList.toggle("active");
}
function CloseMenu() {
  const blurbg = document.querySelector(".blurbg2");
  document.querySelector(".sidebar").classList.remove("active");
  blurbg.classList.remove("activeblur2");
  blurbg.classList.add("hidden");
}
function HideNone() {
  document.querySelector(".avt-menu").classList.toggle("hidden");
}
function User() {
  const u = 1;
  // const token = Cookies.get("token");
  // const decoded = jwtDecode(token);

  // console.log(decoded);
  // if (!decoded.sub)
  if (!u) {
    return (
      <div className="user-register flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 -960 960 960"
          width="30"
          className="mr-3"
          onClick={OpenMenu}
          style={{ fill: "#9ca3af" }}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        <a href="/auth">
          <button type="button">Đăng Nhập</button>
        </a>
      </div>
    );
  }
  return (
    <div className="flex items-center ml-[15px] pl-[15px] avt-box w-full relative">
      <div className="h-[30px] w-[30px] flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 -960 960 960"
          width="30"
          className="mr-3 cursor-pointer"
          onClick={OpenMenu}
          style={{ fill: "#9ca3af" }}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
      <img
        className="w-[35px] h-[35px] object-contain avt-nav-home"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
        alt=""
      ></img>
      <div className="ml-[7px]">
        <p className="text-[13px] mb-[-4px]">Nguyen Van Toan</p>
        <span className="text-[12px]">Khoa công nghệ thông tin</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 -960 960 960"
        width="30"
        className="cursor-pointer"
        style={{ fill: "#9CA3AF" }}
        onClick={HideNone}
      >
        <path d="M480-360 280-560h400L480-360Z" />
      </svg>
      <a href="/auth">
        <div className="absolute bottom-[-35px] right-0 flex bg-slate-50 shadow-lg rounded px-2 py-1 cursor-pointer avt-menu hidden hover:bg-slate-200 transition items-center justify-center w-[150px] ring-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="mr-[10px]"
            style={{ fill: "#9CA3AF" }}
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
          </svg>
          Đăng xuất
        </div>
      </a>
    </div>
  );
}
function Nav() {
  return (
    <div className="navlink" onClick={CloseMenu}>
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text-red-400" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Trang chủ
      </NavLink>
      <NavLink
        to="/room"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text-red-400" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Phòng trọ
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text-red-400" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Buôn bán
      </NavLink>
      <NavLink
        to="/competition"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text-red-400" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Cuộc thi
      </NavLink>
    </div>
  );
}
const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed inset-0 h-[60px] flex justify-between items-center px-[30px] bg-slate-50">
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
      </nav>
      <div
        className="blurbg2 inset-0 fixed z-0 hidden"
        onClick={CloseMenu}
      ></div>
      <aside className="sidebar justify-center top-0 h-[100vh] left-0 w-[341px] pb-8 flex flex-col items-center fixed z-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35"
          viewBox="0 -960 960 960"
          width="35"
          onClick={CloseMenu}
          style={{ fill: "black" }}
          className="absolute top-[18px] right-[20px] cursor-pointer p-[5px] rounded-[50%] bg-slate-50 "
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <div className="sidebarlink flex flex-col" onClick={CloseMenu}>
          <NavLink
            to="/"
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "pending" : "",
                isActive ? "text-red-400" : "",
                isTransitioning ? "transitioning" : "",
              ].join(" ")
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/room"
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "pending" : "",
                isActive ? "text-red-400" : "",
                isTransitioning ? "transitioning" : "",
              ].join(" ")
            }
          >
            Phòng trọ
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "pending" : "",
                isActive ? "text-red-400" : "",
                isTransitioning ? "transitioning" : "",
              ].join(" ")
            }
          >
            Buôn bán
          </NavLink>
          <NavLink
            to="/competition"
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "pending" : "",
                isActive ? "text-red-400" : "",
                isTransitioning ? "transitioning" : "",
              ].join(" ")
            }
          >
            Cuộc thi
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
