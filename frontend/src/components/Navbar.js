import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { NavLink } from "react-router-dom";
function OpenMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
}
function CloseMenu() {
  document.querySelector(".sidebar").classList.remove("active");
}
function User() {
  // const token = Cookies.get("token");
  // const decoded = jwtDecode(token);

  // console.log(decoded);
  // if (!decoded.sub)
  return (
    <div className="user-register flex">
      <span onClick={OpenMenu} className="material-symbols-outlined menu">
        menu
      </span>
      <a href="/auth">
        <button type="button">
          <a href="#">Đăng Nhập</a>
        </button>
      </a>
    </div>
  );
  return (
    <div className="user-register flex">
      <span onClick={OpenMenu} className="material-symbols-outlined menu">
        sort
      </span>
      <div className="user-border">
        <img src="#"></img>
        {/* <p>{decoded.sub}</p> */}
        <span></span>
      </div>
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
        <h1 className="logo text-[38px]">
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
      <aside className="sidebar justify-center top-0 h-[100vh] w-[380px] pb-8 flex flex-col items-center fixed">
        <span onClick={OpenMenu} className="material-symbols-outlined close">
          close
        </span>
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
