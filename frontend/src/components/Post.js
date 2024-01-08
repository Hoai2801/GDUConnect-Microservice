import React, { useState } from "react";

const Post = (props) => {
  const [index, setIndex] = useState(0);
  const data = props.postData;

  // state quản lý trạng thái đóng mở của detail images component
  const [isDetailImagesOpen, setDetailImagesOpen] = useState(false);

  /**
   * Returns a string representing the time difference between the current time and the given time.
   * @param {string} TimePost - The time to compare to the current time.
   * @returns {string} - A string representing the time difference.
   */
  function CreatePostTime(TimePost) {
    const today = new Date();
    const timespaces = today - new Date(TimePost);
    const seconds = Math.floor(timespaces / 1000);
    const minutes = Math.floor(timespaces / 60000);
    const hours = Math.floor(timespaces / 3600000);
    const days = Math.floor(timespaces / 86400000);
    const weeks = Math.floor(timespaces / 604800000);
    const years = Math.floor(timespaces / (604800000 * 48));
    if (timespaces < 60000) {
      return `${seconds} giây`;
    } else if (timespaces < 3600000) {
      return `${minutes} phút`;
    } else if (timespaces < 86400000) {
      return `${hours} giờ`;
    } else if (timespaces < 604800000) {
      return `${days} ngày`;
    } else if (timespaces < 604800000 * 48) {
      return `${weeks} tuần`;
    } else {
      return `${years} năm`;
    }
  }
  function togglePopUpImage() {
    setDetailImagesOpen(!isDetailImagesOpen);
  }
  function nextImage() {
    setIndex((currentIndex) =>
      currentIndex === data.images.length - 1 ? 0 : currentIndex + 1
    );
  }
  function previousImage() {
    setIndex((i) => {
      if (i === 0) {
        return data.images.length - 1;
      }
      return i - 1;
    });
  }
  function User() {
    return (
      <>
        <img
          src={
            data.user.avatar ||
            "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png"
          }
          loading="lazy"
          alt=""
          className="w-[40px] h-[40px] object-cover mr-[10px]"
        />
        <div className="text-[14px] text-black" style={{ textAlign: "start" }}>
          {data.user[0].fullname} <br />{" "}
          <span className="text-[12px]">
            Khoa {data.user[0].department} &#x2022;{" "}
            {CreatePostTime(data.createdAt)}
          </span>
        </div>
      </>
    );
  }
  function UserComments() {
    return (
      <>
        {data.comments.length === 0 && (
          <h3 className="text-[15px] font-bold">
            Bài viết chưa có bình luận nào, bạn hãy trở thành người đầu tiên
          </h3>
        )}
        {data.comments.map((comment) => (
          <div key={comment.id} className="comment-details flex pr-[20px]">
            <div className="min-w-[32px] min-h-[32px] mr-1">
              <img
                className="avatar"
                src={comment.user[0].avatar}
                loading="lazy"
                alt=""
              />
            </div>
            <div align="start" style={{}}>
              <div className="details flex">
                <div className="text-[15px] name">
                  <p style={{ textAlign: "start" }}>
                    {comment.user[0].fullname}
                  </p>
                  <p>{comment.user[0].department}</p>
                </div>
                <p style={{ textAlign: "start" }}>{comment.content}</p>
              </div>
              {comment.imageURL ? (
                <img
                  className="rounded-xl max-h-[300px] mt-[3px]"
                  src={comment.imageURL}
                  loading="lazy"
                  alt=""
                />
              ) : (
                " "
              )}
              <ul className="text-[12px] flex">
                <li>{CreatePostTime(comment.createdAt)}</li>
                <li className="cursor-pointer">Thích</li>
                <li className="cursor-pointer">Phản hồi</li>
              </ul>
              <div className="flex pl-[20px] pt-[10px] pb-[10px] bg-slate-50">
                <img
                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png"
                  className="h-[24px] w-[24px]"
                  alt=""
                ></img>
                <div className="flex justify-center items-center w-full">
                  <textarea
                    className="ml-[15px] w-full rounded px-2 py-1 "
                    style={{ backgroundColor: " #F0F2F5" }}
                    placeholder="Thêm phản hồi..."
                  ></textarea>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    className="cursor-pointer"
                  >
                    <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
  function ImgContent() {
    if (data.images.length === 1)
      return (
        <img
          src={data.images[0].imageURL}
          loading="lazy"
          onClick={togglePopUpImage}
          alt=""
        />
      );
    if (data.images.length === 2)
      return (
        <div
          className="imagecontainer-2 gap-x-[3px] grid grid-cols-2"
          onClick={togglePopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy" alt="" />
          <img src={data.images[1].imageURL} loading="lazy" alt="" />
        </div>
      );
    if (data.images.length === 3)
      return (
        <div
          className="imagecontainer-3 gap-[3px] grid grid-cols-2"
          onClick={togglePopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy" alt="" />
          <img src={data.images[1].imageURL} loading="lazy" alt="" />
          <img src={data.images[2].imageURL} loading="lazy" alt="" />
        </div>
      );
    if (data.images.length === 4)
      return (
        <div
          className="imagecontainer-4 gap-[3px] grid grid-cols-2"
          onClick={togglePopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy" alt="" />
          <img src={data.images[1].imageURL} loading="lazy" alt="" />
          <img src={data.images[2].imageURL} loading="lazy" alt="" />
          <img src={data.images[3].imageURL} loading="lazy" alt="" />
        </div>
      );
    if (data.images.length === 5)
      return (
        <div
          className="imagecontainer-5 gap-[3px] grid grid-cols-6"
          onClick={togglePopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy" alt="" />
          <img src={data.images[1].imageURL} loading="lazy" alt="" />
          <img src={data.images[2].imageURL} loading="lazy" alt="" />
          <img src={data.images[3].imageURL} loading="lazy" alt="" />
          <img src={data.images[4].imageURL} loading="lazy" alt="" />
        </div>
      );
    if (data.images.length > 5)
      return (
        <div
          className="imagecontainer-6 gap-[3px] grid grid-cols-6"
          onClick={togglePopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy" alt="" />
          <img src={data.images[1].imageURL} loading="lazy" alt="" />
          <img src={data.images[2].imageURL} loading="lazy" alt="" />
          <img src={data.images[3].imageURL} loading="lazy" alt="" />
          <div className="col-span-2 relative max-h-[200px]">
            <img src={data.images[4].imageURL} loading="lazy" alt="" />
            <div className="flex plus absolute text-white inset-0 text-[20px] items-center justify-center">
              +{data.images.length - 5}
            </div>
          </div>
        </div>
      );
  }
  return (
    <article className="post-box bg-slate-50 mb-[16px] flex max-w-[600px] flex-col pb-[12px] rounded-[10px]">
      <div className="title-box flex mb-[12px] items-center" align="left">
        <User />
      </div>
      <div className="content-box text-[14px]" align="left">
        {data.content}
      </div>
      <ImgContent />
      <div className="reaction-details flex mx-[16px] py-[10px] justify-between">
        <div className="box" align="left">
          <p>Thích: {data.likes.length}</p>
        </div>
        <div
          className="box cursor-pointer"
          align="right"
          onClick={togglePopUpImage}
        >
          <div className="hover:underline">
            Bình luận: {data.comments.length}
          </div>
        </div>
      </div>
      <div className="reaction flex justify-around mb-[8px] text-[15px]">
        <div className="box flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="mr-[5px] cursor-pointer"
            style={{ fill: "rgb(101, 103, 107)" }}
          >
            <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
          </svg>
          Thích
        </div>
        <div
          className="box flex items-center cursor-pointer"
          onClick={togglePopUpImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="mr-[5px] cursor-pointer"
            style={{ fill: "rgb(101, 103, 107)" }}
          >
            <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
          </svg>
          Bình Luận
        </div>
        <div className="box flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="mr-[5px] cursor-pointer"
            style={{ fill: "rgb(101, 103, 107)" }}
          >
            <path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" />
          </svg>
          Chia sẻ
        </div>
      </div>
      <div
        className={`pop-up-post max-h-[200vh] grid grid-cols-5 fixed inset-0 z-10
        ${isDetailImagesOpen ? "" : "hidden"}
        ${data.images.length !== 0 ? "" : "bg-slate-800 bg-opacity-90"} `}
        key={data.post_id}
      >
        <div
          className={`image col-span-3 bg-black ${
            data.images.length !== 0 ? " " : "hidden"
          } `}
        >
          <div className="image-container items-center justify-center relative flex w-full h-[100vh]">
            <img
              src={data.images.length !== 0 ? data.images[index].imageURL : ""}
              alt=""
            />
            <div
              style={{ left: 0, position: "absolute" }}
              onClick={previousImage}
              className="btn-img flex btn-img-left top-0 bottom-0 items-center justify-center w-[70px] transition duration-500 cursor-pointer hover:w-[60px] group"
            >
              <button className="group-hover:bg-white text-black  p-[5px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 -960 960 960"
                  width="30"
                >
                  <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                </svg>
              </button>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
              className="btn-close text-[25px] right-[20px] absolute top-[20px] cursor-pointer z-[1]"
              onClick={togglePopUpImage}
              style={{ fill: "white" }}
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            <div
              onClick={nextImage}
              className="btn-img flex btn-img-right absolute right-0 top-0 bottom-0  items-center justify-center w-[70px] transition duration-500 cursor-pointer hover:w-[60px] group"
            >
              <button className="group-hover:bg-white text-black p-[5px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 -960 960 960"
                  width="30"
                >
                  <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`comment-container bg-slate-50 flex-col w-full flex justify-between relative overflow-y-srcoll h-[100vh] ${
            data.images.length !== 0 ? "col-span-2" : "col-start-2 col-end-5"
          }`}
        >
          <div>
            <div className="h-[60px] login-vissible bg-slate-50 px-[15px] justify-center items-center flex">
              <h1 className="logo text-[24px] flex justify-end text-black text-[24px] font-black italic">
                <span>GDU</span>Connect
              </h1>
            </div>
            <div
              className="flex title-container items-center pt-[20px] justify-between"
              style={{
                margin: `20px 0 10px 0`,
                padding: "0 15px",
              }}
            >
              <div className="title flex text-[14px]">
                <User />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="cursor-pointer"
                onClick={togglePopUpImage}
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </div>
            <div
              className="flex text-[15px]"
              style={{ padding: "0 0 10px 15px", textAlign: "start" }}
            >
              {data.content}
            </div>
            <div
              className="count-length flex justify-between"
              style={{
                padding: "0 15px 10px 15px",
                borderBottom: "1px solid rgb(186,186,186)",
              }}
            >
              <div className="text-[14px]" style={{ color: "#65666B" }}>
                Thích: {data.likes.length}
              </div>
              <div className="text-[14px]" style={{ color: "#65666B" }}>
                Bình luận: {data.comments.length}
              </div>
            </div>
            <div className="reaction p-[10px] flex justify-around mb-[8px] text-[15px]">
              <div className="box flex items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="mr-[5px] cursor-pointer"
                  style={{ fill: "rgb(101, 103, 107)" }}
                >
                  <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                </svg>
                Thích
              </div>
              <div
                className="box flex items-center cursor-pointer"
                onClick={togglePopUpImage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="mr-[5px] cursor-pointer"
                  style={{ fill: "rgb(101, 103, 107)" }}
                >
                  <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
                </svg>
                Bình Luận
              </div>
              <div className="box flex items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="mr-[5px] cursor-pointer"
                  style={{ fill: "rgb(101, 103, 107)" }}
                >
                  <path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" />
                </svg>
                Chia sẻ
              </div>
            </div>
            <div className="comment mt-[10px] overflow-y-scroll mb-[77px] max-h-[300px] overflow-y-scroll">
              <UserComments />
            </div>
          </div>
          <div
            className="flex pl-[20px] pt-[10px] absolute bottom-0 left-0 right-0 pb-[10px] bg-slate-50"
            style={{ borderTop: "1px solid rgb(186, 186, 186)" }}
          >
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png"
              className="h-[24px] w-[24px]"
              alt=""
            ></img>
            <div className="flex justify-center items-center w-full">
              <textarea
                className="ml-[15px] w-full rounded px-2 py-1 "
                style={{ backgroundColor: " #F0F2F5" }}
                placeholder="Viết bình luận..."
              ></textarea>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="cursor-pointer"
              >
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Post;
