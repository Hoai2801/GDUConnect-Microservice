import React from "react";
import CreatePost from "../components/CreatePost";
import GroupList from "../components/GroupList";
import Post from "../components/Post";
const Home = () => {
  const userlogin = 1;
  function UserHome() {
    if (userlogin) {
      return (
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
            ></img>
            <div className="ml-[7px]">
              <p className="text-[13px] mb-[-4px]">Nguyen Van Toan</p>
              <span className="text-[12px]">Khoa công nghệ thông tin</span>
            </div>
          </div>
        </>
      );
    }
    return (
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
    document.querySelector(".blurbg").classList.toggle("activeblur");
    document.querySelector(".sidebar-home").classList.toggle("active");
  }
  function CloseSideBar() {
    document.querySelector(".blurbg").classList.remove("activeblur");
    document.querySelector(".sidebar-home").classList.remove("active");
  }
  const posts = [
    {
      id: 4,
      user: [
        {
          id: 1,
          fullname: "Nguyen Van A",
          avatar: "https://source.unsplash.com/random",
          department: "Cong Nghe Thong tin",
        },
      ],
      createdAt: "2023-12-26 00:00:00",
      content: "Hello nha",
      images: [
        {
          id: 7,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 8,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 9,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 10,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 11,
          imageURL: "https://source.unsplash.com/random",
        },
      ],
      comments: [
        {
          id: 4,
          user: [
            {
              id: 1,
              fullname: "Hoaiagafafa",
              avatar: "https://source.unsplash.com/random",
              department: "kinh te - quan tri",
            },
          ],
          content: "wowjaljcoac",
          imageURL: "https://source.unsplash.com/random",
          createdAt: "2023-12-10 20:17:40",
        },
      ],
      likes: [
        {
          id: 6,
          userId: 1,
        },
      ],
    },
    {
      id: 5,
      user: [
        {
          id: 1,
          fullname: "Nguyen Van A",
          avatar: "https://source.unsplash.com/random",
          department: "Cong Nghe Thong tin",
        },
      ],
      createdAt: "2023-12-26 00:00:00",
      content: "Hello nha",
      images: [
        {
          id: 7,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 8,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 9,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 10,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 11,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 12,
          imageURL: "https://source.unsplash.com/random",
        },
      ],
      comments: [
        {
          id: 4,
          user: [
            {
              id: 1,
              fullname: "Hoaiagafafa",
              avatar: "https://source.unsplash.com/random",
              department: "kinh te - quan tri",
            },
          ],
          content: "wowjaljcoac",
          imageURL: "https://source.unsplash.com/random",
          createdAt: "2023-12-10 20:17:40",
        },
      ],
      likes: [
        {
          id: 6,
          userId: 1,
        },
      ],
    },
    {
      id: 6,
      user: [
        {
          id: 1,
          fullname: "Nguyen Van A",
          avatar: "https://source.unsplash.com/random",
          department: "Cong Nghe Thong tin",
        },
      ],
      createdAt: "2023-12-26 00:00:00",
      content: "Hello nha",
      images: "",
      comments: [
        {
          id: 4,
          user: [
            {
              id: 1,
              fullname: "Hoaiagafafa",
              avatar: "https://source.unsplash.com/random",
              department: "kinh te - quan tri",
            },
          ],
          content: "wowjaljcoac",
          imageURL: "https://source.unsplash.com/random",
          createdAt: "2023-12-10 20:17:40",
        },
      ],
      likes: [
        {
          id: 6,
          userId: 1,
        },
      ],
    },
  ];
  // real api
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/api/v1/post");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const result = await response.json();
  //       setPosts(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(posts);
  // return (
  //   // <div className="grid grid-cols-4">
  //   //   <GroupList />
  //   //   {/* px-5: add padding x 20px */}
  //   //   <div className="col-span-2 px-5 home ">
  //   //     <div className="home-post" align="center">
  //   //       <CreatePost />
  //   //       {/* nếu biến posts có data thì truyền data vào component Post,
  //   //       nếu không thì thể hiện Loading ... */}
  //   //       {posts ? (
  //   //         posts.map((post) => <Post postData={post} key={post.id} />)
  //   //       ) : (
  //   //         // viết một component loading để thể hiện trực quan hơn
  //   //         <p>Loading ...</p>
  //   //       )}
  //   //     </div>
  //   //   </div>
  //   // </div>
  // );
  return (
    <div className="grid grid-cols-4 mt-[-60px] grid-home">
      <div className="header-home w-full h-[63px] bg-white z-30 pl-[32px] pr-[32px] flex items-center justify-between shadow col-start-2 col-end-4 overflow-visible">
        <div className="flex items-center max-w-[500px] w-full">
          <div className="menubar-home pr-[10px]" onClick={OpenSideBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              style={{ fill: "#9CA3AF" }}
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
      </div>
      <div className="nav flex flex-col px-6 w-full z-30 gap-y-5 shadow col-start-1 col-end-2 row-start-1 row-end-3">
        <div className="flex justify-start h-[63px] w-full items-center">
          <img className="h-[50px]" src="20231229_043342.png"></img>
        </div>
        <ul className="gap-y-5 flex flex-col">
          <li>
            <ul>
              <a href="/">
                <li className="h-[40px] p-2 w-full flex items-center nav-list-item">
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
                </li>
              </a>
              <a href="/room">
                <li className="h-[40px] p-2 w-full mt-[5px] flex items-center nav-list-item">
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
                </li>
              </a>
              <a href="shop">
                <li className="h-[40px] p-2 w-full mt-[5px] flex items-center nav-list-item">
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
                </li>
              </a>
              <a href="/competition">
                <li className="h-[40px] p-2 w-full mt-[5px] flex items-center nav-list-item">
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
                </li>
              </a>
            </ul>
          </li>
          <li>
            <div style={{ color: "#9CA3AF" }} className="pl-[8px] text-[12px]">
              Khác
            </div>
            <li className="h-[40px] p-2 w-full  flex items-center mt-[5px] nav-list-item cursor-pointer">
              <div
                className="rounded px-[5px] border border-slate-600 mr-[10px] h-[24px] w-[24px] flex items-center justify-center"
                style={{ backgroundColor: "rgb(31,41,55)" }}
              >
                C
              </div>
              Câu lạc bộ
            </li>
            <li className="h-[40px] p-2 w-full  mt-[5px] flex items-center nav-list-item cursor-pointer">
              <div
                className="rounded px-[5px]  border border-slate-600 mr-[10px] w-[24px] h-[24px] flex items-center justify-center"
                style={{ backgroundColor: "#1F2937" }}
              >
                K
              </div>
              Khảo sát
            </li>
          </li>
        </ul>
        <div className="flex justify-start items-center p-2 nav-list-item">
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
            <div className="flex justify-start items-center p-2 nav-list-item">
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
      <main
        className="px-[40px] grid col-start-2 col-end-4 row-start-2 row-end-3 z-30"
        id="main"
      >
        <div
          className="col-end-2 col-start-1 max-h-[90vh] overflow-y-scroll post mt-[0.75rem]"
          align="center"
        >
          <CreatePost />
          {/* nếu biến posts có data thì truyền data vào component Post,
    nếu không thì thể hiện Loading ... */}
          {posts ? (
            posts.map((post) => <Post postData={post} key={post.id} />)
          ) : (
            // viết một component loading để thể hiện trực quan hơn
            <p>Loading ...</p>
          )}
        </div>
        <div>
          <GroupList />
        </div>
      </main>
      <div className="blurbg inset-0 fixed" onClick={CloseSideBar}></div>
      <div className="sidebar-home h-[100vh] flex flex-col px-6 z-50 gap-y-5 shadow col-start-1 col-end-2 row-start-1 row-end-3 w-[288px]">
        <div className="flex justify-between h-[63px] w-full items-center">
          <img className="h-[50px]" src="20231229_043342.png"></img>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            style={{ fill: "#9CA3AF" }}
            onClick={OpenSideBar}
            className="cursor-pointer"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
        <ul className="gap-y-5 flex flex-col">
          <li>
            <ul>
              <a href="/">
                <li className="h-[40px] p-2 w-full flex items-center nav-list-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    width="30"
                    className="mr-[10px]"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                  Bài đăng
                </li>
              </a>
              <a href="/room">
                <li className="h-[40px] p-2 w-full mt-[5px] flex items-center nav-list-item">
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
                </li>
              </a>
              <a href="shop">
                <li className="h-[40px] p-2 w-full mt-[5px] flex items-center nav-list-item">
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
                </li>
              </a>
              <a href="/competition">
                <li className="h-[40px] p-2 w-full mt-[5px] flex items-center nav-list-item">
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
                </li>
              </a>
            </ul>
          </li>
          <li>
            <div style={{ color: "#9CA3AF" }} className="pl-[8px] text-[12px]">
              Khác
            </div>
            <li className="h-[40px] p-2 w-full  flex items-center mt-[5px] nav-list-item cursor-pointer">
              <div
                className="rounded px-[5px] border border-slate-600 mr-[10px] h-[24px] w-[24px] flex items-center justify-center"
                style={{ backgroundColor: "rgb(31,41,55)" }}
              >
                C
              </div>
              Câu lạc bộ
            </li>
            <li className="h-[40px] p-2 w-full  mt-[5px] flex items-center nav-list-item cursor-pointer">
              <div
                className="rounded px-[5px]  border border-slate-600 mr-[10px] w-[24px] h-[24px] flex items-center justify-center"
                style={{ backgroundColor: "#1F2937" }}
              >
                K
              </div>
              Khảo sát
            </li>
          </li>
        </ul>
        <div className="flex justify-start items-center p-2 nav-list-item">
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
            <div className="flex justify-start items-center p-2 nav-list-item">
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
    </div>
  );
};

export default Home;
