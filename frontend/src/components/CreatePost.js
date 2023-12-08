import React from "react";

const CreatePost = () => {
  // mock api of user
  const user = {
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Nguyen Van Toan",
  };

  // get last name of user from session or cookies
  const getLastName = (name) => {
    const arrName = name.split(" ");
    return arrName[arrName.length - 1];
  };

  return (
    <div
      className="shadow-lg border-black rounded-lg md:w-[500px] max-w-[500px] w-[90vw] h-[150px] mx-auto bg-white flex gap-2 flex-col items-center px-5"
      style={{ marginBottom: "16px" }}
    >
      <div className="flex gap-5 mt-8">
        {/* avatar */}
        <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden">
          <img src={user.avatar} alt="" className="w-full" />
        </div>
        {/* input */}
        <div className="h-[45px]">
          <input
            type="text"
            name=""
            id=""
            placeholder={`Chào ${getLastName(user.name)}, chia sẻ một chút nhé`}
            className="w-full h-full bg-gray-200 rounded-md p-5"
          />
        </div>
      </div>
      {/* button */}
      <div className="flex justify-end px-5 w-full gap-2">
        <input type="file" onChange={null} id="actual-btn" hidden multiple />
        <label for="actual-btn" className=" hover:cursor-pointer">
          <img
            src="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png"
            alt=""
            className="w-10 h-10"
          />
        </label>
        {/* submit the post */}
        <button onClick={null} className="bg-blue-400 px-3 py-2 rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
