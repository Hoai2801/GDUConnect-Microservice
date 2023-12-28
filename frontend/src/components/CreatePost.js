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
      className="shadow-lg border-black rounded-lg md:w-[600px] max-w-[500px] w-full h-fit py-5 bg-white flex px-5 create-post"
      style={{ marginBottom: "16px" }}
    >
      <div className="flex gap-5 w-full">
        {/* avatar */}
        <div className="h-[50px] w-[50px] min-w-[50px] rounded-full overflow-hidden flex items-center box-cp">
          <img
            src={user.avatar}
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
            placeholder={`Chào ${getLastName(user.name)}, chia sẻ một chút nhé`}
            className="w-full h-full bg-gray-200 rounded-md p-5"
          />
        </div>
      </div>
      {/* button */}
      <div
        className="flex justify-end px-1 w-[40%] gap-5 max-w-[130px] btn-cp"
        style={{ marginLeft: "10px", flexShrink: "0" }}
      >
        <input type="file" onChange={null} id="actual-btn" hidden multiple />
        <label htmlFor="actual-btn" className=" hover:cursor-pointer">
          <img
            src="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png"
            alt=""
            className="w-10 h-10 mt-2"
          />
        </label>
        {/* submit the post */}
        <button
          onClick={null}
          className="bg-blue-400 px-1 h-fit py-2 mt-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
