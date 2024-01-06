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

  // Toggle the visibility of the pop-up image.
  function togglePopUpImage() {
    setDetailImagesOpen(!isDetailImagesOpen);
  }

  //  Increments the index to display the next image.
  function nextImage() {
    setIndex((currentIndex) =>
      currentIndex === data.images.length - 1 ? 0 : currentIndex + 1
    );
  }

  //  Decrements the index to display the previous image.
  function previousImage() {
    setIndex((i) => {
      if (i === 0) {
        // If the current index is 0, wrap around to the last index.
        return data.images.length - 1;
      }
      // Decrement the index by 1.
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
        />
        <div style={{ textAlign: "start" }}>
          {data.user[0].fullname} <br />{" "}
          <span>Khoa {data.user[0].department} </span>
          {/* <span>{data.created_at}</span> */}
        </div>
      </>
    );
  }

  // Renders a list of user comments.
  // function UserCommentsList() {
  //   return (
  //     <ul>
  //       {data.comments.map((comment) => (
  //         <li key={comment.id}>{comment.user[0].fullname}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // Render the user comments.
  function UserComments() {
    return (
      <>
        {data.comments.length === 0 && (
          <h3 className="text-[15px] font-bold">
            Bài viết chưa có bình luận nào, bạn hãy trở thành người đầu tiên
          </h3>
        )}
        {data.comments.map((comment) => (
          <div
            key={comment.id}
            className="comment-details flex pb-[56px] pr-[20px]"
          >
            <div className="min-w-[32px] min-h-[32px] mr-1">
              {" "}
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
                  className="rounded-xl"
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
          className="imagecontainer-2 grid grid-cols-2"
          onClick={togglePopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy" alt="" />
          <img src={data.images[1].imageURL} loading="lazy" alt="" />
        </div>
      );
    if (data.images.length === 3)
      return (
        <div
          className="imagecontainer-3 grid grid-cols-2"
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
          className="imagecontainer-4 grid grid-cols-2"
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
          className="imagecontainer-5 grid grid-cols-6"
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
          className="imagecontainer-6 grid grid-cols-6"
          onClick={togglePopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy" alt="" />
          <img src={data.images[1].imageURL} loading="lazy" alt="" />
          <img src={data.images[2].imageURL} loading="lazy" alt="" />
          <img src={data.images[3].imageURL} loading="lazy" alt="" />
          <div>
            <img src={data.images[4].imageURL} loading="lazy" alt="" />
            <div className="flex plus">+{data.images.length - 5}</div>
          </div>
        </div>
      );
  }

  return (
    <article className="post-box bg-slate-50 mb-[16px] flex max-w-[600px] flex-col pb-[12px]">
      <div className="title-box flex mb-[12px] items-center" align="left">
        <User />
      </div>
      <div className="content-box text-[14px]" align="left">
        {data.content}
      </div>
      <ImgContent />
      <div className="reaction-details flex mx-[16px] py-[10px] justify-between">
        <div className="box" align="left">
          <p>
            Thích: {data.likes.length}
            {/* <UserLikesList /> */}
          </p>
        </div>
        <div
          className="box cursor-pointer"
          align="right"
          onClick={togglePopUpImage}
        >
          <div className="hover:underline">
            Bình luận: {data.comments.length}
            {/* <UserCommentsList /> */}
          </div>
        </div>
      </div>
      <div className="reaction flex justify-around">
        <div className="box">
          <span className="material-symbols-outlined">thumb_up</span>
          Thích
        </div>
        <div className="box" onClick={togglePopUpImage}>
          <span className="material-symbols-outlined">mode_comment</span>
          Bình Luận
        </div>
        <div className="box">
          <span className="material-symbols-outlined">share</span>
          Chia sẻ
        </div>
      </div>
      {/* <div
          className={`pop-up-like grid ${isDetailLikesOpen ? "" : "hidden"}`}
          key={data.post_id}
        >
          <div className="like-container w-full h-full shadow-lg">
            <div align="end">
              <span
                className="material-symbols-outlined"
                onClick={OpenPopUpLike}
              >
                close
              </span>
            </div>
            <div className="like-content" align="start">
              <UserLikes />
            </div>
          </div>
        </div> */}
      <div
        className={`pop-up-post grid grid-cols-5 fixed inset-0
        ${isDetailImagesOpen ? "" : "hidden"}
        ${data.images.length !== 0 ? "" : "bg-slate-800 bg-opacity-90"} `}
        key={data.post_id}
      >
        <div className={`image ${data.images.length !== 0 ? " " : "hidden"} `}>
          <div className="image-container flex w-full h-[100vh]">
            <img
              src={data.images.length !== 0 ? data.images[index].imageURL : ""}
              alt=""
            />
            <div
              style={{ left: 0, position: "absolute" }}
              onClick={previousImage}
              className="btn-img flex btn-img-left"
            >
              <button>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </div>
            <span
              className="material-symbols-outlined hidden btn-close text-[25px] right-[20px] absolute top-[20px]"
              onClick={togglePopUpImage}
            >
              close
            </span>
            <div
              onClick={nextImage}
              className="btn-img flex btn-img-right absolute right-0"
            >
              <button>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`comment-container max-h-[100vh] bg-slate-50 flex-col w-full h-full flex justify-between relative ${
            data.images.length !== 0 ? "col-span-2" : "col-start-2 col-end-5"
          }`}
        >
          <div>
            <div className="h-[60px] login-vissible bg-slate-50 px-[15px] justify-center items-center flex">
              <h1 className="logo text-[24px] flex justify-end text-black text-[24px] font-black">
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
              <span
                className="material-symbols-outlined"
                onClick={togglePopUpImage}
              >
                close
              </span>
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
            <div className="reaction flex" style={{ paddingTop: "10px" }}>
              <div className="box">
                <span className="material-symbols-outlined">thumb_up</span>
                Thích
              </div>
              <div className="box" onClick={togglePopUpImage}>
                <span className="material-symbols-outlined">mode_comment</span>
                Bình Luận
              </div>
              <div className="box">
                <span className="material-symbols-outlined">share</span>
                Chia sẻ
              </div>
            </div>
            <div className="comment max-h-[320px]">
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
