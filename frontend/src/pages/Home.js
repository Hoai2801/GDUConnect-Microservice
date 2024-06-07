import React, { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import GroupList from "../components/GroupList";
import Post from "../components/Post";
const Home = () => {
  // const posts = [
  //   {
  //     id: 4,
  //     user: [
  //       {
  //         id: 1,
  //         fullname: "Nguyen Van A",
  //         avatar: "https://source.unsplash.com/random",
  //         department: "Cong Nghe Thong tin",
  //       },
  //     ],
  //     createdAt: "2023-12-26 00:00:00",
  //     content:
  //       "Hello nhaháhsaiụd   úiHDÚApu e ú8uyd8{ udxjKSDJ h HD io;ỤEkdhs  dshdsJfdlKHJd jkdH K fdHfiewuy8euỳ idj jk jkhsDKHsuHSKhjdksueuhjckx  jhgdhd fhfhjKSHdf jEH f dfhKDJFkhhsjndkfHHJDJKNjk dsuIYHdsf dehjsiuh dkjhKHfdSHdfkjEHU dJKH",
  //     images: [
  //       {
  //         id: 7,
  //         imageURL: "https://source.unsplash.com/random",
  //       },
  //       {
  //         id: 8,
  //         imageURL: "https://source.unsplash.com/random",
  //       },
  //       {
  //         id: 9,
  //         imageURL: "https://source.unsplash.com/random",
  //       },
  //       {
  //         id: 10,
  //         imageURL: "https://source.unsplash.com/random",
  //       },
  //       {
  //         id: 11,
  //         imageURL: "https://source.unsplash.com/random",
  //       },
  //     ],
  //     comments: [
  //       {
  //         id: 4,
  //         user: [
  //           {
  //             id: 1,
  //             fullname: "Hoaiagafafa",
  //             avatar: "https://source.unsplash.com/random",
  //             department: "kinh te - quan tri",
  //           },
  //         ],
  //         content: "wowjaljcoac",
  //         imageURL: "https://source.unsplash.com/random",
  //         createdAt: "2023-12-10 20:17:40",
  //       },
  //       {
  //         id: 4,
  //         user: [
  //           {
  //             id: 1,
  //             fullname: "Hoaiagafafa",
  //             avatar: "https://source.unsplash.com/random",
  //             department: "kinh te - quan tri",
  //           },
  //         ],
  //         content: "wowjaljcoac",
  //         imageURL: "https://source.unsplash.com/random",
  //         createdAt: "2023-12-10 20:17:40",
  //       },
  //     ],
  //     likes: [
  //       {
  //         id: 6,
  //         userId: 1,
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     user: [
  //       {
  //         id: 1,
  //         fullname: "Nguyen Van A",
  //         avatar: "https://source.unsplash.com/random",
  //         department: "Cong Nghe Thong tin",
  //       },
  //     ],
  //     createdAt: "2023-12-26 00:00:00",
  //     content: "Hello nha",
  //     images: [
  //       {
  //         id: 7,
  //         imageURL: "https://source.unsplash.com/random",
  //       },
  //       {
  //         id: 8,
  //         imageURL: "https://source.unsplash.com/random",
  //       },
  //       {
  //         id: 9,
  //         imageURL: "https://source.unsplash.com/random",
  //       },
  //       {
  //         id: 10,
  //         imageURL: "https://source.unsplash.com/random",
  //       },
  //       {
  //         id: 11,
  //         imageURL: "https://source.unsplash.com/random",
  //       },
  //       {
  //         id: 12,
  //         imageURL: "https://source.unsplash.com/random",
  //       },
  //     ],
  //     comments: [
  //       {
  //         id: 4,
  //         user: [
  //           {
  //             id: 1,
  //             fullname: "Hoaiagafafa",
  //             avatar: "https://source.unsplash.com/random",
  //             department: "kinh te - quan tri",
  //           },
  //         ],
  //         content: "wowjaljcoac",
  //         imageURL: "https://source.unsplash.com/random",
  //         createdAt: "2023-12-10 20:17:40",
  //       },
  //     ],
  //     likes: [
  //       {
  //         id: 6,
  //         userId: 1,
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     user: [
  //       {
  //         id: 1,
  //         fullname: "Nguyen Van A",
  //         avatar: "https://source.unsplash.com/random",
  //         department: "Cong Nghe Thong tin",
  //       },
  //     ],
  //     createdAt: "2023-12-26 00:00:00",
  //     content: "Hello nha",
  //     images: "",
  //     comments: [
  //       {
  //         id: 4,
  //         user: [
  //           {
  //             id: 1,
  //             fullname: "Hoaiagafafa",
  //             avatar: "https://source.unsplash.com/random",
  //             department: "kinh te - quan tri",
  //           },
  //         ],
  //         content: "wowjaljcoac",
  //         imageURL: "https://source.unsplash.com/random",
  //         createdAt: "2023-12-10 20:17:40",
  //       },
  //     ],
  //     likes: [
  //       {
  //         id: 6,
  //         userId: 1,
  //       },
  //     ],
  //   },
  // ];
  // // real api
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/post")
      .then((response) => response.json())
      .then((data) => {
        // if (data) {
        //   return;
        // }
        setPosts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="flex w-full justify-center">
      <div className="grid px-5 2xl:max-w-[1140px]" id="home">
        <div
          className="post post-display col-start-1 col-end-2 max-h-[calc(100vh-63px)] overflow-y-scroll pt-[0.75rem]"
          align="center"
        >
          <CreatePost />
          {posts ? (
            posts.map((post) => <Post postData={post} key={post.id} />)
          ) : (
            <p>Loading ...</p>
          )}
        </div>
        <div className="mt-[-0.75rem] pt-[0.75rem]">
          <GroupList />
        </div>
      </div>
    </div>
  );
};

export default Home;
