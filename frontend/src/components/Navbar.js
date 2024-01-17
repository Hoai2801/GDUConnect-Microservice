const Navbar = () => {
  const userlogin = 1;
  function UserHome() {
    return userlogin ? (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          style={{ fill: "#9CA3AF" }}
          className="cursor-pointer"
        >
          <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
        </svg>
        <div className="flex items-center ml-[15px] px-[15px] avt-box">
          <img
            className="w-[35px] h-[35px] object-contain avt-nav-home"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
            alt=""
          ></img>
          <div className="ml-[7px]">
            <p className="text-[13px] mb-[-4px]">Nguyen Van Toan</p>
            <span className="text-[12px]">Khoa công nghệ thông tin</span>
          </div>
        </div>
      </>
    ) : (
      <>
        <a href="/auth">
          <button className="bg-slate-900 text-white px-[12px] py-[7px] rounded-2xl text-[14px] ring-1 ring-slate-900 hover:bg-slate-50 hover:text-black transition-all">
            Đăng nhập
          </button>
        </a>
      </>
    );
  }
  function OpenSideBar() {
    const blurbg = document.querySelector(".blurbg");
    blurbg.classList.remove("hidden");
    blurbg.classList.toggle("activeblur");
    document.querySelector(".sidebar-home").classList.toggle("active");
  }
  return (
    <>
      <nav className="header-home w-full h-[63px] bg-white pl-[320px] pr-[32px] flex items-center justify-between shadow col-start-2 col-end-4 overflow-visible fixed top-0">
        <div className="flex items-center max-w-[500px] w-full">
          <div className="menubar-home pr-[10px]" onClick={OpenSideBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              style={{ fill: "#9CA3AF" }}
              className="cursor-pointer"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
          <div className="pl-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              style={{ fill: "#9CA3AF" }}
              className="cursor-pointer"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </div>
          <input
            placeholder="Search..."
            type="text"
            className="w-full focus:outline-none ml-[10px]"
          ></input>
        </div>
        <div className="flex items-center shrink-0 relative">
          <UserHome />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
