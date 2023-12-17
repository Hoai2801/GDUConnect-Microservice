import React, { useState } from "react";
// Link dùng để điều hướng bài viết
const Post = (props) => {
  const [index, setIndex] = useState(0);
  const data = props.postData;

  // state quản lý trạng thái đóng mở của detail images component
  const [isDetailImagesOpen, setDetailImagesOpen] = useState(false);
  // const [isDetailLikesOpen, setDetailLikesOpen] = useState(false);
  // var: hạn chế sử dụng
  // let: sử dụng khi biến có thể thay đổi
  // const: nên dùng
  let a = "2023-03-26 09:08:44";
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let datetime = date + " " + time;
  console.log(Date.parse(datetime) - Date.parse(a));
  function OpenPopUpImage() {
    // document.querySelector(".pop-up-post").classList.toggle("active-pop-up");
    setDetailImagesOpen(!isDetailImagesOpen);
  }
  // function OpenPopUpLike() {
  //   // document.querySelector(".pop-up-like").classList.toggle("active-pop-up");
  //   setDetailLikesOpen(!isDetailLikesOpen);
  // }
  function cong() {
    setIndex((i) => {
      if (i === data.images.length - 1) return 0;
      return i + 1;
    });
  }
  function tru() {
    setIndex((i) => {
      if (i === 0) return data.images.length - 1;
      return i - 1;
    });
  }
  function User() {
    return (
      <>
        <img src={data.user[0].avatar} loading="lazy"></img>
        <div>
          {data.user[0].fullname} <br />{" "}
          <span>Khoa {data.user[0].department} </span>
          {/* <span>{data.created_at}</span> */}
        </div>
      </>
    );
  }
  function UserLikesList() {
    return (
      <ul>
        {data.likes.map((like) => (
          <li key={like.id}>{like.fullname}</li>
        ))}
      </ul>
    );
  }
  // function UserLikes() {
  //   return (
  //     <>
  //       {data.likes.map((like) => (
  //         <div key={like.id} className="container flex">
  //           <div className="avatar-user">
  //             <img src={like.avatar} className="w-[40px] h-[40px] "></img>
  //           </div>
  //           <div className="name-user flex">{like.fullname}</div>
  //         </div>
  //       ))}
  //     </>
  //   );
  // }
  function UserCommentsList() {
    return (
      <ul>
        {data.comments.map((userid) => (
          <li key={userid.id}>{userid.user[0].fullname}</li>
        ))}
      </ul>
    );
  }
  function UserComments() {
    return (
      <>
        {data.comments.map((Comment) => (
          <div key={Comment} className="comment-details flex">
            <img
              className="avatar"
              src={Comment.user[0].avatar}
              loading="lazy"
            ></img>
            <div>
              <div className="details flex">
                <div className="text-[15px] name">
                  {Comment.user[0].department}
                </div>
                <p>{Comment.content}</p>
                <img src={Comment.imageURL} loading="lazy"></img>
              </div>
              <ul className="text-[12px] flex">
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
          onClick={OpenPopUpImage}
        ></img>
      );
    if (data.images.length === 2)
      return (
        <div
          className="imagecontainer-2 grid grid-cols-2"
          onClick={OpenPopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy"></img>
          <img src={data.images[1].imageURL} loading="lazy"></img>
        </div>
      );
    if (data.images.length === 3)
      return (
        <div
          className="imagecontainer-3 grid grid-cols-2"
          onClick={OpenPopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy"></img>
          <img src={data.images[1].imageURL} loading="lazy"></img>
          <img src={data.images[2].imageURL} loading="lazy"></img>
        </div>
      );
    if (data.images.length === 4)
      return (
        <div
          className="imagecontainer-4 grid grid-cols-2"
          onClick={OpenPopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy"></img>
          <img src={data.images[1].imageURL} loading="lazy"></img>
          <img src={data.images[2].imageURL} loading="lazy"></img>
          <img src={data.images[3].imageURL} loading="lazy"></img>
        </div>
      );
    if (data.images.length === 5)
      return (
        <div
          className="imagecontainer-5 grid grid-cols-6"
          onClick={OpenPopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy"></img>
          <img src={data.images[1].imageURL} loading="lazy"></img>
          <img src={data.images[2].imageURL} loading="lazy"></img>
          <img src={data.images[3].imageURL} loading="lazy"></img>
          <img src={data.images[4].imageURL} loading="lazy"></img>
        </div>
      );
    if (data.images.length > 5)
      return (
        <div
          className="imagecontainer-6 grid grid-cols-6"
          onClick={OpenPopUpImage}
        >
          <img src={data.images[0].imageURL} loading="lazy"></img>
          <img src={data.images[1].imageURL} loading="lazy"></img>
          <img src={data.images[2].imageURL} loading="lazy"></img>
          <img src={data.images[3].imageURL} loading="lazy"></img>
          <div>
            <img src={data.images[4].imageURL} loading="lazy"></img>
            <div className="flex plus">+{data.images.length - 5}</div>
          </div>
        </div>
      );
  }
  return (
    <div key={data.id}>
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
              <UserLikesList />
            </p>
          </div>
          <div className="box" align="right" onClick={OpenPopUpImage}>
            <p>
              Bình luận: {data.comments.length}
              <UserCommentsList />
            </p>
          </div>
        </div>
        <div className="reaction flex">
          <div className="box">
            <span className="material-symbols-outlined">thumb_up</span>
            Thích
          </div>
          <div className="box">
            <span className="material-symbols-outlined">mode_comment</span>
            Bình Luận
          </div>
          <div className="box">
            <span class="material-symbols-outlined">share</span>
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
          className={`pop-up-post grid grid-cols-3 ${
            isDetailImagesOpen ? "" : "hidden"
          }`}
          key={data.post_id}
        >
          <div className="image">
            <div className="image-container flex w-full h-full">
              <img src={data.images[index].imageURL} alt="" />
              <div
                style={{ left: 0, position: "absolute" }}
                onClick={tru}
                className="button-img flex"
              >
                <button>
                  <span class="material-symbols-outlined">chevron_left</span>
                </button>
              </div>
              <div
                style={{ right: 0, position: "absolute" }}
                onClick={cong}
                className="button-img flex"
              >
                <button>
                  <span class="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
          <div className="comment-container w-full flex">
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
                onClick={OpenPopUpImage}
              >
                close
              </span>
            </div>
            <div
              className="flex text-[15px]"
              align="start"
              style={{ padding: "0 0 10px 15px" }}
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
              <div className="box">
                <span className="material-symbols-outlined">mode_comment</span>
                Bình Luận
              </div>
              <div className="box">
                <span class="material-symbols-outlined">share</span>
                Chia sẻ
              </div>
            </div>
            <div className="comment">
              <UserComments />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
export default Post;
