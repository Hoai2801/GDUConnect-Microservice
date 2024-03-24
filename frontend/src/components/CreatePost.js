import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import Toast from "./Toast";

const CreatePost = () => {
  // mock api of user
  const [user, setUser] = useState("");

  const [postContent, setPostContent] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [responseStatus, setResponseStatus] = useState(false);
  const [contentToast, setContentToast] = useState("Đăng bài thất bại")

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
    data.append("groupId", 1);
    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        data.append("file", file);
      });
    }

    const response = await axios.post(
      "http://localhost:8080/api/v1/post",
      data,
      config
    ).catch((error) => {
      console.log(error)
    });

    if (response) {
      console.log(response);
    }

    if (response?.status === 200) {
      setSelectedFiles([]);
      setPostContent("");
      setImagePreviews([]);
      setContentToast("Đăng bài thành công")
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
          "http://localhost:8080/api/v1/user/" + jwt.id
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
      className="shadow border-black rounded-lg max-w-[1200px] w-full h-fit py-5 flex px-5 create-post flex-col bg-slate-50"
      style={{ marginBottom: "16px" }}
    >
      <div className="flex gap-5 w-full">
        {/* avatar */}
        <div className="h-[50px] w-[50px] min-w-[50px] rounded-full overflow-hidden flex items-center box-cp">
          <img
            src={
              user && user.avatar
                ? user.avatar
                : "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png"
            }
            alt=""
            className="w-full object-cover avatar-cp"
          />
        </div>
        {/* input */}
        <div className="h-[45px] w-full mt-1">
          <input
            type="text"
            name=""
            id=""
            value={postContent}
            onChange={handleInputChange}
            placeholder={`Chào ${getLastName(
              user ? user.fullname : ""
            )}, chia sẻ một chút nhé`}
            className="w-full h-full bg-gray-200 rounded-md p-5 input-cp"
          />
        </div>
        {/* image button */}
        <div
          className="flex justify-end px-1 w-[40%] gap-5 max-w-[130px] btn-cp"
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
              className="w-10 h-10 mt-2 add-img"
            />
          </label>
          {/* submit the post */}
          <button
            onClick={handleSubmit}
            className="bg-blue-400 px-3 h-fit py-2 mt-2 rounded-lg btn-submit"
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
            className="w-16 h-16 object-cover rounded-md mt-2"
          />
        ))}
      </div>
      {
        responseStatus ? <Toast content={contentToast} /> : null
      }
    </div>
  );
};

export default CreatePost;
