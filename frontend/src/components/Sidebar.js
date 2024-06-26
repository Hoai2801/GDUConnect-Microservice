import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import Image from "../image";
const Sidebar = () => {
  const userlogin = Cookies.get("token") ? true : false;
  function CloseSideBar() {
    const blurbg = document.querySelector(".blurbg");
    blurbg.classList.remove("activeblur");
    blurbg.classList.add("hidden");
    document.querySelector(".sidebar-home").classList.remove("active");
  }
  return (
    <>
      <div className="blurbg fixed inset-0 hidden" onClick={CloseSideBar}></div>
      <div className="sidebar-home fixed top-0 z-50 flex h-[100vh] w-[288px] translate-x-[-400px] flex-col gap-y-5 px-6 shadow transition duration-500">
        <div className="flex h-[63px] w-full items-center justify-between">
          <img className="h-[50px]" src={Image.Logo} alt=""></img>
          <h1 className="text-[20px] font-semibold text-white">GDU Connect</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            style={{ fill: "#9CA3AF" }}
            onClick={CloseSideBar}
            className="cursor-pointer"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
        <div className="flex flex-col gap-y-5" onClick={CloseSideBar}>
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
                Trang Chủ
              </div>
            </NavLink>
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
            {/* <NavLink
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
            </NavLink> */}
          </div>
          <div>
            <div style={{ color: "#9CA3AF" }} className="pl-[8px] text-[12px]">
              Khác
            </div>
            <div className="nav-list-item mt-[5px] flex h-[40px] w-full cursor-pointer items-center p-2">
              <div
                className="mr-[10px] flex h-[24px] w-[24px] items-center justify-center rounded border border-slate-600 px-[5px]"
                style={{ backgroundColor: "rgb(31,41,55)" }}
              >
                C
              </div>
              Câu lạc bộ
            </div>
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
        <div
          className="nav-list-item flex items-center justify-start p-2"
          onClick={CloseSideBar}
        >
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
          <a href="/auth">
            <div
              className="nav-list-item flex items-center justify-start p-2"
              onClick={CloseSideBar}
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
            </div>
          </a>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Sidebar;
