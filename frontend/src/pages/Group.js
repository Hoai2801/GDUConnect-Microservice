import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

const Group = () => {
  const [group, setGroup] = useState();
  const [posts, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/group/" + id)
      .then((response) => response.json())
      .then((data) => {
        setGroup(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch("http://localhost:8080/api/v1/post/" + id + "/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div>
      {/* infor of group */}
      {group && (
        <div>
          <div className="flex justify-center pt-[30px]">
            <div className="flex h-[150px] w-[150px] justify-center overflow-hidden rounded-full lg:h-[200px] lg:w-[200px]">
              <img src={group.avatar} alt="logo" className="h-full w-full" />
            </div>
          </div>
          <h1 className="mt-[80px] text-center text-3xl font-bold lg:mt-[10px]">
            {group.name}
          </h1>
          <div className="mt-5 flex justify-center gap-3">
            {group.fb && (
              <a href="">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png"
                  alt=""
                  className="h-5 w-5"
                />
              </a>
            )}
            {group.zalo && (
              <a href="">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png"
                  alt=""
                  className="h-5 w-5"
                />
              </a>
            )}
            {group.discord && (
              <a href="">
                <img
                  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
                  alt=""
                  className="h-5 w-5"
                />
              </a>
            )}
            {group.otherLink && (
              <a href="">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/95-512.png"
                  alt=""
                  className="h-5 w-5"
                />
              </a>
            )}
          </div>
        </div>
      )}
      <div></div>
      {/* post of group */}
      <div className="flex w-full justify-center">
        <div
          className="post post-display col-start-1 col-end-2 w-[800px] pt-[0.75rem]"
          align="center"
        >
          <CreatePost groupId={id} />
          {posts ? (
            posts.map((post) => <Post postData={post} key={post.id} />)
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Group;
