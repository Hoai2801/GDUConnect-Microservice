import React, { useState } from "react";
// Link dùng để điều hướng bài viết
const Post = (props) => {
  const [index, setindex] = useState(0);
  const data = props.postData;
  var a = "2023-03-26 09:08:44";
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var datetime = date + " " + time;
  console.log(Date.parse(datetime) - Date.parse(a));
  function OpenPopUpImage() {
    document.querySelector(".pop-up-post").classList.toggle("active-pop-up");
  }
  function OpenPopUpLike() {
    document.querySelector(".pop-up-like").classList.toggle("active-pop-up");
  }
  function cong() {
    setindex((i) => {
      if (i === data.images[0].url.length - 1) return 0;
      return i + 1;
    });
  }
  function tru() {
    setindex((i) => {
      if (i === 0) return data.images[0].url.length - 1;
      return i - 1;
    });
  }
  function User() {
    return (
      <>
        <img src={data.user[0].avatar} loading="lazy"></img>
        <div>
          {data.user[0].fullname} - Khoa {data.user[0].department} <br />
          <span>{data.created_at}</span>
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
  function UserLikes() {
    return (
      <>
        {data.likes.map((like) => (
          <div key={like.id} className="container flex">
            <div className="avatar-user">
              <img src={like.avatar} className="w-[40px] h-[40px] "></img>
            </div>
            <div className="name-user flex">{like.fullname}</div>
          </div>
        ))}
      </>
    );
  }
  function UserCommentsList() {
    return (
      <ul>
        {data.comments.map((userid) => (
          <li key={userid.user[0].id}>{userid.user[0].fullname}</li>
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
            <div className="details flex">
              <div className="text-[15px] name">
                <span>{Comment.user[0].fullname}</span>- Khoa{" "}
                {Comment.user[0].department}
              </div>
              <p>{Comment.content}</p>
              <img src={Comment.image.url} loading="lazy"></img>
            </div>
          </div>
        ))}
      </>
    );
  }
  function ImgContent() {
    if (data.images[0].url.length === 1)
      return <img src={data.images[0].url} loading="lazy"></img>;
    if (data.images[0].url.length === 2)
      return (
        <div className="imagecontainer-2 grid grid-cols-2">
          <img src={data.images[0].url[0]} loading="lazy"></img>
          <img src={data.images[0].url[1]} loading="lazy"></img>
        </div>
      );
    if (data.images[0].url.length === 3)
      return (
        <div className="imagecontainer-3 grid grid-cols-2">
          <img src={data.images[0].url[0]} loading="lazy"></img>
          <img src={data.images[0].url[1]} loading="lazy"></img>
          <img src={data.images[0].url[2]} loading="lazy"></img>
        </div>
      );
    if (data.images[0].url.length === 4)
      return (
        <div className="imagecontainer-4 grid grid-cols-2">
          <img src={data.images[0].url[0]} loading="lazy"></img>
          <img src={data.images[0].url[1]} loading="lazy"></img>
          <img src={data.images[0].url[2]} loading="lazy"></img>
          <img src={data.images[0].url[3]} loading="lazy"></img>
        </div>
      );
    if (data.images[0].url.length === 5)
      return (
        <div className="imagecontainer-5 grid grid-cols-6">
          <img src={data.images[0].url[0]} loading="lazy"></img>
          <img src={data.images[0].url[1]} loading="lazy"></img>
          <img src={data.images[0].url[2]} loading="lazy"></img>
          <img src={data.images[0].url[3]} loading="lazy"></img>
          <img src={data.images[0].url[4]} loading="lazy"></img>
        </div>
      );
    if (data.images[0].url.length > 5)
      return (
        <div className="imagecontainer-6 grid grid-cols-6">
          <img src={data.images[0].url[0]} loading="lazy"></img>
          <img src={data.images[0].url[1]} loading="lazy"></img>
          <img src={data.images[0].url[2]} loading="lazy"></img>
          <img src={data.images[0].url[3]} loading="lazy"></img>
          <div>
            <img src={data.images[0].url[4]} loading="lazy"></img>
            <div className="flex plus">+{data.images[0].url.length - 5}</div>
          </div>
        </div>
      );
  }
  return (
    <div key={data.post_id}>
      <article className="post-box">
        <div className="title-box" align="left">
          <User />
        </div>
        <div className="content-box" align="left">
          {data.content}
        </div>
        <ImgContent />
        <div className="reaction-details flex">
          <div className="box" align="left" onClick={OpenPopUpLike}>
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
        <div className="pop-up-like" key={data.post_id}>
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
        </div>
        <div className="pop-up-post grid grid-cols-3" key={data.post_id}>
          <div className="image">
            <div className="image-container flex w-full h-full">
              <img src={data.images[0].url[index]}></img>
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
                Thích:
                {data.likes.length}
              </div>
              <div className="text-[14px]" style={{ color: "#65666B" }}>
                Bình luận:
                {data.comments.length}
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
