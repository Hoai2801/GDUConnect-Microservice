import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import Toast from "./Toast";

const CreatePost = ({ groupId }) => {
  // mock api of user
  const [user, setUser] = useState("");

  const [postContent, setPostContent] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [responseStatus, setResponseStatus] = useState(false);
  const [contentToast, setContentToast] = useState("Đăng bài thất bại");

  // State to hold image previews
  const [imagePreviews, setImagePreviews] = useState([]);

  //jwt decode
  const token = Cookies.get("token");
  const jwt = token ? jwtDecode(token) : "";

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Create image previews for selected files
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);

    setSelectedFiles(files);
  };

  // Cleanup for image previews when component unmounts
  useEffect(() => {
    return () => {
      imagePreviews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [imagePreviews]);

  const announce = () => {
    setResponseStatus(true);
    setTimeout(() => {
      setResponseStatus(false);
    }, 5000);
  };

  const handleSubmit = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (postContent === "") {
      return;
    }
    const data = new FormData();
    data.append("userId", jwt.id);
    data.append("content", postContent);
    data.append("groupId", groupId);
    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        data.append("file", file);
      });
    }

    const response = await axios
      .post("http://localhost:8080/api/v1/post", data, config)
      .catch((error) => {
        console.log(error);
      });

    if (response) {
      console.log(response);
    }

    if (response?.status === 200) {
      setSelectedFiles([]);
      setPostContent("");
      setImagePreviews([]);
      setContentToast("Đăng bài thành công");
      announce();
    }
  };

  // get last name of user from session or cookies
  const getLastName = (name) => {
    const arrName = name.split(" ");
    return arrName[arrName.length - 1];
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (jwt.id === undefined) {
          redirect("/auth");
        }
        const response = await axios.get(
          "http://localhost:8080/api/v1/user/" + jwt.id,
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUser();
  }, [jwt.id]);

  return (
    <div
      className="create-post flex h-fit w-full max-w-[1200px] flex-col rounded-lg border-black bg-slate-50 px-5 py-5 shadow"
      style={{ marginBottom: "16px" }}
    >
      <div className="flex w-full gap-5">
        {/* avatar */}
        <div className="box-cp flex h-[50px] w-[50px] min-w-[50px] items-center overflow-hidden rounded-full">
          <img
            src={
              user && user.avatar
                ? user.avatar
                : "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png"
            }
            alt=""
            className="avatar-cp w-full object-cover"
          />
        </div>
        {/* input */}
        <div className="mt-1 h-[45px] w-full">
          <input
            type="text"
            name=""
            id=""
            value={postContent}
            onChange={handleInputChange}
            placeholder={`Chào ${getLastName(
              user ? user.fullname : "",
            )}, chia sẻ một chút nhé`}
            className="input-cp h-full w-full rounded-md bg-gray-200 p-5"
          />
        </div>
        {/* image button */}
        <div
          className="btn-cp flex w-[40%] max-w-[130px] justify-end gap-5 px-1"
          style={{ marginLeft: "10px", flexShrink: "0" }}
        >
          <input
            type="file"
            onChange={handleFileChange}
            id="actual-btn"
            hidden
            multiple
          />
          <label htmlFor="actual-btn" className="hover:cursor-pointer">
            <img
              src="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png"
              alt=""
              className="add-img mt-2 h-10 w-10"
            />
          </label>
          {/* submit the post */}
          <button
            onClick={handleSubmit}
            className="btn-submit mt-2 h-fit rounded-lg bg-blue-400 px-3 py-2"
          >
            Đăng
          </button>
        </div>
      </div>
      {/* Display image previews */}
      <div className="flex gap-2">
        {imagePreviews.map((preview, index) => (
          <img
            key={index}
            src={preview}
            alt={`Preview ${index}`}
            className="mt-2 h-16 w-16 rounded-md object-cover"
          />
        ))}
      </div>
      {responseStatus ? <Toast content={contentToast} /> : null}
    </div>
  );
};

export default CreatePost;
