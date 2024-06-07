import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Link, NavLink } from "react-router-dom";
import Image from "../image";
const Navbar = () => {
  const userlogin = Cookies.get("token") ? true : false;

  //jwt decode
  const token = Cookies.get("token");
  const jwt = token ? jwtDecode(token) : "";
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
        <div className="avt-box ml-[15px] flex items-center px-[15px]">
          <img
            className="avt-nav-home h-[35px] w-[35px] object-contain"
            src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/8-anh-dai-dien-trang-inkythuatso-03-15-26-54.jpg"
            alt=""
          ></img>
          <div className="ml-[7px]">
            <p className="mb-[-4px] text-[13px]">{jwt.name}</p>
            <span className="text-[12px]">Khoa {jwt.department}</span>
          </div>
        </div>
      </>
    ) : (
      <>
        <a href="/auth">
          <button className="rounded-2xl bg-slate-900 px-[12px] py-[7px] text-[14px] text-white ring-1 ring-slate-900 transition-all hover:bg-slate-50 hover:text-black">
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
      <nav className="header-home fixed top-0 col-start-2 col-end-4 flex h-[63px] w-full items-center justify-between overflow-visible bg-white pl-[320px] pr-[32px] shadow">
        <div className="flex w-full max-w-[500px] items-center">
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
            className="ml-[10px] w-full focus:outline-none"
          ></input>
        </div>
        <div className="relative flex shrink-0 items-center">
          <UserHome />
        </div>
      </nav>
      <aside className="nav fixed bottom-0 left-0 top-0 col-start-1 row-start-1 row-end-3 flex w-[288px] flex-col gap-y-5 px-6 shadow">
        <div className="flex h-[63px] w-full items-center justify-start">
          <img className="h-[50px]" src={Image.Logo} alt=""></img>
          <h1 className="ml-2 text-[24px] font-semibold text-white">
            GDU Connect
          </h1>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="navlink flex flex-col gap-y-2">
            <div>
              <NavLink
                to="/"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "nav-list-item-active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join("")
                }
              >
                <div className="nav-list-item flex h-[40px] w-full items-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    width="30"
                    className="mr-[10px]"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                  Trang chủ
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/room"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "nav-list-item-active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join("")
                }
              >
                <div className="nav-list-item mt-[5px] flex h-[40px] w-full items-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    className="mr-[10px]"
                    width="30"
                  >
                    <path d="M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160v-80h160v-560H480v56l-80-58v-78h520v720H680Zm-640 0v-400l280-200 280 200v400H360v-200h-80v200H40Zm80-80h80v-200h240v200h80v-280L320-622 120-480v280Zm560-360ZM440-200v-200H200v200-200h240v200Z" />
                  </svg>
                  Phòng trọ
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/shop"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "nav-list-item-active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join("")
                }
              >
                <div className="nav-list-item mt-[5px] flex h-[40px] w-full items-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    className="mr-[10px]"
                    width="30"
                  >
                    <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" />
                  </svg>
                  Buôn bán
                </div>
              </NavLink>
            </div>
            {/* <div>
              <NavLink
                to="/competition"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "nav-list-item-active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join("")
                }
              >
                <div className="h-[40px] p-2 w-full mt-[5px] flex items-center nav-list-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    className="mr-[10px]"
                    width="30"
                  >
                    <path d="M280-880h400v314q0 23-10 41t-28 29l-142 84 28 92h152l-124 88 48 152-124-94-124 94 48-152-124-88h152l28-92-142-84q-18-11-28-29t-10-41v-314Zm80 80v234l80 48v-282h-80Zm240 0h-80v282l80-48v-234ZM480-647Zm-40-12Zm80 0Z" />
                  </svg>
                  Cuộc thi
                </div>
              </NavLink>
            </div> */}
          </div>
          <div className="flex flex-col gap-y-2">
            <div style={{ color: "#9CA3AF" }} className="pl-[8px] text-[12px]">
              Khác
            </div>
            {/* <div className="h-[40px] p-2 w-full  flex items-center mt-[5px] nav-list-item cursor-pointer">
              <div
                className="rounded px-[5px] border border-slate-600 mr-[10px] h-[24px] w-[24px] flex items-center justify-center"
                style={{ backgroundColor: "rgb(31,41,55)" }}
              >
                C
              </div>
              Câu lạc bộ
            </div> */}
            {/* <div className="h-[40px] p-2 w-full  mt-[5px] flex items-center nav-list-item cursor-pointer">
              <div
                className="rounded px-[5px]  border border-slate-600 mr-[10px] w-[24px] h-[24px] flex items-center justify-center"
                style={{ backgroundColor: "#1F2937" }}
              >
                K
              </div>
              Khảo sát
            </div> */}
          </div>
        </div>
        <div className="nav-list-item flex items-center justify-start p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            className="mr-[10px]"
            style={{ fill: "#9CA3AF" }}
          >
            <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
          </svg>
          Cài đặt
        </div>
        {userlogin ? (
          <Link to="/auth">
            <button
              className="nav-list-item flex w-full items-center justify-start p-2"
              onClick={() => Cookies.set("token", "")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
                className="mr-[10px]"
                style={{ fill: "#9CA3AF" }}
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
              </svg>
              Đăng xuất
            </button>
          </Link>
        ) : (
          ""
        )}
      </aside>
    </>
  );
};
export default Navbar;
