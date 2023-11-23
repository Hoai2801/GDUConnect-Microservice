import React, { useState } from "react";
// Link dùng để điều hướng bài viết
import { Link } from "react-router-dom";

const Post = (props) => {
    const data = props.postData;
    // console.log(data);
  return (
    <div>
        <div>
        {/* cách lấy data */}
            <p>{data.user[0].fullname} - Khoa {data.user[0].department}</p>
        </div>
    </div>
  );
};

export default Post;
