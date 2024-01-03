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

    const minutes = Math.floor(timespaces / 60000);
    const hours = Math.floor(timespaces / 3600000);
    const days = Math.floor(timespaces / 86400000);
    const weeks = Math.floor(timespaces / 604800000);
    const years = Math.floor(timespaces / (604800000 * 48));

    if (timespaces < 60000) {
      return `${minutes} giây`;
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
          {data.user.fullname} <br /> <span>Khoa {data.user.department} </span>
          {/* <span>{data.created_at}</span> */}
        </div>
      </>
    );
  }

  // Renders a list of user comments.
  function UserCommentsList() {
    return (
      <ul>
        {data.comments.map((comment) => (
          <li key={comment.id}>{comment.user.fullname}</li>
        ))}
      </ul>
    );
  }

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
          <div key={comment.id} className="comment-details flex">
            <img
              className="avatar"
              src={comment.user.avatar}
              loading="lazy"
              alt=""
            />
            <div>
              <div className="details flex">
                <div className="text-[15px] name">
                  <p style={{ textAlign: "start" }}>{comment.user.fullname}</p>
                  <p>{comment.user.department}</p>
                </div>
                <p style={{ textAlign: "start" }}>{comment.content}</p>
                <img src={comment.imageURL} loading="lazy" alt="" />
              </div>
              <ul className="text-[12px] flex">
                <li>{CreatePostTime(comment.createdAt)}</li>
                <li>Thích</li>
                <li>Phản hồi</li>
              </ul>
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
    <article className="post-box">
      <div className="title-box" align="left">
        <User />
      </div>
      <div className="content-box" align="left">
        {data.content}
      </div>
      <ImgContent />
      <div className="reaction-details flex">
        <div className="box" align="left">
          <p>
            Thích: {data.likes.length}
            {/* <UserLikesList /> */}
          </p>
        </div>
        <div className="box" align="right" onClick={togglePopUpImage}>
          <div>
            Bình luận: {data.comments.length}
            {/* <UserCommentsList /> */}
          </div>
        </div>
      </div>
      <div className="reaction flex">
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
        className={`pop-up-post grid grid-cols-5 
        ${isDetailImagesOpen ? "" : "hidden"}
        ${data.images.length !== 0 ? "" : "bg-slate-800 bg-opacity-90"} `}
        key={data.post_id}
      >
        <div className={`image ${data.images.length !== 0 ? " " : "hidden"} `}>
          <div className="image-container flex w-full h-[90vh]">
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
              className="material-symbols-outlined hidden btn-close text-[25px]"
              style={{ right: "20px", position: "absolute", top: "20px" }}
              onClick={togglePopUpImage}
            >
              close
            </span>
            <div
              style={{ right: 0, position: "absolute" }}
              onClick={nextImage}
              className="btn-img flex btn-img-right"
            >
              <button>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`comment-container w-full h-full flex ${
            data.images.length !== 0
              ? "col-span-2"
              : "absolute left-[50%] translate-x-[-50%] lg:w-[40%] md:w-[60%] "
          }`}
        >
          <div className="h-[60px] login-vissible">
            <h1 className="logo text-[24px] flex">
              <span>GDU</span>Connect
            </h1>
          </div>
          <div
            className="flex title-container"
            style={{
              justifyContent: "space-between",
              margin: `20px 0 10px 0`,
              padding: "0 15px",
            }}
          >
            <div className="title flex">
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
            className="count-length flex"
            style={{
              justifyContent: "space-between",
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
          <div className="comment">
            <UserComments />
          </div>
        </div>
      </div>
    </article>
  );
};
export default Post;
