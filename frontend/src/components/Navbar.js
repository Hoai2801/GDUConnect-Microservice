import React from "react";
function OpenMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
}
function User() {
  const user = 0;
  if (!user)
    return (
      <div className="user-register flex">
        <span onClick={OpenMenu} className="material-symbols-outlined menu">
          sort
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
      <a href="/">GDU</a>
      <div className="user-border">
        <p></p>
        <img src="#"></img>
      </div>
    </div>
  );
}
function Nav() {
  return (
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
          <User />
        </div>
      </div>
      <div className="sidebar">
        <span onClick={OpenMenu} className="material-symbols-outlined close">
          close
        </span>
        <Nav />
      </div>
    </>
  );
};

export default Navbar;
