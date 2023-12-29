import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { NavLink } from "react-router-dom";
function OpenMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
}
function User() {
  const token = Cookies.get("token");
  const decoded = jwtDecode(token);

  console.log(decoded);
  if (!decoded.sub)
    return (
      <div className="user-register flex">
        <span onClick={OpenMenu} className="material-symbols-outlined menu">
          menu
        </span>
        <a href="/">GDU</a>
        <button type="button">
          <a href="#">Đăng Nhập</a>
        </button>
      </div>
    );
  return (
    <div className="user-register flex">
      <span onClick={OpenMenu} className="material-symbols-outlined menu">
        sort
      </span>
      <div className="user-border">
        <img src="#"></img>
        <p>{decoded.sub}</p>
        <span></span>
      </div>
    </div>
  );
}
function Nav() {
  return (
    <div>
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
      <nav className="navbar shadow-lg">
        <h1 className="logo">
          <a href="/">
            <span>GDU</span>Connect
          </a>
        </h1>
        <div className="middle-section">
          <Nav />
        </div>
        <div className="right-section">
          <User />
        </div>
      </nav>
      <aside className="sidebar">
        <span onClick={OpenMenu} className="material-symbols-outlined close">
          close
        </span>
        <Nav />
      </aside>
    </>
  );
};

export default Navbar;
