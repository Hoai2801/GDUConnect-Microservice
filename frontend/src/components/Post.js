import React, { useState } from "react";
// Link dùng để điều hướng bài viết
const Post = (props) => {
  const [index, setindex] = useState(0);
  const data = props.postData;
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
          <span>{data.user[0].fullname}</span>
          <br />
          Khoa {data.user[0].department}
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
          <div key={Comment}>
            <img src={Comment.user[0].avatar} loading="lazy"></img>
            <div>
              <div>
                <span>{Comment.user[0].fullname}</span>
                <br />
                Khoa {Comment.user[0].department}
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
          <img src={data.images[0].url[0]}></img>
          <img src={data.images[0].url[1]}></img>
        </div>
      );
    if (data.images[0].url.length === 3)
      return (
        <div className="imagecontainer-3 grid grid-cols-3">
          <img src={data.images[0].url[0]}></img>
          <img src={data.images[0].url[1]}></img>
          <img src={data.images[0].url[2]}></img>
        </div>
      );
    if (data.images[0].url.length === 4)
      return (
        <div className="imagecontainer-4 grid grid-cols-4">
          <img src={data.images[0].url[0]}></img>
          <img src={data.images[0].url[1]}></img>
          <img src={data.images[0].url[2]}></img>
          <img src={data.images[0].url[3]}></img>
        </div>
      );
    if (data.images[0].url.length === 5)
      return (
        <div className="imagecontainer-5 grid grid-cols-6">
          <img src={data.images[0].url[0]}></img>
          <img src={data.images[0].url[1]}></img>
          <img src={data.images[0].url[2]}></img>
          <img src={data.images[0].url[3]}></img>
          <img src={data.images[0].url[4]}></img>
        </div>
      );
    if (data.images[0].url.length > 5)
      return (
        <div className="imagecontainer-6 grid grid-cols-6">
          <img src={data.images[0].url[0]}></img>
          <img src={data.images[0].url[1]}></img>
          <img src={data.images[0].url[2]}></img>
          <img src={data.images[0].url[3]}></img>
          <div>
            <img src={data.images[0].url[4]}></img>
          </div>
          <div></div>
        </div>
      );
    return (
      <div className="image">
        <div className="imagecontainer">
          <img src={data.images[0].url[index]}></img>
          <div style={{ left: 0 }} onClick={tru}>
            <button>
              <span class="material-symbols-outlined">chevron_left</span>
            </button>
          </div>
          <div style={{ right: 0 }} onClick={cong}>
            <button>
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  // console.log(data);
  console.log(data.images[0].url.length);
  return (
    <>
      {/* cách lấy data */}
      <div className="post-box">
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
          <div className="box" align="right">
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
      </div>
      <div className="pop-up-post"></div>
    </>
  );
};

export default Post;
