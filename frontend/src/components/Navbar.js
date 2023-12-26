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
        <p></p>
        <span></span>
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
