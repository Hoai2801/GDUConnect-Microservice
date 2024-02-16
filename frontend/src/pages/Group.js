import React from "react";

const Group = () => {
  const data = {
    id: 2,
    name: "Khoa Công Nghệ Thông Tin",
    fb: "https://www.facebook.com/khoacongnghethongtinGDU",
    zalo: "",
    discord: "",
    otherLink: "",
    background:
      "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
    avatar:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
  };
  return (
    <div>
      {/* infor of group */}
      <div className="flex justify-center pt-[30px]">
        <div className="lg:w-[200px] rounded-full lg:h-[200px] overflow-hidden w-[150px] h-[150px] flex justify-center">
          <img src={data.avatar} alt="logo" className="w-full h-full" />
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-[80px] lg:mt-[10px] text-center">
        {data.name}
      </h1>
      <div className="flex justify-center mt-5 gap-3">
          <a href="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="" className="w-5 h-5"/>
          </a>
          <a href="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png" alt="" className="w-5 h-5"/>
          </a>
          <a href="">
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="" className="w-5 h-5"/>
          </a>
          <a href="">
            <img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/95-512.png" alt="" className="w-5 h-5"/>
          </a>
      </div>
      <h2 className="font-bold text-[28px] pl-10">Bài viết</h2>
      {/* post of group */}
      <div className="w-full">
        
      </div>
    </div>
  );
};

export default Group;
