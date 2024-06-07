import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
const Post = (props) => {
  const navigator = useNavigate();
  const [index, setIndex] = useState(0);

  const data = props.postData;
  // console.log(data)
  const [comments, setComment] = useState([]);

  const token = Cookies.get("token");
  const jwt = token ? jwtDecode(token) : redirect("/auth");

  const [isLiked, setIsLiked] = useState(false);
  // const [isLiked, setIsLiked] = data && Array.isArray(data.likes) ? [data.likes.some(like => like.userId === jwt.id), () => {}] : [false, () => {}];
  const [isCommentsOpen, setCommentsOpen] = useState(false);

  useEffect(() => {
    // Update isLiked whenever data or jwt changes
    if (data && Array.isArray(data.likes)) {
      setIsLiked(data.likes.some((like) => like.userId === jwt.id));
    } else {
      setIsLiked(false);
    }
    fetch("http://localhost:8080/api/v1/post/comment/" + data.id)
      .then((response) => response.json())
      .then((data) => setComment(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (isDetailImagesOpen) {
      // Perform your logic here, e.g., using setInterval
      const intervalId = setInterval(() => {
        fetch("http://localhost:8080/api/v1/post/comment/" + data.id)
          .then((response) => response.json())
          .then((data) => setComment(data))
          .catch((error) => console.error(error));
      }, 5000); // Example interval of 5 seconds

      return () => clearInterval(intervalId); // Cleanup function to clear interval
    }
  });

  const [subComment, setSubComment] = useState();

  const [textareaValue, setTextareaValue] = useState("");

  const handleSubCommentChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleSubCommentSubmit = (event) => {
    event.preventDefault();
    // Do something with the textareaValue, e.g., send it to a server or perform some action
    console.log("Textarea value:", textareaValue);
  };

  // state quản lý trạng thái đóng mở của detail images component
  const [isDetailImagesOpen, setDetailImagesOpen] = useState(false);
  //for mobile devices
  /**
   * Returns a string representing the time difference between the current time and the given time.
   * @param {string} TimePost - The time to compare to the current time.
   * @returns {string} - A string representing the time difference.
   */
  function CreatePostTime(TimePost) {
    const today = new Date();
    const timespaces = today - new Date(TimePost);
    if (timespaces < 60000) {
      const seconds = Math.floor(timespaces / 1000);
      return `${seconds} giây`;
    } else if (timespaces < 3600000) {
      const minutes = Math.floor(timespaces / 60000);
      return `${minutes} phút`;
    } else if (timespaces < 86400000) {
      const hours = Math.floor(timespaces / 3600000);
      return `${hours} giờ`;
    } else if (timespaces < 604800000) {
      const days = Math.floor(timespaces / 86400000);
      return `${days} ngày`;
    } else if (timespaces < 604800000 * 48) {
      const weeks = Math.floor(timespaces / 604800000);
      return `${weeks} tuần`;
    } else {
      const years = Math.floor(timespaces / (604800000 * 48));
      return `${years} năm`;
    }
  }

  const toggleLike = async () => {
    if (token === undefined || token === "") {
      navigator("/auth");
      return;
    }
    if (isLiked === true) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const likeData = {
        userId: jwt.id,
        postId: data.id,
      };

      await axios.post(
        "http://localhost:8080/api/v1/post/unlike",
        likeData,
        config,
      );
      data.likes.length--;
      setIsLiked(false);
      console.log(isLiked + " " + data.id);
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const likeData = {
        userId: jwt.id,
        postId: data.id,
      };

      await axios.post(
        "http://localhost:8080/api/v1/post/like",
        likeData,
        config,
      );
      data.likes.length++;
      setIsLiked(true);
      console.log(isLiked + " " + data.id);
    }
  };

  function togglePopUpImage() {
    setDetailImagesOpen(!isDetailImagesOpen);
  }
  // for mobile devices
  function togglePopupComment() {
    setDetailImagesOpen(!isDetailImagesOpen);
    setCommentsOpen(!isCommentsOpen);
  }
  function closePopupComment() {
    setCommentsOpen(!isCommentsOpen);
  }
  function nextImage() {
    setIndex((currentIndex) =>
      currentIndex === data.images.length - 1 ? 0 : currentIndex + 1,
    );
  }

  function previousImage() {
    setIndex((i) => (i === 0 ? data.images.length - 1 : i - 1));
  }

  // State to hold main comment
  const [mainComment, setMainComment] = useState("");

  const handleMainComment = (event) => {
    setMainComment(event.target.value);
  };

  /**
   * Asynchronous function to create a comment
   */
  const createComment = async (id) => {
    // Check if mainComment is empty
    if (mainComment === "") {
      return;
    } else {
      // If mainComment is not empty, create the comment
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const data = new FormData();
      data.append("userId", jwt.id);
      data.append("content", mainComment);
      // data.append("image", []);

      // Make a POST request to create the comment
      const response = await axios.post(
        "http://localhost:8080/api/v1/post/comment/" + id,
        data,
        config,
      );

      // Reset mainComment and log the response data
      setMainComment("");
    }
  };

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
          className="mr-[10px] h-[40px] w-[40px] object-cover"
          style={{ clipPath: "circle()" }}
        />
        <div className="text-start text-[14px] text-black">
          {data.user.fullname} <br />{" "}
          <span className="text-[12px]">
            Khoa {data.user.department} &#x2022;{" "}
            {CreatePostTime(data.createdAt)}
          </span>
        </div>
      </>
    );
  }

  function UserComments() {
    return (
      <>
        {/* No one has commented yet       */}
        {comments && comments.length === 0 && (
          <h3 className="text-[15px] font-bold">
            Bài viết chưa có bình luận nào, bạn hãy trở thành người đầu tiên
          </h3>
        )}
        {/* Comments */}
        {comments &&
          comments.map((comment) => (
            <div
              key={comment.id}
              className="comment-details mb-[12px] grid grid-cols-[40px_1fr]"
            >
              {/* user avatar */}
              <div className="mr-1 max-h-[32px] min-h-[32px] min-w-[32px] max-w-[32px]">
                <img
                  className="avatar h-[32px] w-[32px] object-cover"
                  src={comment.user.avatar}
                  loading="lazy"
                  alt=""
                  style={{ clipPath: "circle()" }}
                />
              </div>
              {/* comment content */}
              <div className="flex flex-col items-start">
                <div className="flex flex-col items-start rounded-[20px] bg-gray-200 p-3">
                  <p className="text-[15px]">
                    {comment.user.fullname} &#x2022; {comment.user.department}
                  </p>
                  <p className="text-[15px]">{comment.content}</p>
                  {comment.imageURL ? (
                    <img
                      className="mt-[3px] max-h-[300px] rounded-xl"
                      src={comment.imageURL}
                      loading="lazy"
                      alt=""
                    />
                  ) : (
                    " "
                  )}
                </div>
                {/* comment actions */}
                <ul className="flex space-x-[10px] text-[12px]">
                  <li>{CreatePostTime(comment.createdAt)}</li>
                  <li className="cursor-pointer">Thích</li>
                </ul>
                <div className="mt-2 flex max-w-[300px]">
                  <img
                    src={
                      data.user.avatar ||
                      "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png"
                    }
                    className="h-[30px] w-[30px]"
                    alt=""
                    style={{ clipPath: "circle()" }}
                  />
                  <div className="relative flex w-full items-center justify-center">
                    <textarea
                      className="ml-[15px] w-full rounded px-2 py-1 text-[14px]"
                      style={{ backgroundColor: " #F0F2F5" }}
                      placeholder="Phản hồi..."
                    />
                    <button onClick={() => console.log("cmt")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                        className="absolute bottom-[5px] right-[5px] cursor-pointer"
                      >
                        <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }

  /**
   * Render the images based on the number of images in the data array.
   * @returns {JSX.Element} - The JSX element to render the images.
   */
  function ImgContent() {
    // If there is only one image
    if (data.images.length === 1)
      return (
        <img
          src={data.images[0].imageURL}
          loading="lazy"
          onClick={togglePopUpImage}
          alt=""
        />
      );
    // If there are two images
    if (data.images.length === 2)
      return (
        <div
          className="imagecontainer-2 grid grid-cols-2 gap-x-[3px]"
          onClick={togglePopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy" alt="" />
          <img src={data.images[1].imageURL} loading="lazy" alt="" />
        </div>
      );
    // If there are three images
    if (data.images.length === 3)
      return (
        <div
          className="imagecontainer-3 grid grid-cols-2 gap-[3px]"
          onClick={togglePopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy" alt="" />
          <img src={data.images[1].imageURL} loading="lazy" alt="" />
          <img src={data.images[2].imageURL} loading="lazy" alt="" />
        </div>
      );
    // If there are four images
    if (data.images.length === 4)
      return (
        <div
          className="imagecontainer-2 grid grid-cols-2 gap-[3px]"
          onClick={togglePopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy" alt="" />
          <img src={data.images[1].imageURL} loading="lazy" alt="" />
          <img src={data.images[2].imageURL} loading="lazy" alt="" />
          <img src={data.images[3].imageURL} loading="lazy" alt="" />
        </div>
      );
    if (data.images.length >= 5)
      return (
        <div
          className="imagecontainer-6 grid grid-cols-6 gap-[3px]"
          onClick={togglePopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy" alt="" />
          <img src={data.images[1].imageURL} loading="lazy" alt="" />
          <img src={data.images[2].imageURL} loading="lazy" alt="" />
          <img src={data.images[3].imageURL} loading="lazy" alt="" />
          {data.images.length > 5 ? (
            <div className="relative col-span-2 max-h-[200px]">
              <img src={data.images[4].imageURL} loading="lazy" alt="" />
              <div className="plus absolute inset-0 flex items-center justify-center text-[20px] text-white">
                +{data.images.length - 5}
              </div>
            </div>
          ) : (
            <div className="col-span-2 max-h-[200px]">
              <img src={data.images[4].imageURL} loading="lazy" alt="" />
            </div>
          )}
        </div>
      );
  }
  return (
    <>
      <article className="post-box mb-[16px] flex max-w-[1200px] flex-col rounded-[10px] bg-slate-50 pb-[12px]">
        <div className="title-box mb-[12px] flex items-center" align="left">
          <User />
        </div>
        <div className="content-box text-[14px]" align="left">
          {data.content}
        </div>
        <ImgContent />
        <div className="reaction-details mx-[16px] flex justify-between py-[10px]">
          <div className="box" align="left">
            <p>Thích: {data.likes.length}</p>
          </div>
          <div
            className="box cursor-pointer"
            align="right"
            onClick={togglePopUpImage}
          >
            <div className="hover:underline">Bình luận: {comments.length}</div>
          </div>
        </div>
        <div className="reaction mb-[8px] flex justify-around text-[15px]">
          <button onClick={() => toggleLike()}>
            <div className="box flex cursor-pointer items-center">
              {isLiked ? (
                <div className="w-[20px]">
                  <img
                    src="https://www.freeiconspng.com/thumbs/like-icon-png/black-like-icon-png-13.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              ) : (
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
              )}
              Thích
            </div>
          </button>
          <div>
            <div
              className="box btn-pu-p flex cursor-pointer items-center"
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
            {
              // for mobile devices
            }
            <div
              className="box btn-pu-cmt hidden cursor-pointer items-center"
              onClick={closePopupComment}
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
          </div>
          <div className="box flex cursor-pointer items-center">
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
          className={`pop-up-post fixed inset-0 z-10 grid max-h-[200vh] grid-cols-5 ${isDetailImagesOpen ? "" : "hidden"} ${data.images.length !== 0 ? "" : "bg-slate-800 bg-opacity-90"} `}
          key={data.post_id}
        >
          <div
            className={`image col-span-3 bg-black ${
              data.images.length !== 0 ? " " : "hidden"
            } `}
          >
            <div className="image-container relative flex h-[100vh] w-full items-center justify-center">
              <img
                src={
                  data.images.length !== 0 ? data.images[index].imageURL : ""
                }
                alt=""
              />
              <div
                onClick={previousImage}
                className="btn-img btn-img-left duration-400 group absolute bottom-0 left-0 top-0 flex w-[70px] cursor-pointer items-center justify-center transition-all hover:w-[60px]"
              >
                {data.images.length > 1 ? (
                  <button className="flex items-center justify-center bg-gray-400 p-[5px] text-black group-hover:bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 -960 960 960"
                      width="30"
                    >
                      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                    </svg>
                  </button>
                ) : (
                  ""
                )}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
                className="btn-close absolute right-[20px] top-[20px] z-[1] cursor-pointer fill-white text-[25px]"
                onClick={togglePopUpImage}
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
              <div
                onClick={nextImage}
                className="btn-img btn-img-right duration-400 group absolute bottom-0 right-0 top-0 flex w-[70px] cursor-pointer items-center justify-center transition-all hover:w-[60px]"
              >
                {data.images.length > 1 ? (
                  <button className="flex items-center justify-center bg-gray-400 p-[5px] text-black group-hover:bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 -960 960 960"
                      width="30"
                    >
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            {
              //for mobile devices
            }
            <div className="rc-img absolute bottom-0 left-0 right-0 hidden h-[10vh] justify-between px-4">
              <div className="box flex cursor-pointer items-center fill-white text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="mr-[5px] cursor-pointer"
                >
                  <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                </svg>
                Thích
              </div>
              <div
                className="box flex cursor-pointer items-center fill-white text-white"
                onClick={togglePopupComment}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="mr-[5px] cursor-pointer"
                >
                  <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
                </svg>
                Bình Luận
              </div>
              <div className="box flex cursor-pointer items-center fill-white text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="mr-[5px] cursor-pointer"
                >
                  <path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" />
                </svg>
                Chia sẻ
              </div>
            </div>
          </div>
          <div
            className={`comment-container relative flex w-full flex-col bg-slate-50 pl-[15px] ${
              data.images.length !== 0 ? "col-span-2" : "col-start-2 col-end-5"
            }`}
          >
            <div className="container-cmt-1">
              <div className="h-[100vh] overflow-y-scroll pb-[68px] pt-2">
                <div
                  className="mb-[12px] items-center py-2"
                  align="left"
                  style={{ borderBottom: "1px solid rgb(101, 103, 107)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={
                          data.user.avatar ||
                          "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png"
                        }
                        loading="lazy"
                        alt=""
                        className="mr-[8px] h-[32px] w-[32px] object-cover"
                        style={{ clipPath: "circle()" }}
                      ></img>
                      <div className="text-start text-[14px] text-black">
                        {data.user.fullname} <br />{" "}
                        <span className="text-[12px]">
                          Khoa {data.user.department} &#x2022;{" "}
                          {CreatePostTime(data.createdAt)}
                        </span>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 -960 960 960"
                      width="30"
                      className="btn-close cursor-pointer fill-black text-[25px]"
                      onClick={togglePopUpImage}
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </div>
                  <div className="text-[15px]">{data.content}</div>
                </div>
                <UserComments />
              </div>
            </div>
            <div className="textarea-1 absolute bottom-0 left-0 right-0 flex bg-white pb-2 pl-[15px] pt-3 ring-1 ring-black">
              <img
                src={
                  data.user.avatar ||
                  "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png"
                }
                className="h-[30px] w-[30px]"
                alt=""
                style={{ clipPath: "circle()" }}
              />
              <div className="relative flex w-full items-center justify-center">
                <textarea
                  className="ml-[15px] w-full rounded px-2 py-1 text-[14px]"
                  style={{ backgroundColor: " #F0F2F5" }}
                  placeholder="Viết bình luận..."
                  value={mainComment}
                  onChange={handleMainComment}
                />
                <button onClick={async () => createComment(data.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    className="absolute bottom-[5px] right-[5px] cursor-pointer"
                  >
                    <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className={`fixed inset-0 z-10 ${isCommentsOpen ? "" : "hidden"}`}>
        <div className="relative h-full w-full bg-white">
          <div className="absolute left-0 right-0 top-0 z-20 flex h-[50px] items-center justify-center bg-white ring-1 ring-black">
            <p>Bài viết của {data.user.fullname}</p>
          </div>
          <div onClick={closePopupComment}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
              className="btn-close absolute right-[20px] top-[10px] z-30 cursor-pointer fill-black text-[25px]"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
          <div className="h-[100vh] overflow-y-scroll pb-[70px] pt-[60px]">
            <UserComments />
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex bg-white pb-2 pl-[15px] pt-3 ring-1 ring-black">
            <img
              src={
                data.user.avatar ||
                "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png"
              }
              className="h-[30px] w-[30px]"
              alt=""
              style={{ clipPath: "circle()" }}
            />
            <div className="relative flex w-full items-center justify-center">
              <textarea
                className="ml-[15px] w-full rounded px-2 py-1 text-[14px]"
                style={{ backgroundColor: " #F0F2F5" }}
                placeholder="Viết bình luận000..."
                value={mainComment}
                onChange={handleMainComment}
              />
              <button onClick={async () => createComment(data.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="absolute bottom-[5px] right-[5px] cursor-pointer"
                >
                  <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
