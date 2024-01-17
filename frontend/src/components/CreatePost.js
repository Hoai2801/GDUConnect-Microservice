import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

const CreatePost = () => {
  // mock api of user
  const [user, setUser] = useState("");

  const [postText, setPostText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleInputChange = (e) => {
    setPostText(e.target.value);
  };

  const handleFileChange = (e) => {
    // Handle multiple file selection
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = async () => {
    const config = {
      // headers: { Authorization: `Bearer ${token}` },
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjMiLCJpZCI6MSwibmFtZSI6IkhvYWkiLCJkZXBhcnRtZW50IjoiQ05UVCIsImNsYXNzcm9vbSI6IjIyMTQwMSIsImlhdCI6MTcwNTQxNzkxNiwiZXhwIjoxNzA1NDE5MzU2fQ.MGdFedQY_E_1a3_Lb_GJQcc6roK8fankvpfPJLLs_yJG6h6-iVsF_dbPjgSLCr7DmpC7Jli1vZOtLmwdDoDh1g`,
      },
    };
    const data = new FormData();
    data.append("userId", 1);
    data.append("content", postText);
    data.append("groupId", 1);
    selectedFiles.forEach((file) => {
      data.append("file", file);
    });
    // const data = {
    //   userId: 1,
    //   content: postText,
    //   groupId: 1,
    //   file: selectedFiles,
    // };
    const response = await axios.post(
      "http://localhost:8080/api/v1/post",
      data,
      config
    );

    console.log(response.data);
  };

  const token = Cookies.get("token");
  const jwt = token ? jwtDecode(token) : "";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/user/" + jwt.id
        );
        setUser(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUser();
  }, []);

  // get last name of user from session or cookies
  const getLastName = (name) => {
    const arrName = name.split(" ");
    return arrName[arrName.length - 1];
  };

  return (
    <div
      className="shadow-lg border-black rounded-lg max-w-[1200px] w-full h-fit py-5 bg-white flex px-5 create-post"
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
            onChange={handleInputChange}
            placeholder={`Chào ${getLastName(
              user ? user.fullname : ""
            )}, chia sẻ một chút nhé`}
            className="w-full h-full bg-gray-200 rounded-md p-5 input-cp"
          />
        </div>
      </div>
      {/* button */}
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
        <label htmlFor="actual-btn" className=" hover:cursor-pointer">
          <img
            src="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png"
            alt=""
            className="w-10 h-10 mt-2 add-img"
          />
        </label>
        {/* submit the post */}
        <button
          onClick={handleSubmit}
          className="bg-blue-400 px-1 h-fit py-2 mt-2 rounded-lg btn-submit"
        >
          Submit
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default CreatePost;
