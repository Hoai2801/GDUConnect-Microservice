import React from "react";
function Nav() {
  return (
    <>
      <a href="/">Bài Đăng</a>
      <a href="/room">Phòng Trọ</a>
      <a href="/shop">Buôn Bán</a>
      <a href="/competition">Cuộc Thi</a>
    </>
  );
}

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="logo">GDUConnect</h1>
        <div className="middle-section">
          <Nav />
        </div>
        <div className="right-section">
          <span class="material-symbols-outlined">menu</span>
          <button type="button">
            <a href="#">Đăng Nhập</a>
          </button>
        </div>
      </div>
      <div className="sidebar">
        <span class="material-symbols-outlined">close</span>
        <Nav />
      </div>
    </>
  );
};

export default Navbar;
