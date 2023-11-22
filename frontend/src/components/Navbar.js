import React from "react";
function OpenMenu() {
  document.querySelector(".sidebar").classList.add("active");
}
function CloseMenu() {
  document.querySelector(".sidebar").classList.remove("active");
}
function Nav() {
  return (
    <>
      <ul>
        <li>
          <a href="/">Bài Đăng</a>
        </li>
        <li>
          <a href="/room">Phòng Trọ</a>
        </li>
        <li>
          <a href="/shop">Buôn Bán</a>
        </li>
        <li>
          <a href="/competition">Cuộc Thi</a>
        </li>
      </ul>
    </>
  );
}
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="logo">
          <a href="/">
            <span>GDU</span>Connect
          </a>
        </h1>
        <div className="middle-section">
          <Nav />
        </div>
        <div className="right-section">
          <button type="button">
            <a href="#">Đăng Nhập</a>
          </button>
          <span onClick={OpenMenu} class="material-symbols-outlined">
            menu
          </span>
        </div>
      </div>
      <div className="sidebar">
        <span onClick={CloseMenu} class="material-symbols-outlined">
          close
        </span>
        <Nav />
      </div>
    </>
  );
};

export default Navbar;
