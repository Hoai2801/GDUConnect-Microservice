import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

const CreatePost = () => {
  // mock api of user
  const [user, setUser] = useState("");

  const token = Cookies.get("token");
  const jwt = token ? jwtDecode(token) : "";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/user/' + jwt.id);
        setUser(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchUser();
  }, [])

  // get last name of user from session or cookies
  const getLastName = (name) => {
    const arrName = name.split(" ");
    return arrName[arrName.length - 1];
  };

  return (
    <div
      className="shadow-lg border-black rounded-lg md:w-[600px] max-w-[600px] w-full h-fit py-5 bg-white flex px-5 create-post"
      style={{ marginBottom: "16px" }}
    >
      <div className="flex gap-5 w-full">
        {/* avatar */}
        <div className="h-[50px] w-[50px] min-w-[50px] rounded-full overflow-hidden">
          <img src={user && user.avatar? user.avatar : "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png"} alt="" className="w-full object-cover" />
        </div>
        {/* input */}
        <div className="h-[45px] w-full mt-1">
          <input
            type="text"
            name=""
            id=""
            placeholder={`Chào ${getLastName(user ? user.fullname : "")}, chia sẻ một chút nhé`}
            className="w-full h-full bg-gray-200 rounded-md p-5"
          />
        </div>
      </div>
      {/* button */}
      <div className="flex justify-end px-5 w-[40%] gap-5">
        <input type="file" onChange={null} id="actual-btn" hidden multiple />
        <label htmlFor="actual-btn" className=" hover:cursor-pointer">
          <img
            src="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png"
            alt=""
            className="w-10 h-10 mt-2"
          />
        </label>
        {/* submit the post */}
        <button onClick={null} className="bg-blue-400 px-1 h-fit py-2 mt-2 rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
